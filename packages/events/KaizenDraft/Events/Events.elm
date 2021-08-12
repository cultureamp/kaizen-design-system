module KaizenDraft.Events.Events exposing
    ( dispatchIfChange
    , getKeyAndValue
    , isCode
    , isDownArrow
    , isEnter
    , isEnterAndValueChange
    , isEscape
    , isShift
    , isSpace
    , isTab
    , isUpArrow
    , mapAt
    , onBlurAt
    , onBlurAtChange
    , onChangeAt
    , onEnter
    , onEnterAt
    , onEnterAtChange
    , onEnterOrSpace
    , onFocusAt
    , onInputAt
    , onInputWithActions
    , onInputWithActionsIe
    , onKeyDown
    , onPaste
    , onSpace
    , stringAt
    )

import Html exposing (Html)
import Html.Events exposing (keyCode, on, preventDefaultOn)
import Json.Decode as Decode
import KaizenDraft.UserInteractions.Keyboard exposing (Key(..), decoder)


onEnter : msg -> Html.Attribute msg
onEnter msg =
    onKeyDown <| isEnter msg


onEnterAt : List String -> (String -> msg) -> Html.Attribute msg
onEnterAt path msg =
    onKeyDown <| Decode.andThen (mapAt path) (isEnter msg)


onEnterAtChange : List String -> (String -> msg) -> String -> Html.Attribute msg
onEnterAtChange path onChangeMsg currentValue =
    onKeyDown <|
        (stringAt path |> Decode.andThen (dispatchIfChange onChangeMsg currentValue))


onEnterOrSpace : msg -> Html.Attribute msg
onEnterOrSpace msg =
    onKeyDown <| Decode.oneOf [ isEnter msg, isSpace msg ]


onInputAt : List String -> (String -> msg) -> Html.Attribute msg
onInputAt path msg =
    on "input" <| mapAt path msg


onBlurAt : List String -> (String -> msg) -> Html.Attribute msg
onBlurAt path msg =
    on "blur" <| mapAt path msg


onChangeAt : List String -> (String -> msg) -> Html.Attribute msg
onChangeAt path msg =
    on "change" <| mapAt path msg


onBlurAtChange : List String -> (String -> msg) -> String -> Html.Attribute msg
onBlurAtChange path msg currentValue =
    on "blur" (stringAt path |> Decode.andThen (dispatchIfChange msg currentValue))


onFocusAt : List String -> (String -> msg) -> Html.Attribute msg
onFocusAt path msg =
    on "focus" <| mapAt path msg


onPaste : (String -> msg) -> Html.Attribute msg
onPaste msg =
    on "pasteMultiple" <|
        Decode.map msg <|
            Decode.at [ "detail", "text" ] Decode.string


onSpace : msg -> Html.Attribute msg
onSpace msg =
    onKeyDown <| isSpace msg


onKeyDown : Decode.Decoder msg -> Html.Attribute msg
onKeyDown decoder =
    preventDefaultOn "keydown" <|
        Decode.map (\msg -> ( msg, True )) decoder



-- This is handy for packaging up a bunch of actions to take onInput e.g. validations, calls to services etc


onInputWithActions : List String -> List ( String -> Bool, String -> action ) -> (List action -> msg) -> Html.Attribute msg
onInputWithActions path actionBuilders msg =
    on "input" (Decode.andThen (applyInputActions actionBuilders msg) (stringAt path))



-- IE does not support onInput event on contentEditable so this event will listen for a snowflake event listener when IE is detected.
-- This will need to be setup with javascript on app load and ideally only fired when IE is detected.


onInputWithActionsIe : String -> List String -> List ( String -> Bool, String -> action ) -> (List action -> msg) -> Html.Attribute msg
onInputWithActionsIe eventName path actionBuilders msg =
    on eventName (Decode.andThen (applyInputActions actionBuilders msg) (stringAt path))



-- decoder helpers


applyInputActions :
    List ( String -> Bool, String -> action )
    -> (List action -> msg)
    -> String
    -> Decode.Decoder msg
applyInputActions actions actionMsg value =
    let
        actionData : ( String -> Bool, String -> action ) -> Maybe action
        actionData ( predicate, dataBuilder ) =
            if predicate value then
                Just (dataBuilder value)

            else
                Nothing

        buildActionData : List action
        buildActionData =
            List.filterMap actionData actions
    in
    Decode.map actionMsg (Decode.succeed buildActionData)


stringAt : List String -> Decode.Decoder String
stringAt path =
    Decode.at path Decode.string


mapAt : List String -> (String -> msg) -> Decode.Decoder msg
mapAt path msg =
    Decode.map msg (stringAt path)


dispatchIfChange : (String -> msg) -> String -> String -> Decode.Decoder msg
dispatchIfChange msg currentValue newValue =
    if currentValue /= newValue then
        Decode.succeed (msg newValue)

    else
        Decode.fail "ignored input"


isCode : Key -> msg -> Int -> Decode.Decoder msg
isCode key msg code =
    if decoder code == key then
        Decode.succeed msg

    else
        Decode.fail "not the right key"


isEnter : msg -> Decode.Decoder msg
isEnter msg =
    keyCode |> Decode.andThen (isCode Enter msg)


isSpace : msg -> Decode.Decoder msg
isSpace msg =
    keyCode |> Decode.andThen (isCode Space msg)


isEscape : msg -> Decode.Decoder msg
isEscape msg =
    keyCode |> Decode.andThen (isCode Escape msg)


isDownArrow : msg -> Decode.Decoder msg
isDownArrow msg =
    keyCode |> Decode.andThen (isCode DownArrow msg)


isUpArrow : msg -> Decode.Decoder msg
isUpArrow msg =
    keyCode |> Decode.andThen (isCode UpArrow msg)


isShift : msg -> Decode.Decoder msg
isShift msg =
    keyCode |> Decode.andThen (isCode Shift msg)


isTab : msg -> Decode.Decoder msg
isTab msg =
    keyCode |> Decode.andThen (isCode Tab msg)


isEnterAndValueChange : String -> (String -> msg) -> msg -> ( Int, String ) -> Decode.Decoder msg
isEnterAndValueChange currentValue onChangeValue onNoChangeValue ( code, value ) =
    case decoder code of
        Enter ->
            if value /= currentValue then
                Decode.succeed (onChangeValue value)

            else
                Decode.succeed onNoChangeValue

        _ ->
            Decode.fail "ignore input"


getKeyAndValue : List String -> Decode.Decoder ( Int, String )
getKeyAndValue path =
    let
        keyAndValue : Int -> String -> ( Int, String )
        keyAndValue code value =
            ( code, value )
    in
    Decode.map2 keyAndValue keyCode (stringAt path)

module Kaizen.Select.SelectInput exposing
    ( InputSizing(..)
    , currentValue
    , default
    , defaultWidth
    , disabled
    , inputId
    , inputSizing
    , onBlurMsg
    , onFocusMsg
    , onInput
    , onMousedown
    , preventKeydownOn
    , sizerId
    , view
    )

import Html exposing (Html, div, input, text)
import Html.Attributes exposing (attribute, id, size, style, type_, value)
import Html.Events exposing (on, onBlur, onFocus, preventDefaultOn)
import Json.Decode as Decode
import Kaizen.Events.Events as Events


type Config msg
    = Config (Configuration msg)


type InputSizing
    = Dynamic
    | Fixed


type alias Configuration msg =
    { onInput : Maybe (String -> msg)
    , onBlur : Maybe msg
    , onFocus : Maybe msg
    , onMousedown : Maybe msg
    , currentValue : Maybe String
    , disabled : Bool
    , minWidth : Int
    , preventKeydownOn : List (Decode.Decoder msg)
    , inputSizing : InputSizing
    }



-- DEFAULTS


defaults : Configuration msg
defaults =
    { onInput = Nothing
    , onBlur = Nothing
    , onFocus = Nothing
    , onMousedown = Nothing
    , currentValue = Nothing
    , disabled = False
    , minWidth = defaultWidth
    , preventKeydownOn = []
    , inputSizing = Dynamic
    }


default : Config msg
default =
    Config defaults


sizerId : String -> String
sizerId sid =
    "kaizen-select-input-sizer-target-" ++ sid


inputId : String -> String
inputId iid =
    "kaizen-select-input-target-" ++ iid



-- CONSTANTS


defaultWidth : Int
defaultWidth =
    2



-- MODIFIERS


inputSizing : InputSizing -> Config msg -> Config msg
inputSizing width (Config config) =
    Config { config | inputSizing = width }


preventKeydownOn : List (Decode.Decoder msg) -> Config msg -> Config msg
preventKeydownOn decoders (Config config) =
    Config { config | preventKeydownOn = decoders }


onInput : (String -> msg) -> Config msg -> Config msg
onInput msg (Config config) =
    Config { config | onInput = Just msg }


onBlurMsg : msg -> Config msg -> Config msg
onBlurMsg msg (Config config) =
    Config { config | onBlur = Just msg }


onFocusMsg : msg -> Config msg -> Config msg
onFocusMsg msg (Config config) =
    Config { config | onFocus = Just msg }


onMousedown : msg -> Config msg -> Config msg
onMousedown msg (Config config) =
    Config { config | onMousedown = Just msg }


currentValue : String -> Config msg -> Config msg
currentValue value_ (Config config) =
    if String.isEmpty value_ then
        Config { config | currentValue = Nothing }

    else
        Config { config | currentValue = Just value_ }


disabled : Bool -> Config msg -> Config msg
disabled predicate (Config config) =
    Config { config | disabled = predicate }


view : Config msg -> String -> Html msg
view (Config config) id_ =
    let
        inputWidthStyle =
            case config.inputSizing of
                Dynamic ->
                    if String.isEmpty inputValue then
                        [ size 1 ]

                    else
                        [ size <| String.length inputValue + config.minWidth ]

                Fixed ->
                    [ style "width" (String.fromInt config.minWidth ++ "px") ]

        input_ changeMsg =
            Events.onInputAt [ "target", "value" ] changeMsg

        blur blurMsg =
            onBlur blurMsg

        focus focusMsg =
            onFocus focusMsg

        mousedown mousedownMsg =
            on "mousedown" <| Decode.succeed mousedownMsg

        inputValue =
            Maybe.withDefault "" config.currentValue

        events =
            if config.disabled then
                []

            else
                List.filterMap identity
                    [ Maybe.map input_ config.onInput
                    , Maybe.map blur config.onBlur
                    , Maybe.map focus config.onFocus
                    , Maybe.map mousedown config.onMousedown
                    ]
                    ++ [ preventOn ]

        preventOn =
            preventDefaultOn "keydown" <|
                Decode.map
                    (\m -> ( m, True ))
                    (Decode.oneOf config.preventKeydownOn)

        inputStyles =
            [ style "box-sizing" "content-box"
            , style "background" "0px center"
            , style "border" "0px"
            , style "font-size" "inherit"
            , style "outline" "0px"
            , style "padding" "0px"
            , style "color" "inherit"
            ]
                ++ inputWidthStyle

        sizerStyles =
            [ style "position" "absolute"
            , style "top" "0px"
            , style "left" "0px"
            , style "visibility" "hidden"
            , style "height" "0px"
            , style "overflow" "scroll"
            , style "white-space" "pre"
            , style "font-size" "16px"
            , style "letter-spacing" "normal"
            , style "text-transform" "none"
            ]

        autoSizeInputContainerStyles =
            [ style "padding-bottom" "2px"
            , style "padding-top" "2px"
            , style "box-sizing" "border-box"
            , style "margin" "2px"
            ]
    in
    div autoSizeInputContainerStyles
        [ input
            ([ id (inputId id_), value inputValue, type_ "text", attribute "autocomplete" "new-password" ] ++ events ++ inputStyles)
            []

        -- query the div width to set the input width
        , div ([ id (sizerId id_) ] ++ sizerStyles) [ text inputValue ]
        ]

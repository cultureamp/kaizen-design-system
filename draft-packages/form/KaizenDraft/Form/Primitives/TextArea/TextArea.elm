module KaizenDraft.Form.Primitives.TextArea.TextArea exposing
    ( Config
    , InputStatus(..)
    , ariaDescribedBy
    , autoComplete
    , automationId
    , controlled
    , default
    , disabled
    , id
    , onBlurWithValue
    , onChange
    , onEnter
    , onFocusMsg
    , placeholder
    , reversed
    , rows
    , status
    , textAreaValue
    , view
    )

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes
import Html.Events exposing (onFocus, onInput)
import Json.Encode
import KaizenDraft.Events.Events as Events


styles =
    css "@kaizen/draft-form/styles/TextArea.module.scss"
        { wrapper = "wrapper"
        , textarea = "textarea"
        , default = "default"
        , reversed = "reversed"
        , disabled = "disabled"
        , error = "error"
        , success = "success"
        , withDisabled = "withDisabled"
        , withReversed = "withReversed"
        , focusRing = "focusRing"
        }



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type InputStatus
    = Default
    | Success
    | Error


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , ariaDescribedBy : Maybe String
    , placeholder : String
    , disabled : Bool
    , textAreaValue : String
    , controlled : Bool
    , autoComplete : Bool
    , reversed : Bool
    , onChange : Maybe (String -> msg)
    , onBlur : Maybe (String -> msg)
    , onEnter : Maybe msg
    , onFocus : Maybe msg
    , status : InputStatus
    , rows : Int
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
    , ariaDescribedBy = Nothing
    , disabled = False
    , placeholder = ""
    , textAreaValue = ""
    , controlled = True
    , autoComplete = True
    , reversed = False
    , onChange = Nothing
    , onBlur = Nothing
    , onEnter = Nothing
    , onFocus = Nothing
    , status = Default
    , rows = 1
    }



-- VARIANTS


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }


ariaDescribedBy : String -> Config msg -> Config msg
ariaDescribedBy value (Config config) =
    Config { config | ariaDescribedBy = Just value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


placeholder : String -> Config msg -> Config msg
placeholder value (Config config) =
    Config { config | placeholder = value }


textAreaValue : String -> Config msg -> Config msg
textAreaValue value (Config config) =
    Config { config | textAreaValue = value }


controlled : Bool -> Config msg -> Config msg
controlled isControlled (Config config) =
    Config { config | controlled = isControlled }


autoComplete : Bool -> Config msg -> Config msg
autoComplete predicate (Config config) =
    Config { config | autoComplete = predicate }


reversed : Bool -> Config msg -> Config msg
reversed value (Config config) =
    Config { config | reversed = value }


onChange : (String -> msg) -> Config msg -> Config msg
onChange value (Config config) =
    Config { config | onChange = Just value }


onBlurWithValue : (String -> msg) -> Config msg -> Config msg
onBlurWithValue msg (Config config) =
    Config { config | onBlur = Just msg }


onEnter : msg -> Config msg -> Config msg
onEnter msg (Config config) =
    Config { config | onEnter = Just msg }


onFocusMsg : msg -> Config msg -> Config msg
onFocusMsg msg (Config config) =
    Config { config | onFocus = Just msg }


status : InputStatus -> Config msg -> Config msg
status value (Config config) =
    Config { config | status = value }


rows : Int -> Config msg -> Config msg
rows value (Config config) =
    Config { config | rows = value }


view : Config msg -> Html msg
view (Config config) =
    let
        idAttr =
            case config.id of
                Just idString ->
                    [ Html.Attributes.id idString ]

                Nothing ->
                    []

        automationIdAttr =
            case config.automationId of
                Just idString ->
                    [ Html.Attributes.attribute "data-automation-id" idString ]

                Nothing ->
                    []

        ariaDescribedByAttr =
            case config.ariaDescribedBy of
                Just idString ->
                    [ Html.Attributes.attribute "aria-describedby" idString ]

                Nothing ->
                    []

        disabledAttr =
            if config.disabled then
                [ Html.Attributes.disabled True ]

            else
                []

        textAreaValueAttr =
            if config.controlled then
                [ Html.Attributes.value config.textAreaValue ]

            else
                [ Html.Attributes.property "defaultValue"
                    (Json.Encode.string config.textAreaValue)
                ]

        placeholderAttr =
            [ Html.Attributes.placeholder config.placeholder ]

        onChangeAttr =
            case config.onChange of
                Just msg ->
                    [ onInput msg ]

                Nothing ->
                    []

        onBlurWithValueAttr =
            case config.onBlur of
                Just msg ->
                    [ Events.onBlurAt [ "target", "value" ] msg ]

                Nothing ->
                    []

        onEnterAttr =
            case config.onEnter of
                Just msg ->
                    [ Events.onEnter msg ]

                Nothing ->
                    []

        onFocusAttr =
            case config.onFocus of
                Just msg ->
                    [ onFocus msg ]

                Nothing ->
                    []

        autoCompleteAttr =
            if config.autoComplete then
                []

            else
                [ Html.Attributes.attribute "autocomplete" "off" ]

        rowsAttr =
            [ Html.Attributes.rows config.rows ]

        attribs =
            idAttr
                ++ onChangeAttr
                ++ automationIdAttr
                ++ ariaDescribedByAttr
                ++ disabledAttr
                ++ textAreaValueAttr
                ++ placeholderAttr
                ++ onBlurWithValueAttr
                ++ onEnterAttr
                ++ autoCompleteAttr
                ++ onFocusAttr
                ++ rowsAttr

        -- HTML OUTPUT
        inputWrapperHtml =
            div
                [ styles.classList
                    [ ( .wrapper, True )
                    , ( .withDisabled, config.disabled )
                    , ( .withReversed, config.reversed )
                    ]
                ]

        textAreaHtml =
            textarea
                (attribs
                    ++ [ styles.classList
                            [ ( .textarea, True )
                            , ( .default, config.reversed == False )
                            , ( .reversed, config.reversed )
                            , ( .disabled, config.disabled )
                            , ( .error, config.status == Error )
                            , ( .success, config.status == Success )
                            ]
                       ]
                )
                []
    in
    inputWrapperHtml
        [ textAreaHtml
        , div [ styles.class .focusRing ] []
        ]

module KaizenDraft.Form.Primitives.Input.Input exposing
    ( Config
    , InputStatus(..)
    , InputType(..)
    , ariaDescribedBy
    , autoComplete
    , automationId
    , controlled
    , default
    , disabled
    , endIconAdornment
    , id
    , inputType
    , inputValue
    , onBlurWithValue
    , onChange
    , onEnter
    , onFocusMsg
    , placeholder
    , reversed
    , startIconAdornment
    , status
    , view
    )

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes
import Html.Events exposing (onFocus, onInput)
import Html.Extra exposing (nothing)
import KaizenDraft.Events.Events as Events


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/Primitives/Input/styles.scss"
        { wrapper = "wrapper"
        , input = "input"
        , default = "default"
        , reversed = "reversed"
        , disabled = "disabled"
        , error = "error"
        , success = "success"
        , withDisabled = "withDisabled"
        , withReversed = "withReversed"
        , withStartIconAdornment = "withStartIconAdornment"
        , startIconAdornment = "startIconAdornment"
        , withEndIconAdornment = "withEndIconAdornment"
        , endIconAdornment = "endIconAdornment"
        }



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type InputType
    = Text
    | Email
    | Password


type InputStatus
    = Default
    | Success
    | Error


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , ariaDescribedBy : Maybe String
    , inputType : InputType
    , placeholder : String
    , disabled : Bool
    , inputValue : String
    , controlled : Bool
    , autoComplete : Bool
    , reversed : Bool
    , onChange : Maybe (String -> msg)
    , onBlur : Maybe (String -> msg)
    , onEnter : Maybe msg
    , onFocus : Maybe msg
    , status : InputStatus
    , startIconAdornment : List (Html msg)
    , endIconAdornment : List (Html msg)
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
    , ariaDescribedBy = Nothing
    , inputType = Text
    , disabled = False
    , placeholder = ""
    , inputValue = ""
    , controlled = True
    , autoComplete = True
    , reversed = False
    , onChange = Nothing
    , onBlur = Nothing
    , onEnter = Nothing
    , onFocus = Nothing
    , status = Default
    , startIconAdornment = []
    , endIconAdornment = []
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


inputType : InputType -> Config msg -> Config msg
inputType value (Config config) =
    Config { config | inputType = value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


placeholder : String -> Config msg -> Config msg
placeholder value (Config config) =
    Config { config | placeholder = value }


inputValue : String -> Config msg -> Config msg
inputValue value (Config config) =
    Config { config | inputValue = value }


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


startIconAdornment : List (Html msg) -> Config msg -> Config msg
startIconAdornment value (Config config) =
    Config { config | startIconAdornment = value }


endIconAdornment : List (Html msg) -> Config msg -> Config msg
endIconAdornment value (Config config) =
    Config { config | endIconAdornment = value }


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

        inputValueAttr =
            if config.controlled then
                [ Html.Attributes.value config.inputValue ]

            else
                []

        placeholderAttr =
            [ Html.Attributes.placeholder config.placeholder ]

        inputTypeAttr =
            case config.inputType of
                Text ->
                    [ Html.Attributes.type_ "text" ]

                Email ->
                    [ Html.Attributes.type_ "email" ]

                Password ->
                    [ Html.Attributes.type_ "password" ]

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

        attribs =
            idAttr
                ++ onChangeAttr
                ++ automationIdAttr
                ++ ariaDescribedByAttr
                ++ disabledAttr
                ++ inputValueAttr
                ++ placeholderAttr
                ++ inputTypeAttr
                ++ onBlurWithValueAttr
                ++ onEnterAttr
                ++ autoCompleteAttr
                ++ onFocusAttr

        -- HTML OUTPUT
        inputWrapperHtml =
            div
                [ styles.classList
                    [ ( .wrapper, True )
                    , ( .withDisabled, config.disabled )
                    , ( .withReversed, config.reversed )
                    , ( .withStartIconAdornment, List.length config.startIconAdornment >= 1 )
                    , ( .withEndIconAdornment, List.length config.endIconAdornment >= 1 )
                    ]
                ]

        inputHtml =
            input
                (attribs
                    ++ [ styles.classList
                            [ ( .input, True )
                            , ( .default, config.reversed == False )
                            , ( .reversed, config.reversed )
                            , ( .disabled, config.disabled )
                            , ( .error, config.status == Error )
                            , ( .success, config.status == Success )
                            ]
                       ]
                )
                []

        startIconAdornmentHtml =
            if List.length config.startIconAdornment >= 1 then
                div [ styles.classList [ ( .startIconAdornment, True ) ] ] config.startIconAdornment

            else
                nothing

        endIconAdornmentHtml =
            if List.length config.endIconAdornment >= 1 then
                div [ styles.classList [ ( .endIconAdornment, True ) ] ] config.endIconAdornment

            else
                nothing
    in
    inputWrapperHtml
        [ startIconAdornmentHtml
        , inputHtml
        , endIconAdornmentHtml
        ]

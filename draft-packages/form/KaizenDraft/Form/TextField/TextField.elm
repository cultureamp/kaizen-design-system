module KaizenDraft.Form.TextField.TextField exposing
    ( Config
    , TextFieldStatus(..)
    , TextFieldType(..)
    , autoComplete
    , controlled
    , default
    , description
    , disabled
    , icon
    , id
    , inline
    , inputType
    , inputValue
    , labelHtml
    , labelText
    , onBlurWithValue
    , onChange
    , onEnter
    , onFocus
    , placeholder
    , reversed
    , status
    , validationMessage
    , view
    )

import CssModules exposing (css)
import Html exposing (..)
import Html.Extra exposing (static)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import KaizenDraft.Form.Primitives.FieldGroup.FieldGroup as FieldGroup
import KaizenDraft.Form.Primitives.FieldMessage.FieldMessage as FieldMessage
import KaizenDraft.Form.Primitives.Input.Input as Input
import KaizenDraft.Form.Primitives.Label.Label as Label


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/TextField/styles.scss"
        { withLabel = "withLabel"
        , withDisabled = "withDisabled"
        , withReversed = "withReversed"
        , withError = "withError"
        , success = "success"
        , error = "error"
        , icon = "icon"
        , inline = "inline"
        , description = "description"
        }


type TextFieldStatus
    = Default
    | Success
    | Error


type TextFieldType
    = Text
    | Email
    | Password



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , inputType : TextFieldType
    , labelText : Label.LabelProp msg
    , placeholder : String
    , validationMessage : Maybe String
    , description : Maybe String
    , disabled : Bool
    , inputValue : String
    , controlled : Bool
    , autoComplete : Bool
    , reversed : Bool
    , onChange : Maybe (String -> msg)
    , onBlur : Maybe (String -> msg)
    , onEnter : Maybe msg
    , onFocus : Maybe msg
    , status : TextFieldStatus
    , icon : List (Html msg)
    , inline : Bool
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , inputType = Text
    , labelText = Label.LabelString ""
    , placeholder = ""
    , validationMessage = Nothing
    , description = Nothing
    , disabled = False
    , inputValue = ""
    , controlled = True
    , autoComplete = True
    , reversed = False
    , onChange = Nothing
    , onBlur = Nothing
    , onEnter = Nothing
    , onFocus = Nothing
    , status = Default
    , icon = []
    , inline = False
    }



-- VARIANTS


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


inputType : TextFieldType -> Config msg -> Config msg
inputType value (Config config) =
    Config { config | inputType = value }


labelText : String -> Config msg -> Config msg
labelText value (Config config) =
    Config { config | labelText = Label.LabelString value }


labelHtml : List (Html msg) -> Config msg -> Config msg
labelHtml value (Config config) =
    Config { config | labelText = Label.LabelHtml value }


placeholder : String -> Config msg -> Config msg
placeholder value (Config config) =
    Config { config | placeholder = value }


validationMessage : String -> Config msg -> Config msg
validationMessage value (Config config) =
    Config { config | validationMessage = Just value }


description : String -> Config msg -> Config msg
description value (Config config) =
    Config { config | description = Just value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


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


onFocus : msg -> Config msg -> Config msg
onFocus msg (Config config) =
    Config { config | onFocus = Just msg }


status : TextFieldStatus -> Config msg -> Config msg
status value (Config config) =
    Config { config | status = value }


icon : List (Html msg) -> Config msg -> Config msg
icon value (Config config) =
    Config { config | icon = value }


inline : Bool -> Config msg -> Config msg
inline value (Config config) =
    Config { config | inline = value }


view : Config msg -> Html msg
view (Config config) =
    let
        idProp =
            case config.id of
                Just idString ->
                    idString

                Nothing ->
                    ""

        startIconAdornmentProp =
            if List.length config.icon >= 1 then
                [ div
                    [ styles.classList
                        [ ( .icon, True ) ]
                    ]
                    config.icon
                ]

            else
                []

        endIconAdornmentProp =
            case config.status of
                Success ->
                    [ div
                        [ styles.classList
                            [ ( .success, True )
                            ]
                        ]
                        [ Icon.view Icon.presentation (svgAsset "@kaizen/component-library/icons/success.icon.svg") |> static ]
                    ]

                Error ->
                    [ div
                        [ styles.classList
                            [ ( .error, True )
                            ]
                        ]
                        [ Icon.view Icon.presentation (svgAsset "@kaizen/component-library/icons/exclamation.icon.svg") |> static ]
                    ]

                Default ->
                    []

        maybeWithDescriptionAria =
            case config.description of
                Just msg ->
                    idProp ++ "-field-description"

                Nothing ->
                    ""

        maybeWithValidationMessageAria =
            case config.validationMessage of
                Just msg ->
                    idProp ++ "-field-validation-message"

                Nothing ->
                    ""

        createAriaDescribedBy a b =
            String.trim (String.join " " [ a, b ])

        maybeWithAriaDescribedByProp inputConfig =
            Input.ariaDescribedBy (createAriaDescribedBy maybeWithValidationMessageAria maybeWithDescriptionAria) inputConfig

        maybeWithOnChangeProp inputConfig =
            case config.onChange of
                Just msg ->
                    Input.onChange msg inputConfig

                Nothing ->
                    inputConfig

        maybeWithOnBlurWithValueProp inputConfig =
            case config.onBlur of
                Just msg ->
                    Input.onBlurWithValue msg inputConfig

                Nothing ->
                    inputConfig

        maybeWithOnEnterProp inputConfig =
            case config.onEnter of
                Just msg ->
                    Input.onEnter msg inputConfig

                Nothing ->
                    inputConfig

        maybeWithOnFocusProp inputConfig =
            case config.onFocus of
                Just msg ->
                    Input.onFocusMsg msg inputConfig

                Nothing ->
                    inputConfig

        inputTypeProp =
            case config.inputType of
                Text ->
                    Input.Text

                Email ->
                    Input.Email

                Password ->
                    Input.Password

        inputStatusProp =
            case config.status of
                Success ->
                    Input.Success

                Error ->
                    Input.Error

                Default ->
                    Input.Default

        fieldValidationMessageStatusProp =
            case config.status of
                Success ->
                    FieldMessage.Success

                Error ->
                    FieldMessage.Error

                Default ->
                    FieldMessage.Default

        fieldDescriptionHtml =
            case config.description of
                Just descriptionString ->
                    div
                        [ styles.classList
                            [ ( .description, True )
                            ]
                        ]
                        [ FieldMessage.view
                            (FieldMessage.default
                                |> FieldMessage.id (idProp ++ "-field-description")
                                |> FieldMessage.automationId (idProp ++ "-field-description")
                                |> FieldMessage.message descriptionString
                                |> FieldMessage.status FieldMessage.Default
                                |> FieldMessage.reversed config.reversed
                            )
                        ]

                Nothing ->
                    text ""

        fieldValidationMessageHtml =
            case config.validationMessage of
                Just validationMessageString ->
                    FieldMessage.view
                        (FieldMessage.default
                            |> FieldMessage.id (idProp ++ "-field-validation-message")
                            |> FieldMessage.automationId (idProp ++ "-field-validation-message")
                            |> FieldMessage.message validationMessageString
                            |> FieldMessage.status fieldValidationMessageStatusProp
                            |> FieldMessage.reversed config.reversed
                        )

                Nothing ->
                    text ""
    in
    FieldGroup.view
        (FieldGroup.default
            |> FieldGroup.id (idProp ++ "-field-group")
            |> FieldGroup.automationId (idProp ++ "-field-group")
            |> FieldGroup.inline config.inline
            |> FieldGroup.className
                [ styles.classList
                    [ ( .withLabel, True )
                    , ( .withError, config.status == Error )
                    , ( .withDisabled, config.disabled )
                    , ( .withReversed, config.reversed )
                    ]
                ]
        )
        [ Label.view
            (Label.default
                |> Label.id (idProp ++ "-field-label")
                |> Label.automationId (idProp ++ "-field-label")
                |> Label.htmlFor (idProp ++ "-field-input")
                |> Label.labelText config.labelText
                |> Label.reversed config.reversed
            )
        , Input.view
            (Input.default
                |> Input.id (idProp ++ "-field-input")
                |> Input.automationId (idProp ++ "-field-input")
                |> Input.inputType inputTypeProp
                |> Input.inputValue config.inputValue
                |> Input.controlled config.controlled
                |> Input.autoComplete config.autoComplete
                |> Input.placeholder config.placeholder
                |> Input.disabled config.disabled
                |> Input.reversed config.reversed
                |> Input.status inputStatusProp
                |> Input.startIconAdornment startIconAdornmentProp
                |> Input.endIconAdornment endIconAdornmentProp
                |> maybeWithAriaDescribedByProp
                |> maybeWithOnChangeProp
                |> maybeWithOnBlurWithValueProp
                |> maybeWithOnEnterProp
                |> maybeWithOnFocusProp
            )
        , fieldValidationMessageHtml
        , fieldDescriptionHtml
        ]

module KaizenDraft.Form.TextAreaField.TextAreaField exposing
    ( Config
    , TextAreaFieldStatus(..)
    , autoComplete
    , controlled
    , default
    , description
    , descriptionHtml
    , disabled
    , id
    , inline
    , labelHtml
    , labelText
    , onBlurWithValue
    , onChange
    , onEnter
    , onFocus
    , placeholder
    , reversed
    , rows
    , status
    , textAreaValue
    , validationMessage
    , view
    )

import Html exposing (..)
import KaizenDraft.Form.Primitives.FieldGroup.FieldGroup as FieldGroup
import KaizenDraft.Form.Primitives.FieldMessage.FieldMessage as FieldMessage
import KaizenDraft.Form.Primitives.Label.Label as Label
import KaizenDraft.Form.Primitives.TextArea.TextArea as TextArea


type TextAreaFieldStatus
    = Default
    | Success
    | Error



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , labelText : Label.LabelProp msg
    , placeholder : String
    , validationMessage : Maybe String
    , description : Maybe String
    , descriptionHtml : Maybe (List (Html msg))
    , disabled : Bool
    , textAreaValue : String
    , controlled : Bool
    , autoComplete : Bool
    , reversed : Bool
    , onChange : Maybe (String -> msg)
    , onBlur : Maybe (String -> msg)
    , onEnter : Maybe msg
    , onFocus : Maybe msg
    , status : TextAreaFieldStatus
    , icon : List (Html msg)
    , inline : Bool
    , rows : Int
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , labelText = Label.LabelString ""
    , placeholder = ""
    , validationMessage = Nothing
    , description = Nothing
    , descriptionHtml = Nothing
    , disabled = False
    , textAreaValue = ""
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
    , rows = 0
    }



-- VARIANTS


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


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


descriptionHtml : List (Html msg) -> Config msg -> Config msg
descriptionHtml value (Config config) =
    Config { config | descriptionHtml = Just value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


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


onFocus : msg -> Config msg -> Config msg
onFocus msg (Config config) =
    Config { config | onFocus = Just msg }


status : TextAreaFieldStatus -> Config msg -> Config msg
status value (Config config) =
    Config { config | status = value }


inline : Bool -> Config msg -> Config msg
inline value (Config config) =
    Config { config | inline = value }


rows : Int -> Config msg -> Config msg
rows value (Config config) =
    Config { config | rows = value }


view : Config msg -> Html msg
view (Config config) =
    let
        idProp =
            case config.id of
                Just idString ->
                    idString

                Nothing ->
                    ""

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
            TextArea.ariaDescribedBy (createAriaDescribedBy maybeWithValidationMessageAria maybeWithDescriptionAria) inputConfig

        maybeWithOnChangeProp inputConfig =
            case config.onChange of
                Just msg ->
                    TextArea.onChange msg inputConfig

                Nothing ->
                    inputConfig

        maybeWithOnBlurWithValueProp inputConfig =
            case config.onBlur of
                Just msg ->
                    TextArea.onBlurWithValue msg inputConfig

                Nothing ->
                    inputConfig

        maybeWithOnEnterProp inputConfig =
            case config.onEnter of
                Just msg ->
                    TextArea.onEnter msg inputConfig

                Nothing ->
                    inputConfig

        maybeWithOnFocusProp inputConfig =
            case config.onFocus of
                Just msg ->
                    TextArea.onFocusMsg msg inputConfig

                Nothing ->
                    inputConfig

        inputStatusProp =
            case config.status of
                Success ->
                    TextArea.Success

                Error ->
                    TextArea.Error

                Default ->
                    TextArea.Default

        fieldValidationMessageStatusProp =
            case config.status of
                Success ->
                    FieldMessage.Success

                Error ->
                    FieldMessage.Error

                Default ->
                    FieldMessage.Default

        fieldDescriptionHtml =
            case ( config.description, config.descriptionHtml ) of
                ( Nothing, Nothing ) ->
                    text ""

                _ ->
                    div
                        []
                        [ FieldMessage.view
                            (FieldMessage.default
                                |> FieldMessage.id (idProp ++ "-field-description")
                                |> FieldMessage.automationId (idProp ++ "-field-description")
                                |> FieldMessage.message
                                    (config.description |> Maybe.withDefault "")
                                |> FieldMessage.messageHtml config.descriptionHtml
                                |> FieldMessage.status FieldMessage.Default
                                |> FieldMessage.reversed config.reversed
                            )
                        ]

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
        )
        [ Label.view
            (Label.default
                |> Label.id (idProp ++ "-field-label")
                |> Label.automationId (idProp ++ "-field-label")
                |> Label.htmlFor (idProp ++ "-field-input")
                |> Label.labelText config.labelText
                |> Label.reversed config.reversed
            )
        , TextArea.view
            (TextArea.default
                |> TextArea.id (idProp ++ "-field-input")
                |> TextArea.automationId (idProp ++ "-field-input")
                |> TextArea.textAreaValue config.textAreaValue
                |> TextArea.controlled config.controlled
                |> TextArea.autoComplete config.autoComplete
                |> TextArea.placeholder config.placeholder
                |> TextArea.disabled config.disabled
                |> TextArea.reversed config.reversed
                |> TextArea.status inputStatusProp
                |> TextArea.rows config.rows
                |> maybeWithAriaDescribedByProp
                |> maybeWithOnChangeProp
                |> maybeWithOnBlurWithValueProp
                |> maybeWithOnEnterProp
                |> maybeWithOnFocusProp
            )
        , if config.status == Error then
            fieldValidationMessageHtml

          else
            text ""
        , fieldDescriptionHtml
        ]

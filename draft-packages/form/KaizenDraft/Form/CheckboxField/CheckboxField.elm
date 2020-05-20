module KaizenDraft.Form.CheckboxField.CheckboxField exposing
    ( CheckedValue(..)
    , Config
    , checkedStatus
    , default
    , disabled
    , id
    , inline
    , labelHtml
    , labelText
    , name
    , onCheck
    , view
    )

import CssModules exposing (css)
import Html exposing (..)
import KaizenDraft.Form.Primitives.Checkbox.Checkbox as Checkbox
import KaizenDraft.Form.Primitives.FieldGroup.FieldGroup as FieldGroup
import KaizenDraft.Form.Primitives.Label.Label as Label


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/CheckboxField/styles.scss"
        { withDisabled = "withDisabled"
        , inline = "inline"
        , container = "container"
        , disabled = "disabled"
        , checked = "checked"
        , mixed = "mixed"
        }



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , name : Maybe String
    , labelText : Label.LabelProp msg
    , checkedStatus : CheckedValue
    , onCheck : Maybe (Bool -> msg)
    , disabled : Bool
    , inline : Bool
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , name = Nothing
    , labelText = Label.LabelString ""
    , checkedStatus = Off
    , onCheck = Nothing
    , disabled = False
    , inline = False
    }


type CheckedValue
    = On
    | Off
    | Mixed



-- VARIANTS


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


name : String -> Config msg -> Config msg
name value (Config config) =
    Config { config | name = Just value }


labelText : String -> Config msg -> Config msg
labelText value (Config config) =
    Config { config | labelText = Label.LabelString value }


labelHtml : List (Html msg) -> Config msg -> Config msg
labelHtml value (Config config) =
    Config { config | labelText = Label.LabelHtml value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


onCheck : (Bool -> msg) -> Config msg -> Config msg
onCheck value (Config config) =
    Config { config | onCheck = Just value }


checkedStatus : CheckedValue -> Config msg -> Config msg
checkedStatus value (Config config) =
    Config { config | checkedStatus = value }


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

        nameProp =
            case config.name of
                Just nameString ->
                    nameString

                Nothing ->
                    ""

        maybeWithOnCheckProp checkboxConfig =
            case config.onCheck of
                Just msg ->
                    Checkbox.onCheck msg checkboxConfig

                Nothing ->
                    checkboxConfig

        isChecked =
            case config.checkedStatus of
                On ->
                    True

                Off ->
                    False

                Mixed ->
                    False

        isMixed =
            case config.checkedStatus of
                On ->
                    False

                Off ->
                    False

                Mixed ->
                    True

        checkboxCheckedStatusProp =
            case config.checkedStatus of
                On ->
                    Checkbox.On

                Off ->
                    Checkbox.Off

                Mixed ->
                    Checkbox.Mixed

        checkboxInput =
            [ Checkbox.view
                (Checkbox.default
                    |> Checkbox.id (idProp ++ "-field-checkbox")
                    |> Checkbox.automationId (idProp ++ "-field-checkbox")
                    |> Checkbox.disabled config.disabled
                    |> Checkbox.checkedStatus checkboxCheckedStatusProp
                    |> Checkbox.name nameProp
                    |> maybeWithOnCheckProp
                )
            ]
    in
    FieldGroup.view
        (FieldGroup.default
            |> FieldGroup.id (idProp ++ "-field-group")
            |> FieldGroup.automationId (idProp ++ "-field-group")
            |> FieldGroup.inline config.inline
            |> FieldGroup.className
                [ styles.classList
                    [ ( .container, True )
                    , ( .checked, isChecked )
                    , ( .mixed, isMixed )
                    , ( .disabled, config.disabled )
                    ]
                ]
        )
        [ Label.view
            (Label.default
                |> Label.id (idProp ++ "-field-label")
                |> Label.automationId (idProp ++ "-field-label")
                |> Label.htmlFor (idProp ++ "-field-checkbox")
                |> Label.labelText config.labelText
                |> Label.labelType Label.Checkbox
                |> Label.children checkboxInput
            )
        ]

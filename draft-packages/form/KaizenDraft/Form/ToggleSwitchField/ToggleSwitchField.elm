module KaizenDraft.Form.ToggleSwitchField.ToggleSwitchField exposing (ToggleTheme(..), ToggledStatus(..), default, disabled, fullWidth, id, inline, labelText, name, onToggle, theme, toggledStatus, view)

import CssModules exposing (css)
import Html exposing (..)
import KaizenDraft.Form.Primitives.FieldGroup.FieldGroup as FieldGroup
import KaizenDraft.Form.Primitives.Label.Label as Label
import KaizenDraft.Form.Primitives.ToggleSwitch.ToggleSwitch as ToggleSwitch


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , name : Maybe String
    , labelText : Label.LabelProp msg
    , toggledStatus : Maybe ToggledStatus
    , onToggle : Maybe (Bool -> msg)
    , disabled : Maybe Bool
    , inline : Maybe Bool
    , fullWidth : Maybe Bool
    , theme : Maybe ToggleTheme
    }


type ToggledStatus
    = On
    | Off


type ToggleTheme
    = Default
    | Freemium


defaults : ConfigValue msg
defaults =
    { id = Just ""
    , name = Just ""
    , labelText = Label.LabelString ""
    , toggledStatus = Nothing
    , onToggle = Nothing
    , disabled = Just False
    , inline = Just False
    , fullWidth = Just False
    , theme = Just Default
    }



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


toggledStatus : ToggledStatus -> Config msg -> Config msg
toggledStatus value (Config config) =
    Config { config | toggledStatus = Just value }


onToggle : (Bool -> msg) -> Config msg -> Config msg
onToggle value (Config config) =
    Config { config | onToggle = Just value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = Just value }


inline : Bool -> Config msg -> Config msg
inline value (Config config) =
    Config { config | inline = Just value }


fullWidth : Bool -> Config msg -> Config msg
fullWidth value (Config config) =
    Config { config | fullWidth = Just value }


theme : ToggleTheme -> Config msg -> Config msg
theme value (Config config) =
    Config { config | theme = Just value }


view : Config msg -> Html msg
view (Config config) =
    let
        convertToString prop =
            case prop of
                Just string ->
                    string

                Nothing ->
                    ""

        convertToBool configType =
            case configType of
                Just True ->
                    True

                Just False ->
                    False

                Nothing ->
                    False

        toggledStatusProp =
            case config.toggledStatus of
                Just On ->
                    ToggleSwitch.On

                Just Off ->
                    ToggleSwitch.Off

                Nothing ->
                    ToggleSwitch.On

        themeProp =
            case config.theme of
                Just Default ->
                    ToggleSwitch.Default

                Just Freemium ->
                    ToggleSwitch.Freemium

                Nothing ->
                    ToggleSwitch.Default

        toggleSwitch =
            case config.onToggle of
                Just toggleMsg ->
                    [ ToggleSwitch.view
                        (ToggleSwitch.default
                            |> ToggleSwitch.id (convertToString config.id)
                            |> ToggleSwitch.automationId (convertToString config.id)
                            |> ToggleSwitch.name (convertToString config.name)
                            |> ToggleSwitch.toggledStatus toggledStatusProp
                            |> ToggleSwitch.disabled (convertToBool config.disabled)
                            |> ToggleSwitch.theme themeProp
                            |> ToggleSwitch.onToggle (\val -> toggleMsg val)
                        )
                    ]

                Nothing ->
                    [ ToggleSwitch.view
                        (ToggleSwitch.default
                            |> ToggleSwitch.id (convertToString config.id)
                            |> ToggleSwitch.automationId (convertToString config.id)
                            |> ToggleSwitch.name (convertToString config.name)
                            |> ToggleSwitch.toggledStatus toggledStatusProp
                            |> ToggleSwitch.disabled (convertToBool config.disabled)
                            |> ToggleSwitch.theme themeProp
                        )
                    ]
    in
    FieldGroup.view
        (FieldGroup.default
            |> FieldGroup.id (convertToString config.id ++ "-field-group")
            |> FieldGroup.automationId (convertToString config.id ++ "-field-group")
            |> FieldGroup.inline (convertToBool config.inline)
            |> FieldGroup.className
                [ styles.classList
                    [ ( .container, True )
                    , ( .disabled, convertToBool config.disabled )
                    , ( .fullWidth, convertToBool config.fullWidth )
                    ]
                ]
        )
        [ Label.view
            (Label.default
                |> Label.id (convertToString config.id ++ "-field-label")
                |> Label.automationId (convertToString config.id ++ "-field-label")
                |> Label.htmlFor (convertToString config.id ++ "-field-toggle")
                |> Label.labelText config.labelText
                |> Label.labelType Label.Toggle
                |> Label.children toggleSwitch
            )
        ]


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/ToggleSwitchField/styles.scss"
        { container = "container"
        , disabled = "disabled"
        , fullWidth = "fullWidth"
        }

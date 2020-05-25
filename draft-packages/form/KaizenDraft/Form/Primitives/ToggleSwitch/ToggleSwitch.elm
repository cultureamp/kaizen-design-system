module KaizenDraft.Form.Primitives.ToggleSwitch.ToggleSwitch exposing (ToggleTheme(..), ToggledStatus(..), automationId, default, disabled, id, name, onToggle, theme, toggledStatus, view)

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events as Events



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , name : Maybe String
    , toggledStatus : Maybe ToggledStatus
    , onToggle : Maybe (Bool -> msg)
    , disabled : Maybe Bool
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
    , automationId = Just ""
    , name = Just ""
    , toggledStatus = Just On
    , onToggle = Nothing
    , disabled = Nothing
    , theme = Nothing
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


name : String -> Config msg -> Config msg
name value (Config config) =
    Config { config | name = Just value }


toggledStatus : ToggledStatus -> Config msg -> Config msg
toggledStatus value (Config config) =
    Config { config | toggledStatus = Just value }


onToggle : (Bool -> msg) -> Config msg -> Config msg
onToggle value (Config config) =
    Config { config | onToggle = Just value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = Just value }


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

        isOn =
            case config.toggledStatus of
                Just On ->
                    True

                Just Off ->
                    False

                Nothing ->
                    True

        disabledProp =
            case config.disabled of
                Just True ->
                    True

                Just False ->
                    False

                Nothing ->
                    False

        isFreemiumTheme =
            case config.theme of
                Just Default ->
                    False

                Just Freemium ->
                    True

                Nothing ->
                    False

        onToggleAttr =
            case config.onToggle of
                Just onToggleMsg ->
                    [ Events.onCheck
                        (\val -> onToggleMsg val)
                    ]

                Nothing ->
                    []
    in
    div
        [ styles.classList
            [ ( .on, isOn )
            , ( .off, not isOn )
            , ( .disabled, disabledProp )
            ]
        ]
        [ input
            (onToggleAttr
                ++ [ type_ "checkbox"
                   , Html.Attributes.id (convertToString config.id ++ "-field-toggle")
                   , Html.Attributes.name (convertToString config.name)
                   , attribute "data-automation-id" (convertToString config.automationId)
                   , styles.class .checkbox
                   , Html.Attributes.disabled disabledProp
                   ]
            )
            []
        , div
            [ styles.classList
                [ ( .track, True )
                , ( .freemium, isFreemiumTheme )
                ]
            ]
            [ div [ styles.class .thumb ] []
            ]
        ]


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/Primitives/ToggleSwitch/styles.scss"
        { checkbox = "checkbox"
        , track = "track"
        , thumb = "thumb"
        , on = "on"
        , off = "off"
        , disabled = "disabled"
        , freemium = "freemium"
        }

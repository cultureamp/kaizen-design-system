module Kaizen.Form.ToggleSwitchField.ToggleSwitchField exposing (view)

import CssModules exposing (css)
import Html exposing (..)
import Kaizen.Form.Primitives.ToggleSwitch.ToggleSwitch as ToggleSwitch


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


view : Html msg
view =
    div [] [ ToggleSwitch.view ToggleSwitch.default ]


styles =
    css "@kaizen/component-library/draft/Kaizen/Form/ToggleSwitchField/styles.scss"
        { container = "container"
        , disabled = "disabled"
        , fullWidth = "fullWidth"
        }

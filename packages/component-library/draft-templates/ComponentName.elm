module ComponentName.ComponentName exposing
    ( CheckedValue(..)
    , Config
    , automationId
    , id
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div)



-- Uncomment/delete these as needed:
-- import Html.Attributes exposing (attribute, for, id, property, type_)
-- import Html.Events as Events
-- import Icon.Icon as Icon
-- import Icon.SvgAsset exposing (svgAsset)
-- import Json.Encode as Encode
-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String

    -- , onChange : Maybe (Bool -> msg)
    -- , disabled : Bool
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
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



-- onChange : (Bool -> msg) -> Config msg -> Config msg
-- onChange value (Config config) =
--     Config { config | onChange = Just value }
-- disabled : Bool -> Config msg -> Config msg
-- disabled value (Config config) =
--     Config { config | disabled = value }
-- VIEW


view : Config msg -> Html msg
view (Config config) =
    div [ styles.class .container ]
        []


styles =
    css "@kaizen/draft-component-name/ComponentName/styles.scss"
        { container = "container"
        }

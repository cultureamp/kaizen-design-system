module Kaizen.Table.TableRow exposing (children, default, view)

import CssModules exposing (css)
import Html exposing (Attribute, Html, button, div, text)
import Html.Attributes exposing (style)
import Html.Attributes.Aria exposing (role)
import Html.Events exposing (onClick)


type Config msg
    = Config (ConfigValue msg)


default : Config msg
default =
    Config defaults


type alias ConfigValue msg =
    { children : List (Html msg)
    }


defaults : ConfigValue msg
defaults =
    { children = []
    }


children : List (Html msg) -> Config msg -> Config msg
children value (Config config) =
    Config { config | children = value }


view : Config msg -> Html msg
view (Config config) =
    div [ styles.class .row, role "row" ] config.children


styles =
    css "@kaizen/component-library/draft/Kaizen/Table/styles.scss"
        { row = "row"
        }

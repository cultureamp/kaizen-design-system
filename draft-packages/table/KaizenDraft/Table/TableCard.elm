module KaizenDraft.Table.TableCard exposing (default, view)

import CssModules exposing (css)
import Html exposing (Attribute, Html, button, div, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)


type Config msg
    = Config ConfigValue


default : Config msg
default =
    Config defaults


type alias ConfigValue =
    {}


defaults : ConfigValue
defaults =
    {}


view : Config msg -> List (Html msg) -> Html msg
view (Config config) children =
    div [ styles.class .card ] children


styles =
    css "@kaizen/draft-table/KaizenDraft/Table/styles.scss"
        { card = "card"
        }

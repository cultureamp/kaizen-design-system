module Kaizen.Table.TableRowCell exposing
    ( children
    , default
    , flex
    , view
    , width
    )

import CssModules exposing (css)
import Html exposing (Attribute, Html, button, div, text)
import Html.Attributes exposing (style)
import Html.Attributes.Aria exposing (role)
import Html.Events exposing (onClick)
import Kaizen.Table.TableHelpers exposing (ratioToPercent)


type Config msg
    = Config (ConfigValue msg)


default : Config msg
default =
    Config defaults


type alias ConfigValue msg =
    { width : Maybe Float
    , flex : Maybe String
    , children : List (Html msg)
    }


defaults : ConfigValue msg
defaults =
    { width = Nothing
    , flex = Nothing
    , children = []
    }


width : Float -> Config msg -> Config msg
width value (Config config) =
    Config { config | width = Just value }


flex : String -> Config msg -> Config msg
flex value (Config config) =
    Config { config | flex = Just value }


children : List (Html msg) -> Config msg -> Config msg
children value (Config config) =
    Config { config | children = value }


view : Config msg -> Html msg
view (Config config) =
    let
        widthStyle =
            case config.width of
                Just w ->
                    ratioToPercent w

                _ ->
                    "inherit"

        flexStyle =
            case config.flex of
                Just f ->
                    f

                _ ->
                    "auto"
    in
    div
        [ style "width" widthStyle
        , style "flex" flexStyle
        , styles.class .rowCell
        , role "cell"
        ]
        config.children


styles =
    css "@kaizen/component-library/draft/Kaizen/Table/styles.scss"
        { rowCell = "rowCell"
        }

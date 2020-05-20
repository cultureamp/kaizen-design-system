module KaizenDraft.Table.TableRowCell exposing
    ( default
    , flex
    , view
    , width
    )

import CssModules exposing (css)
import Html exposing (Attribute, Html, button, div, text)
import Html.Attributes exposing (style)
import Html.Attributes.Aria exposing (role)
import Html.Events exposing (onClick)
import KaizenDraft.Table.TableHelpers exposing (ratioToPercent)


type Config msg
    = Config ConfigValue


default : Config msg
default =
    Config defaults


type alias ConfigValue =
    { width : Maybe Float
    , flex : Maybe String
    }


defaults : ConfigValue
defaults =
    { width = Nothing
    , flex = Nothing
    }


width : Float -> Config msg -> Config msg
width value (Config config) =
    Config { config | width = Just value }


flex : String -> Config msg -> Config msg
flex value (Config config) =
    Config { config | flex = Just value }


view : Config msg -> List (Html msg) -> Html msg
view (Config config) children =
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
        children


styles =
    css "@kaizen/draft-table/KaizenDraft/Table/styles.scss"
        { rowCell = "rowCell"
        }

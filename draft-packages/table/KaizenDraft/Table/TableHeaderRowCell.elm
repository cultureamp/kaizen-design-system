module KaizenDraft.Table.TableHeaderRowCell exposing
    ( active
    , default
    , flex
    , labelText
    , onClick
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
    = Config (ConfigValue msg)


default : Config msg
default =
    Config defaults


type alias ConfigValue msg =
    { labelText : String
    , onClick : Maybe msg
    , width : Maybe Float
    , flex : Maybe String
    , active : Maybe Bool
    }


defaults : ConfigValue msg
defaults =
    { labelText = ""
    , onClick = Nothing
    , width = Nothing
    , flex = Nothing
    , active = Nothing
    }


labelText : String -> Config msg -> Config msg
labelText value (Config config) =
    Config { config | labelText = value }


onClick : msg -> Config msg -> Config msg
onClick value (Config config) =
    Config { config | onClick = Just value }


width : Float -> Config msg -> Config msg
width value (Config config) =
    Config { config | width = Just value }


flex : String -> Config msg -> Config msg
flex value (Config config) =
    Config { config | flex = Just value }


active : Bool -> Config msg -> Config msg
active value (Config config) =
    Config { config | active = Just value }


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
        , styles.class .headerRowCell
        , role "columnheader"
        ]
        [ text config.labelText ]


styles =
    css "@kaizen/draft-table/KaizenDraft/Table/styles.scss"
        { headerRowCell = "headerRowCell"
        }

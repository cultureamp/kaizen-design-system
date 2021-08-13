module KaizenDraft.TitleBlock.NavigationButton exposing (active, default, onClick, path, reversed, view)

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes exposing (href)
import Html.Events as Events exposing (preventDefaultOn)
import Json.Decode as Json



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { path : Maybe String
    , active : Bool
    , onClick : Maybe msg
    , reversed : Bool
    }


default : Config msg
default =
    Config defaults


defaults : ConfigValue msg
defaults =
    { path = Nothing
    , active = False
    , onClick = Nothing
    , reversed = False
    }



-- MODIFIERS


path : String -> Config msg -> Config msg
path value (Config config) =
    Config { config | path = Just value }


active : Bool -> Config msg -> Config msg
active value (Config config) =
    Config { config | active = value }


onClick : msg -> Config msg -> Config msg
onClick value (Config config) =
    Config { config | onClick = Just value }


reversed : Bool -> Config msg -> Config msg
reversed value (Config config) =
    Config { config | reversed = value }


view : Config msg -> String -> Html msg
view (Config config) label =
    let
        onClickAttribs =
            case config.onClick of
                Just msg ->
                    [ preventDefaultOn
                        "click"
                        (Json.succeed msg |> Json.map (\m -> ( m, True )))
                    ]

                Nothing ->
                    []

        buttonClasses =
            [ styles.classList
                [ ( .activeButton, config.active )
                , ( .button, not config.active )
                , ( .reversed, config.reversed )
                ]
            ]

        attribs =
            onClickAttribs ++ buttonClasses
    in
    case config.path of
        Just pathValue ->
            a (attribs ++ [ href pathValue ])
                [ text label ]

        Nothing ->
            button attribs [ text label ]


class =
    styles.class


styles =
    css "@kaizen/title-block/KaizenDraft/TitleBlock/NavigationButton.scss"
        { button = "button"
        , activeButton = "activeButton"
        , reversed = "reversed"
        }

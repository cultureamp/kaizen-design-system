module KaizenDraft.SplitButton.SplitButton exposing (default, href, onClick, view)

import CssModules exposing (css)
import Html exposing (Html, a, div, span, text)
import Html.Attributes exposing (dir)



-- Config


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { href : String
    , disabled : Bool
    , onClick : Maybe msg
    , dir : String
    }


default : Config msg
default =
    Config { href = "", disabled = False, onClick = Nothing, dir = "ltr" }



-- MODIFIERS


href : String -> Config msg -> Config msg
href value (Config config) =
    Config { config | href = value }


onClick : msg -> Config msg -> Config msg
onClick value (Config config) =
    Config { config | onClick = Just value }



-- VIEW


view : Config msg -> String -> Html msg
view (Config config) label =
    div [ styles.class .root, dir config.dir ]
        [ div [ styles.class .buttonsContainer ]
            [ a [ styles.class .default, Html.Attributes.href config.href ]
                [ span [ styles.class .label ]
                    [ text label ]
                ]
            ]
        ]


styles =
    css "@kaizen/draft-split-button/KaizenDraft/SplitButton/styles.scss"
        { root = "root"
        , buttonsContainer = "buttonsContainer"
        , label = "label"
        , default = "default"
        }

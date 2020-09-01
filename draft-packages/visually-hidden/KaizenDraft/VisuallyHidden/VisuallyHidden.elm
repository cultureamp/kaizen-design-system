module KaizenDraft.visuallyhidden.visuallyhidden exposing
    ( Config
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)



-- VIEW


type Config msg
    = Config { example : String }


withExample : String -> Config msg -> Config msg
withExample name (Config config) =
    Config { config | example = name }


view : Config msg -> List (Html msg) -> Html msg
view (Config config) children =
    let
        classes =
            styles.classList
                [ ( .wrapper, True )
                ]
    in
    div [ classes ] [ text "Hello, World!" ]


styles =
    css "@kaizen/draft-library/components/visuallyhidden/styles.module.scss"
        { wrapper = "wrapper"
        }

module KaizenDraft.Card.Card exposing (Tag(..), default, tag, view)

import CssModules exposing (css)
import Html exposing (Html, article, div, header, li, main_, section)
import Html.Attributes exposing (class)


type Config msg
    = Config Configuration


type alias Configuration =
    { tag : Tag
    , classNameAndIHaveSpokenToDST : Maybe String
    }


defaults : Configuration
defaults =
    { tag = Div, classNameAndIHaveSpokenToDST = Nothing }


type Tag
    = Div
    | Article
    | Header
    | Main
    | Section
    | Li


default : Config msg
default =
    Config defaults


tag : Tag -> Config msg
tag tag_ =
    Config { defaults | tag = tag_ }



-- MODIFIERS


view : Config msg -> List (Html msg) -> Html msg
view (Config config) children =
    let
        cardTag =
            case config.tag of
                Div ->
                    div

                Article ->
                    article

                Header ->
                    header

                Main ->
                    main_

                Section ->
                    section

                Li ->
                    li

        resolveCustomClass =
            Maybe.withDefault "" config.classNameAndIHaveSpokenToDST
    in
    cardTag ([ styles.class .wrapper ] ++ [ class resolveCustomClass ])
        children


styles =
    css "@kaizen/card/KaizenDraft/Card/styles.module.scss"
        { wrapper = "wrapper"
        }

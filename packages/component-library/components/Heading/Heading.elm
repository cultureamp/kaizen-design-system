module Heading.Heading exposing
    ( Config
    , TypeVariant(..)
    , a
    , div
    , h1
    , h2
    , h3
    , h4
    , h5
    , h6
    , id
    , p
    , pre
    , span
    , variant
    , view
    )

import CssModules exposing (css)
import Debug exposing (log)
import Html exposing (text)
import Html.Attributes


type alias ConfigValue msg =
    { tag : Element msg
    , variant : TypeVariant
    , id : Maybe String
    }


type BaseConfig msg
    = BaseConfig (ConfigValue msg)


type Config msg
    = Config (ConfigValue msg)


type alias Element msg =
    List (Html.Attribute msg) -> List (Html.Html msg) -> Html.Html msg


defaultConfig : ConfigValue msg
defaultConfig =
    { tag = Html.div
    , id = Nothing
    , variant = Heading1
    }



-- VIEW


view : Config msg -> List (Html.Html msg) -> Html.Html msg
view (Config config) children =
    let
        resolveId =
            case config.id of
                Just id_ ->
                    [ Html.Attributes.id id_ ]

                Nothing ->
                    []
    in
    config.tag
        ([ className config.variant ] ++ resolveId)
        children


className : TypeVariant -> Html.Attribute msg
className typeVariant =
    let
        styleClass =
            case typeVariant of
                Display0 ->
                    .display0

                Heading1 ->
                    .heading1

                Heading2 ->
                    .heading2

                Heading3 ->
                    .heading3

                Heading4 ->
                    .heading4

                Heading5 ->
                    .heading5

                Heading6 ->
                    .heading6
    in
    styles.classList
        [ ( styleClass, True )
        , ( .heading, True )
        ]


styles =
    css "@kaizen/component-library/components/Heading/Heading.module.scss"
        { heading = "heading"
        , display0 = "display-0"
        , heading1 = "heading-1"
        , heading2 = "heading-2"
        , heading3 = "heading-3"
        , heading4 = "heading-4"
        , heading5 = "heading-5"
        , heading6 = "heading-6"
        }


type TypeVariant
    = Display0
    | Heading1
    | Heading2
    | Heading3
    | Heading4
    | Heading5
    | Heading6



-- MODIFIERS


pre : Config msg
pre =
    Config { defaultConfig | tag = Html.pre }


p : Config msg
p =
    Config { defaultConfig | tag = Html.p }


a : Config msg
a =
    Config { defaultConfig | tag = Html.a }


div : Config msg
div =
    Config { defaultConfig | tag = Html.div }


span : Config msg
span =
    Config { defaultConfig | tag = Html.span }


h1 : Config msg
h1 =
    Config { defaultConfig | tag = Html.h1 }


h2 : Config msg
h2 =
    Config { defaultConfig | tag = Html.h2 }


h3 : Config msg
h3 =
    Config { defaultConfig | tag = Html.h3 }


h4 : Config msg
h4 =
    Config { defaultConfig | tag = Html.h4 }


h5 : Config msg
h5 =
    Config { defaultConfig | tag = Html.h5 }


h6 : Config msg
h6 =
    Config { defaultConfig | tag = Html.h6 }


variant : TypeVariant -> Config msg -> Config msg
variant value (Config config) =
    Config { config | variant = value }


id : String -> Config msg -> Config msg
id id_ (Config config) =
    Config { config | id = Just id_ }

module KaizenDraft.LoadingPlaceholder.LoadingPlaceholder exposing
    ( ColorVariant(..)
    , Size(..)
    , animated
    , centered
    , colorVariant
    , default
    , inheritBaseline
    , inline
    , noBottomMargin
    , size
    , view
    , width
    )

import CssModules exposing (css)
import Elm19Compatible.Html.Attributes exposing (style)
import Elm19Compatible.String exposing (fromInt)
import Html exposing (Html, div, text)


type ColorVariant
    = Default
    | Reversed
    | ReversedOcean


type Size
    = Normal
    | Tall



-- CONFIG


type Config
    = Config ConfigValue


type alias ConfigValue =
    { animated : Bool
    , centered : Bool
    , colorVariant : ColorVariant
    , size : Size
    , inheritBaseline : Bool
    , inline : Bool
    , noBottomMargin : Bool
    , width : Int
    }


default : Config
default =
    Config defaults


defaults : ConfigValue
defaults =
    { animated = True
    , centered = False
    , colorVariant = Default
    , size = Normal
    , inheritBaseline = False
    , inline = False
    , noBottomMargin = False
    , width = 100
    }



-- MODIFIERS


animated : Bool -> Config -> Config
animated value (Config config) =
    Config { config | animated = value }


centered : Config -> Config
centered (Config config) =
    Config { config | centered = True }


colorVariant : ColorVariant -> Config -> Config
colorVariant value (Config config) =
    Config { config | colorVariant = value }


size : Size -> Config -> Config
size value (Config config) =
    Config { config | size = value }


inheritBaseline : Config -> Config
inheritBaseline (Config config) =
    Config { config | inheritBaseline = True }


inline : Config -> Config
inline (Config config) =
    Config { config | inline = True }


noBottomMargin : Config -> Config
noBottomMargin (Config config) =
    Config { config | noBottomMargin = True }


width : Int -> Config -> Config
width value (Config config) =
    Config { config | width = value }



-- VIEWS


view : Config -> Html msg
view (Config config) =
    let
        placeholderClassList =
            styles.classList
                [ ( .base, True )
                , ( .animated, config.animated )
                , ( .centered, config.centered )
                , ( .reversedDefault, config.colorVariant == Reversed )
                , ( .reversedOcean, config.colorVariant == ReversedOcean )
                , ( .normal, config.size == Normal )
                , ( .tall, config.size == Tall )
                , ( .inheritBaseline, config.inheritBaseline )
                , ( .inline, config.inline )
                , ( .noBottomMargin, config.noBottomMargin )
                ]

        widthValue =
            fromInt config.width ++ "%"

        widthStyle =
            style "width" widthValue
    in
    div [ placeholderClassList, widthStyle ] [ text "" ]


class =
    styles.class


styles =
    css "@kaizen/draft-loading-placeholder/KaizenDraft/LoadingPlaceholder/styles.scss"
        { base = "base"
        , animated = "animated"
        , centered = "centered"
        , reversedDefault = "reversedDefault"
        , reversedOcean = "reversedOcean"
        , tall = "tall"
        , normal = "normal"
        , inheritBaseline = "inheritBaseline"
        , inline = "inline"
        , noBottomMargin = "noBottomMargin"
        }

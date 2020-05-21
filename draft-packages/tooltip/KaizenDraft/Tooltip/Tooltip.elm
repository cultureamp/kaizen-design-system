module KaizenDraft.Tooltip.Tooltip exposing
    ( Config(..)
    , Configuration
    , Position(..)
    , Variant(..)
    , default
    , position
    , styles
    , toolTip
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, span, text)


type Config
    = Config Configuration


type alias Configuration =
    { variant : Variant
    , positionAt : Position
    }


type Position
    = Above
    | Below


type Variant
    = Default String



-- VARIANTS


default : String -> Config
default body =
    Config { defaults | variant = Default body }



-- MODIFIERS


position : Position -> Config -> Config
position p (Config config) =
    Config { config | positionAt = p }


defaults : Configuration
defaults =
    { variant = Default ""
    , positionAt = Above
    }


view : Config -> Html msg -> Html msg
view (Config config) content =
    div [ styles.class .tooltipWrap ]
        [ content
        , div
            [ styles.classList [ ( .contentWrap, True ), ( .above, config.positionAt == Above ) ] ]
            (case config.variant of
                Default body ->
                    [ toolTip config False (baseTooltip body), toolTip config True (baseTooltip body) ]
            )
        ]


toolTip : Configuration -> Bool -> List (Html msg) -> Html msg
toolTip config isShadow =
    let
        resolveVariantStyles =
            case config.variant of
                Default _ ->
                    [ ( .default, True ) ]
    in
    div
        [ styles.classList
            ([ ( .root, True )
             , ( .shadow, isShadow )
             , ( .above, config.positionAt == Above )
             , ( .below, config.positionAt == Below )
             ]
                ++ resolveVariantStyles
            )
        ]


baseTooltip : String -> List (Html msg)
baseTooltip body =
    [ span [ styles.class .tooltipContent ] [ text body ]
    ]


styles =
    css "@kaizen/draft-tooltip/KaizenDraft/Tooltip/Tooltip.scss"
        { root = "root"
        , default = "default"
        , tooltipWrap = "tooltipWrap"
        , tooltipContent = "tooltipContent"
        , contentWrap = "contentWrap"
        , light = "light"
        , above = "above"
        , below = "below"
        , shadow = "shadow"
        }

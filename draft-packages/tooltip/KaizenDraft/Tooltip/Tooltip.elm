module KaizenDraft.Tooltip.Tooltip exposing
    ( Config(..)
    , Configuration
    , Position(..)
    , Variant(..)
    , default
    , dontTakeUpSpaceWhenHiddenQuickFix
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
    , dontTakeUpSpaceWhenHiddenQuickFix : Bool
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


{-| this fixes an issue where the tooltip takes up space even when it is hidden. This can cause ugly & annoying horizontal scrollbars to appear when they shouldn't. Ideally the the tooltip would reposition itself to make use of available space, which would also solve this problem, but that would require a major rewrite.

IMPORTANT NOTE: there is a major caviat with this option: the animation becomes disabled! This is because the div goes from `display: none` to `display: block` at the same time as the animation starts, so it doesn't kick in. So, this should only be used in scenarios where having unwanted scrollbars is worse than not having aniation.

-}
dontTakeUpSpaceWhenHiddenQuickFix : Bool -> Config -> Config
dontTakeUpSpaceWhenHiddenQuickFix value (Config config) =
    Config { config | dontTakeUpSpaceWhenHiddenQuickFix = value }


defaults : Configuration
defaults =
    { variant = Default ""
    , positionAt = Above
    , dontTakeUpSpaceWhenHiddenQuickFix = False
    }


view : Config -> Html msg -> Html msg
view (Config config) content =
    div
        [ styles.classList
            [ ( .tooltipWrap, True )
            , ( .dontTakeUpSpaceWhenHiddenQuickFix, config.dontTakeUpSpaceWhenHiddenQuickFix )
            ]
        ]
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
    css "@kaizen/draft-tooltip/KaizenDraft/Tooltip/TooltipElm.scss"
        { root = "root"
        , default = "default"
        , tooltipWrap = "tooltipWrap"
        , tooltipContent = "tooltipContent"
        , contentWrap = "contentWrap"
        , light = "light"
        , above = "above"
        , below = "below"
        , shadow = "shadow"
        , dontTakeUpSpaceWhenHiddenQuickFix = "dontTakeUpSpaceWhenHiddenQuickFix"
        }

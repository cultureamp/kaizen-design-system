module Kaizen.Modal.Primitives.ModalFooter exposing
    ( PositionContent(..)
    , Variant(..)
    , border
    , fixed
    , layout
    , positionContent
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant msg
    , contentPosition : PositionContent
    , fixed : Bool
    , border : Bool
    }


type PositionContent
    = Center
    | End
    | Start


view : Config msg -> Html msg
view (Config config) =
    let
        --        This helps avoid using tricky layout css and renders a block element the same size as the fixed div
        useFiller =
            config.fixed

        filler content =
            if useFiller then
                fillerBox content

            else
                []
    in
    case config.variant of
        Layout content ->
            div [] <| (layoutBox content config ++ filler content)


layoutBox : List (Html msg) -> Configuration msg -> List (Html msg)
layoutBox content config =
    [ div
        [ styles.classList
            [ ( .footerWrap, True )
            , ( .center, config.contentPosition == Center )
            , ( .end, config.contentPosition == End )
            , ( .start, config.contentPosition == Start )
            , ( .fixed, config.fixed )
            , ( .border, config.border )
            ]
        ]
        content
    ]


fillerBox : List (Html msg) -> List (Html msg)
fillerBox content =
    [ div [ styles.classList [ ( .filler, True ), ( .footerWrap, True ) ] ] content ]



-- VARIANTS


type Variant msg
    = Layout (List (Html msg))


layout : List (Html msg) -> Config msg
layout content =
    Config { defaults | variant = Layout content }



-- DEFAULTS


defaults : Configuration msg
defaults =
    { variant = Layout [ text "" ]
    , contentPosition = End
    , fixed = False
    , border = True
    }



-- MODIFIERS


fixed : Bool -> Config msg -> Config msg
fixed predicate (Config config) =
    Config { config | fixed = predicate }


positionContent : PositionContent -> Config msg -> Config msg
positionContent position (Config config) =
    Config { config | contentPosition = position }


border : Bool -> Config msg -> Config msg
border predicate (Config config) =
    Config { config | border = predicate }


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Modal/Primitives/ModalFooter.elm.scss"
        { footerWrap = "footerWrap"
        , center = "center"
        , border = "border"
        , end = "end"
        , start = "start"
        , filler = "filler"
        , fixed = "fixed"
        }

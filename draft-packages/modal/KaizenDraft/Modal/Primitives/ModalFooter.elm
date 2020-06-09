module KaizenDraft.Modal.Primitives.ModalFooter exposing
    ( PositionContent(..)
    , Variant(..)
    , border
    , fixed
    , layout
    , padded
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
    , padded : Bool
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
                fillerBox config content

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
            , ( .padded, config.padded )
            ]
        ]
        (List.map
            actionButton
            content
        )
    ]


fillerBox : Configuration msg -> List (Html msg) -> List (Html msg)
fillerBox config content =
    [ div
        [ styles.classList
            [ ( .filler, True )
            , ( .footerWrap, True )
            , ( .border, config.border )
            , ( .padded, config.padded )
            ]
        ]
        content
    ]


actionButton : Html msg -> Html msg
actionButton button =
    div [ styles.class .elmActionButton ] [ button ]



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
    , padded = False
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


padded : Bool -> Config msg -> Config msg
padded predicate (Config config) =
    Config { config | padded = predicate }


styles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Primitives/ModalFooter.scss"
        { footerWrap = "footerWrap"
        , center = "center"
        , border = "border"
        , end = "end"
        , start = "start"
        , filler = "filler"
        , fixed = "fixed"
        , elmActionButton = "elmActionButton"
        , padded = "padded"
        }

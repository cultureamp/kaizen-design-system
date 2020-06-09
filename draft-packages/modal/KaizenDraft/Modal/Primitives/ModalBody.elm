module KaizenDraft.Modal.Primitives.ModalBody exposing
    ( BackgroundColor(..)
    , background
    , fillVerticalSpace
    , layout
    , padded
    , scrollable
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, section, text)
import Html.Attributes as HtmlAttributes
import KaizenDraft.Modal.Primitives.Constants as Constants


type Config msg
    = Config (Configuration msg)


type BackgroundColor
    = White
    | Stone


type alias Configuration msg =
    { variant : Variant msg
    , scrollable : Bool
    , fillSpace : Bool
    , background : BackgroundColor
    , padded : Bool
    }


view : Config msg -> Html msg
view (Config config) =
    case config.variant of
        Layout content ->
            modalBody content config


modalBody : List (Html msg) -> Configuration msg -> Html msg
modalBody content config =
    section
        [ styles.classList
            [ ( .modalBody, True )
            , ( .white, config.background == White )
            , ( .stone, config.background == Stone )
            , ( .scrollable, config.scrollable )
            , ( .fillSpace, config.fillSpace )
            , ( .padded, config.padded )
            ]
        , HtmlAttributes.id Constants.ariaDescribedBy
        ]
        content



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
    , scrollable = False
    , fillSpace = False
    , background = White
    , padded = True
    }



-- MODIFIERS


scrollable : Bool -> Config msg -> Config msg
scrollable predicate (Config config) =
    Config { config | scrollable = predicate }


background : BackgroundColor -> Config msg -> Config msg
background color (Config config) =
    Config { config | background = color }


padded : Bool -> Config msg -> Config msg
padded pad (Config config) =
    Config { config | padded = pad }



-- Must be direct child of GenericModal.view to grow into available space


fillVerticalSpace : Bool -> Config msg -> Config msg
fillVerticalSpace predicate (Config config) =
    Config { config | fillSpace = predicate }


styles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Primitives/ModalBody.scss"
        { modalBody = "modalBody"
        , scrollable = "scrollable"
        , fillSpace = "fillSpace"
        , white = "white"
        , stone = "stone"
        , padded = "padded"
        }

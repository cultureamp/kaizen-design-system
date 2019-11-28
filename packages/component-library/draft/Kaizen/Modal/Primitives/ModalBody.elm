module Kaizen.Modal.Primitives.ModalBody exposing (fillVerticalSpace, layout, scrollable, view)

import CssModules exposing (css)
import Html exposing (Html, section, text)


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant msg
    , scrollable : Bool
    , fillSpace : Bool
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
            , ( .scrollable, config.scrollable )
            , ( .fillSpace, config.fillSpace )
            ]
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
    }



-- MODIFIERS


scrollable : Bool -> Config msg -> Config msg
scrollable predicate (Config config) =
    Config { config | scrollable = predicate }



-- Must be direct child of GenericModal.view to grow into available space


fillVerticalSpace : Bool -> Config msg -> Config msg
fillVerticalSpace predicate (Config config) =
    Config { config | fillSpace = predicate }


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Modal/Primitives/ModalBody.elm.scss"
        { modalBody = "modalBody"
        , scrollable = "scrollable"
        , fillSpace = "fillSpace"
        }

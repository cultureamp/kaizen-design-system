module Kaizen.Modal.GenericModal exposing (Variant(..), events, variant, view)

import CssModules exposing (css)
import Html exposing (Html, div, span)
import Html.Attributes.Aria exposing (ariaDescribedby, ariaLabelledby, role)
import Kaizen.Modal.Constants as Constants


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant
    , events : Maybe (List (Html.Attribute msg))
    }


type Variant
    = Small
    | Medium
    | Large
    | XLarge
    | Default


defaults : Configuration msg
defaults =
    { variant = Default
    , events = Nothing
    }



-- VARIANTS


variant : Variant -> Config msg
variant sizeVariant =
    Config { defaults | variant = sizeVariant }


view : List (Html msg) -> Config msg -> Html msg
view content (Config config) =
    span [ styles.class .modalLayer ] <|
        [ div
            ([ styles.classList [ ( .modalLayer, True ) ]
             , role "dialog"
             , ariaDescribedby Constants.ariaDescribedBy
             , ariaLabelledby Constants.ariaLabelledBy
             ]
                ++ Maybe.withDefault [] config.events
            )
            []
        ]
            ++ content


events : List (Html.Attribute msg) -> Config msg -> Config msg
events msg (Config config) =
    Config { config | events = Just msg }


styles =
    css "@cultureamp/kaizen-component-library/draft/Modal/primitives/GenericModal.elm.scss"
        { modalLayer = "modalLayer"
        , modalBox = "modalBox"
        , small = "small"
        , medium = "medium"
        , large = "large"
        , xLarge = "xLarge"
        }

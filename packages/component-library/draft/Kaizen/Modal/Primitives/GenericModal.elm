module Kaizen.Modal.Primitives.GenericModal exposing (default, events, view)

import CssModules exposing (css)
import Html exposing (Html, div, span)
import Html.Attributes.Aria exposing (ariaDescribedby, ariaLabelledby, role)
import Kaizen.Modal.Primitives.Constants as Constants


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { events : Maybe (List (Html.Attribute msg))
    }


defaults : Configuration msg
defaults =
    { events = Nothing
    }



-- VARIANTS


default : Config msg
default =
    Config defaults


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
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Modal/Primitives/GenericModal.elm.scss"
        { modalLayer = "modalLayer"
        , small = "small"
        , medium = "medium"
        , large = "large"
        , xLarge = "xLarge"
        }

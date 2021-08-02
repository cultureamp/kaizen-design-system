module Kaizen.HostedAssets.Image exposing (Config, Role(..), attributes, default, image)

import Html exposing (Html, img)
import Html.Attributes exposing (src)
import Html.Attributes.Aria as Aria exposing (ariaHidden, ariaLabelledby)
import Kaizen.HostedAssets exposing (assetUrl)


type Role
    = Presentation


default : Config msg
default =
    Config defaults



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { role : Role
    , attributes : List (Html.Attribute msg)
    }


role : Role -> Config msg -> Config msg
role value (Config config) =
    Config { config | role = value }


defaults : ConfigValue msg
defaults =
    { role = Presentation
    , attributes = []
    }


attributes : List (Html.Attribute msg) -> Config msg -> Config msg
attributes value (Config config) =
    Config { config | attributes = value }



-- VIEW


image : Config msg -> String -> Html msg
image (Config config) assetPath =
    let
        attributes_ =
            [ src (assetUrl assetPath) ]
                ++ a11yAttributes config
                ++ config.attributes
    in
    img attributes_ []


a11yAttributes : ConfigValue msg -> List (Html.Attribute msg)
a11yAttributes config =
    case config.role of
        Presentation ->
            [ Aria.role "presentation"
            , ariaHidden True
            ]

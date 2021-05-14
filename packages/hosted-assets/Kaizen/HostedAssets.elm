module Kaizen.HostedAssets exposing (Role(..), assetUrl, image)

import Html exposing (Html, img)
import Html.Attributes exposing (src)
import Html.Attributes.Aria as Aria exposing (ariaHidden, ariaLabelledby)


originBaseUrl =
    "https://d1e7r7b0lb8p4d.cloudfront.net"


{-| Returns the full URL of the asset at `path` managed by the
`kaizen-design-system-assets` service.

@example
assetUrl "some/blob.png" -> "<https://<origin>/some/blob.png">

@see <https://github.com/cultureamp/kaizen-design-system-assets/>

-}
assetUrl : String -> String
assetUrl path =
    [ originBaseUrl, path ] |> String.join "/"


type Role
    = Presentation


image : String -> Role -> Html msg
image assetPath role =
    img
        ((src <| assetUrl assetPath) :: a11yAttributes role)
        []


a11yAttributes : Role -> List (Html.Attribute msg)
a11yAttributes role =
    case role of
        Presentation ->
            [ Aria.role "presentation"
            , ariaHidden True
            ]

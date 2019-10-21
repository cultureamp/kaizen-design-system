module Icon.SvgAsset exposing (SvgAsset, decoder, svgAsset)

import Json.Decode as Json


svgAsset : String -> SvgAsset
svgAsset path =
    -- these placeholder values are replaced by Webpack at build time
    { id = "elm-svg-asset-placeholder"
    , viewBox = "0 0 0 0"
    }


type alias SvgAsset =
    { id : String
    , viewBox : String
    }


decoder : Json.Decoder SvgAsset
decoder =
    Json.map2 SvgAsset
        (Json.field "id" Json.string)
        (Json.field "viewBox" Json.string)

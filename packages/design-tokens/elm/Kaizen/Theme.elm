module Kaizen.Theme exposing (Theme(..), defaultTheme, themeDecoder)

import Json.Decode as Decode exposing (Decoder)


type Theme
    = Heart
    | Zen


defaultTheme =
    Zen


themeDecoder : Decoder Theme
themeDecoder =
    Decode.string
        |> Decode.map
            (\themeString ->
                case themeString of
                    "zen" ->
                        Zen

                    "heart" ->
                        Heart

                    _ ->
                        defaultTheme
            )

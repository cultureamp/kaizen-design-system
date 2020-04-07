module Spacing.Types exposing (GridFraction, Spacing)


type alias GridFraction =
    Float


type alias Spacing a =
    { a
        | p : Maybe GridFraction
        , pt : Maybe GridFraction
        , pr : Maybe GridFraction
        , pb : Maybe GridFraction
        , pl : Maybe GridFraction
        , px : Maybe GridFraction
        , py : Maybe GridFraction
        , m : Maybe GridFraction
        , mt : Maybe GridFraction
        , mb : Maybe GridFraction
        , ml : Maybe GridFraction
        , mx : Maybe GridFraction
        , my : Maybe GridFraction
    }

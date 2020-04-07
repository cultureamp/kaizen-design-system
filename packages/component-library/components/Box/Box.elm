module Box.Box exposing (classNameAndIHaveSpokenToDST, m, mb, ml, mt, mx, my, p, pb, pl, pr, pt, px, py)

import Html exposing (Html, div, text)
import Spacing.Types exposing (GridFraction, Spacing)


type alias Config =
    Spacing
        { classNameAndIHaveSpokenToDST : Maybe String
        }


defaultConfig : Config
defaultConfig =
    { p = Nothing
    , pt = Nothing
    , pr = Nothing
    , pb = Nothing
    , pl = Nothing
    , px = Nothing
    , py = Nothing
    , m = Nothing
    , mt = Nothing
    , mb = Nothing
    , ml = Nothing
    , mx = Nothing
    , my = Nothing
    , classNameAndIHaveSpokenToDST = Nothing
    }


type Property
    = P GridFraction
    | PT GridFraction
    | PR GridFraction
    | PB GridFraction
    | PL GridFraction
    | PX GridFraction
    | PY GridFraction
    | M GridFraction
    | MT GridFraction
    | MB GridFraction
    | ML GridFraction
    | MX GridFraction
    | MY GridFraction
    | ClassNameAndIHaveSpokenToDST String


p n =
    P n


pt n =
    PT n


pr n =
    PR n


pb n =
    PB n


pl n =
    PL n


px n =
    PX n


py n =
    PY n


m n =
    M n


mt n =
    MT n


mb n =
    MB n


ml n =
    ML n


mx n =
    MX n


my n =
    MY n


classNameAndIHaveSpokenToDST s =
    ClassNameAndIHaveSpokenToDST s


setProperty : Property -> Config -> Config
setProperty param config =
    case param of
        P n ->
            { config | p = Just n }

        PT n ->
            { config | pt = Just n }

        PR n ->
            { config | pr = Just n }

        PB n ->
            { config | pb = Just n }

        PL n ->
            { config | pl = Just n }

        PX n ->
            { config | px = Just n }

        PY n ->
            { config | py = Just n }

        M n ->
            { config | m = Just n }

        MT n ->
            { config | mt = Just n }

        MB n ->
            { config | mb = Just n }

        ML n ->
            { config | ml = Just n }

        MX n ->
            { config | mx = Just n }

        MY n ->
            { config | my = Just n }

        ClassNameAndIHaveSpokenToDST s ->
            { config | classNameAndIHaveSpokenToDST = Just s }


toConfig : List Property -> Config
toConfig =
    List.foldl setProperty defaultConfig


view : List Property -> List (Html msg) -> Html msg
view properties children =
    let
        config =
            toConfig properties
    in
    div [] children

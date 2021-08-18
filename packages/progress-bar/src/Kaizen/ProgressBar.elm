module Kaizen.ProgressBar exposing (Mood(..), view)

import Box.Box as Box exposing (..)
import CssModules exposing (css)
import Heading.Heading as Heading exposing (TypeVariant(..))
import Html exposing (..)
import Html.Attributes exposing (style)


type alias Configuration =
    { progressPercentage : Int
    , mood : Mood
    }


type Mood
    = Informative
    | Positive
    | Cautionary
    | Negative


moodToClass mood =
    case mood of
        Informative ->
            .informative

        Positive ->
            .positive

        Cautionary ->
            .cautionary

        Negative ->
            .negative


view : Configuration -> Html msg
view { progressPercentage, mood } =
    let
        progressBarStyle =
            let
                translateXValue =
                    -(100 - progressPercentage)

                translateXString =
                    "translateX(" ++ String.fromInt translateXValue ++ "%" ++ ")"
            in
            style "transform" translateXString
    in
    div
        []
        [ div [ class .label ]
            [ box [ marginBottom 0.25 ]
                [ Heading.view
                    (Heading.p |> Heading.variant Heading4)
                    [ text <| String.fromInt progressPercentage ++ "%" ]
                ]
            ]
        , div
            [ classList [ ( .progressBackground, True ) ] ]
            [ div
                [ styles.class (moodToClass mood)
                , classList [ ( .finished, progressPercentage == 100 ) ]
                , progressBarStyle
                ]
                []
            ]
        ]


class =
    styles.class


classList =
    styles.classList


styles =
    css "@kaizen/progress-bar/src/ProgressBar.scss"
        { label = "label"
        , progressBackground = "progressBackground"
        , positive = "positive"
        , informative = "informative"
        , cautionary = "cautionary"
        , negative = "negative"
        , finished = "finished"
        }

module Kaizen.ProgressBar exposing (Config, Mood(..), default, mood, progressPercentage, view)

import Box.Box as Box exposing (..)
import CssModules exposing (css)
import Heading.Heading as Heading exposing (TypeVariant(..))
import Html exposing (..)
import Html.Attributes exposing (attribute, style)


type Config
    = Config ConfigValue


type alias ConfigValue =
    { progressPercentage : Int
    , mood : Mood
    }


type Mood
    = Informative
    | Positive
    | Cautionary
    | Negative


moodToClass moodArg =
    case moodArg of
        Informative ->
            .informative

        Positive ->
            .positive

        Cautionary ->
            .cautionary

        Negative ->
            .negative


default : Config
default =
    Config defaults


defaults : ConfigValue
defaults =
    { mood = Positive
    , progressPercentage = 0
    }


mood : Mood -> Config -> Config
mood moodArg (Config config) =
    Config { config | mood = moodArg }


progressPercentage : Int -> Config -> Config
progressPercentage progressPercentageArg (Config config) =
    Config { config | progressPercentage = progressPercentageArg }


view : Config -> Html msg
view (Config config) =
    let
        progressBarStyle =
            let
                translateXValue =
                    -(100 - config.progressPercentage)

                translateXString =
                    "translateX(" ++ String.fromInt translateXValue ++ "%" ++ ")"
            in
            style "transform" translateXString

        isAnimating =
            config.progressPercentage < 100 || config.mood == Negative
    in
    div
        [ attribute "role" "progressbar"
        , attribute "aria-valuenow" (String.fromInt config.progressPercentage)
        , attribute "aria-valuemin" "0"
        , attribute "aria-valuemax" "100"
        ]
        [ div [ class .label ]
            [ box [ marginBottom 0.25 ]
                [ Heading.view
                    (Heading.p |> Heading.variant Heading4)
                    [ text <| String.fromInt config.progressPercentage ++ "%" ]
                ]
            ]
        , div
            [ classList [ ( .progressBackground, True ) ] ]
            [ div
                [ class (moodToClass config.mood)
                , classList [ ( .animating, isAnimating |> Debug.log "isAnim" ) ]
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
        , animating = "animating"
        }

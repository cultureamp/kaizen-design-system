module KaizenDraft.Tag.Tag exposing
    ( Sentiment(..)
    , Size(..)
    , Status(..)
    , Validation(..)
    , default
    , dismissible
    , inline
    , onDismiss
    , onMousedown
    , onMouseleave
    , sentiment
    , size
    , status
    , truncateWidth
    , validation
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, span, text)
import Html.Attributes exposing (style)
import Html.Events exposing (on, onClick)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant
    , size : Size
    , inline : Bool
    , dismissible : Bool
    , onDismiss : Maybe msg
    , onMousedown : Maybe msg
    , onMouseleave : Maybe msg
    , truncationWidth : Maybe Float
    }


type Size
    = Medium
    | Small


type Validation
    = ValidationPositive
    | ValidationInformative
    | ValidationNegative
    | ValidationCautionary


type Sentiment
    = SentimentPositive
    | SentimentNeutral
    | SentimentNegative
    | SentimentNone


type Status
    = StatusLive
    | StatusDraft
    | StatusClosed
    | StatusAction



-- VARIANTS


type Variant
    = Default
    | Validation Validation
    | Sentiment Sentiment
    | Status Status


default : Config msg
default =
    Config { defaults | variant = Default }


validation : Validation -> Config msg
validation variant =
    Config { defaults | variant = Validation variant }


sentiment : Sentiment -> Config msg
sentiment variant =
    Config { defaults | variant = Sentiment variant }


status : Status -> Config msg
status variant =
    Config { defaults | variant = Status variant }



-- MODIFIERS


size : Size -> Config msg -> Config msg
size size_ (Config config) =
    Config { config | size = size_ }


dismissible : Bool -> Config msg -> Config msg
dismissible predicate (Config config) =
    Config { config | dismissible = predicate }


onDismiss : msg -> Config msg -> Config msg
onDismiss msg (Config config) =
    Config { config | onDismiss = Just msg }


onMousedown : msg -> Config msg -> Config msg
onMousedown msg (Config config) =
    Config { config | onMousedown = Just msg }


onMouseleave : msg -> Config msg -> Config msg
onMouseleave msg (Config config) =
    Config { config | onMouseleave = Just msg }


truncateWidth : Float -> Config msg -> Config msg
truncateWidth width (Config config) =
    Config { config | truncationWidth = Just width }



-- root class adds margin right, inline removes all margins.


inline : Bool -> Config msg -> Config msg
inline predicate (Config config) =
    Config { config | inline = predicate }


defaults : Configuration msg
defaults =
    { variant = Default
    , size = Medium
    , inline = False
    , dismissible = False
    , onDismiss = Nothing
    , onMousedown = Nothing
    , onMouseleave = Nothing
    , truncationWidth = Nothing
    }


view : Config msg -> String -> Html msg
view (Config config) value =
    let
        resolveClear =
            if config.dismissible then
                viewClear config

            else
                text ""

        resolveValidationIcon =
            case config.variant of
                Validation ValidationPositive ->
                    if config.size == Medium then
                        viewPositiveValidationIcon config

                    else
                        text ""

                Validation ValidationInformative ->
                    if config.size == Medium then
                        viewValidationIcon config informationIconAsset

                    else
                        text ""

                Validation ValidationNegative ->
                    if config.size == Medium then
                        viewValidationIcon config exclamationIconAsset

                    else
                        text ""

                Validation ValidationCautionary ->
                    if config.size == Medium then
                        viewValidationIcon config exclamationIconAsset

                    else
                        text ""

                _ ->
                    text ""

        resolveVariantStyle =
            case config.variant of
                Default ->
                    [ ( .default, True ) ]

                Sentiment SentimentPositive ->
                    [ ( .sentimentPositive, True ) ]

                Sentiment SentimentNeutral ->
                    [ ( .sentimentNeutral, True ) ]

                Sentiment SentimentNegative ->
                    [ ( .sentimentNegative, True ) ]

                Sentiment SentimentNone ->
                    [ ( .sentimentNone, True ) ]

                Validation ValidationPositive ->
                    [ ( .validationPositive, True ) ]

                Validation ValidationInformative ->
                    [ ( .validationInformative, True ) ]

                Validation ValidationNegative ->
                    [ ( .validationNegative, True ) ]

                Validation ValidationCautionary ->
                    [ ( .validationCautionary, True ) ]

                Status StatusLive ->
                    [ ( .statusLive, True ) ]

                Status StatusDraft ->
                    [ ( .statusDraft, True ) ]

                Status StatusClosed ->
                    [ ( .statusClosed, True ) ]

                Status StatusAction ->
                    [ ( .statusAction, True ) ]

        resolveIndicatorIcon =
            case config.variant of
                Status StatusLive ->
                    viewIndicatorIcon config

                _ ->
                    text ""
    in
    div
        [ styles.classList
            ([ ( .root, True )
             , ( .medium, config.size == Medium )
             , ( .small, config.size == Small )
             , ( .inline, config.inline )
             , ( .dismissible, config.dismissible )
             ]
                ++ resolveVariantStyle
            )
        ]
        [ div [ styles.class .layoutContainer ]
            [ resolveValidationIcon
            , viewTextContent config value
            , resolveClear
            , resolveIndicatorIcon
            ]
        ]


viewTextContent : Configuration msg -> String -> Html msg
viewTextContent config value =
    let
        resolveTruncation =
            case config.truncationWidth of
                Just width ->
                    [ styles.class .truncate, style "max-width" (String.fromFloat width ++ "px") ]

                Nothing ->
                    []
    in
    span ([ styles.class .textContent ] ++ resolveTruncation) [ text value ]


viewPositiveValidationIcon : Configuration msg -> Html msg
viewPositiveValidationIcon config =
    span [ styles.class .validationIcon ]
        [ Icon.view Icon.presentation
            (svgAsset "@kaizen/component-library/icons/success.icon.svg")
            |> Html.map never
        ]


viewValidationIcon : Configuration msg -> Icon.SvgAsset.SvgAsset -> Html msg
viewValidationIcon config iconAsset =
    span [ styles.class .validationIcon ]
        [ Icon.view Icon.presentation
            iconAsset
            |> Html.map never
        ]


exclamationIconAsset =
    svgAsset "@kaizen/component-library/icons/exclamation.icon.svg"


informationIconAsset =
    svgAsset "@kaizen/component-library/icons/information.icon.svg"


viewIndicatorIcon : Configuration msg -> Html msg
viewIndicatorIcon config =
    span [ styles.class .pulse ]
        [ span [ styles.class .pulseRing ] []
        ]


viewClear : Configuration msg -> Html msg
viewClear config =
    let
        dismiss onDismissMsg =
            onClick onDismissMsg

        mousedown onMousedownMsg =
            on "mousedown" <| Decode.succeed onMousedownMsg

        mouseleave onMouseleaveMsg =
            on "mouseleave" <| Decode.succeed onMouseleaveMsg

        events =
            List.filterMap identity
                [ Maybe.map dismiss config.onDismiss
                , Maybe.map mousedown config.onMousedown
                , Maybe.map mouseleave config.onMouseleave
                ]
    in
    span ([ styles.class .dismissIcon ] ++ events)
        [ Icon.view (Icon.presentation |> Icon.inheritSize True)
            (svgAsset "@kaizen/component-library/icons/clear.icon.svg")
            |> Html.map never
        ]


styles =
    css "@kaizen/draft-tag/KaizenDraft/Tag/Tag.scss"
        { root = "root"
        , layoutContainer = "layoutContainer"
        , default = "default"
        , sentimentPositive = "sentimentPositive"
        , sentimentNeutral = "sentimentNeutral"
        , sentimentNegative = "sentimentNegative"
        , sentimentNone = "sentimentNone"
        , validationPositive = "validationPositive"
        , validationInformative = "validationInformative"
        , validationNegative = "validationNegative"
        , validationCautionary = "validationCautionary"
        , statusLive = "statusLive"
        , statusDraft = "statusDraft"
        , statusClosed = "statusClosed"
        , statusAction = "statusAction"
        , medium = "medium"
        , small = "small"
        , inline = "inline"
        , dismissible = "dismissible"
        , dismissIcon = "dismissIcon"
        , validationIcon = "validationIcon"
        , truncate = "truncate"
        , textContent = "textContent"
        , pulse = "pulse"
        , pulseRing = "pulseRing"
        }

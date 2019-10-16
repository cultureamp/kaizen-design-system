module Kaizen.Tag.Tag exposing
    ( Size(..)
    , Validation(..)
    , default
    , dismissible
    , inline
    , onDismiss
    , onMousedown
    , onMouseleave
    , size
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
    = Cautionary
    | Negative



-- VARIANTS


type Variant
    = Default
    | Validation Validation


default : Config msg
default =
    Config { defaults | variant = Default }


validation : Validation -> Config msg
validation validationType =
    Config { defaults | variant = Validation validationType }



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
                Validation Cautionary ->
                    if config.size == Medium then
                        viewValidationIcon config

                    else
                        text ""

                Validation Negative ->
                    if config.size == Medium then
                        viewValidationIcon config

                    else
                        text ""

                _ ->
                    text ""

        resolveVariantStyle =
            case config.variant of
                Default ->
                    [ ( .default, True ) ]

                Validation Cautionary ->
                    [ ( .validation, True ), ( .cautionary, True ) ]

                Validation Negative ->
                    [ ( .validation, True ), ( .negative, True ) ]
    in
    div
        [ styles.classList
            ([ ( .root, True )
             , ( .default, config.variant == Default )
             , ( .medium, config.size == Medium )
             , ( .small, config.size == Small )
             , ( .inline, config.inline )
             , ( .dismissible, config.dismissible )
             ]
                ++ resolveVariantStyle
            )
        ]
        [ viewTextContent config value, resolveClear, resolveValidationIcon ]


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


viewValidationIcon : Configuration msg -> Html msg
viewValidationIcon config =
    span [ styles.class .validationIcon ]
        [ Icon.view (Icon.presentation |> Icon.inheritSize True)
            (svgAsset "@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
            |> Html.map never
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
            (svgAsset "@cultureamp/kaizen-component-library/icons/clear.icon.svg")
            |> Html.map never
        ]


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Tag/Tag.scss"
        { root = "root"
        , medium = "medium"
        , small = "small"
        , default = "default"
        , validation = "validation"
        , inline = "inline"
        , dismissIcon = "dismissIcon"
        , interactive = "interactive"
        , dismissible = "dismissible"
        , cautionary = "cautionary"
        , negative = "negative"
        , validationIcon = "validationIcon"
        , truncate = "truncate"
        , textContent = "textContent"
        }

module Heading.Heading exposing
    ( Config
    , DataAttribute
    , TypeVariant(..)
    , addDataAttribute
    , classNameAndIHaveSpokenToDST
    , div
    , h1
    , h2
    , h3
    , h4
    , h5
    , h6
    , id
    , p
    , pre
    , span
    , tag
    , variant
    , view
    )

import CssModules exposing (css)
import Debug exposing (log)
import Html exposing (text)
import Html.Attributes
import List


type Config msg
    = Config (ConfigValue msg)


type alias Element msg =
    List (Html.Attribute msg) -> List (Html.Html msg) -> Html.Html msg


type alias DataAttribute =
    { name : String
    , value : String
    }


type alias ConfigValue msg =
    { tag : Maybe (Element msg)
    , variant : TypeVariant
    , id : Maybe String
    , dataAttribute : List DataAttribute
    , classNameAndIHaveSpokenToDST : Maybe String
    }


defaultConfig : ConfigValue msg
defaultConfig =
    { tag = Nothing
    , variant = Display0
    , id = Nothing
    , dataAttribute = []
    , classNameAndIHaveSpokenToDST = Nothing
    }


toUntypedDataAttribute : DataAttribute -> Html.Attribute msg
toUntypedDataAttribute typedAttribute =
    case typedAttribute of
        { name, value } ->
            Html.Attributes.attribute ("data-" ++ name) value


inferTagFromVariant : TypeVariant -> Element msg
inferTagFromVariant typeVariant =
    case typeVariant of
        Display0 ->
            Html.h1

        Heading1 ->
            Html.h1

        Heading2 ->
            Html.h2

        Heading3 ->
            Html.h3

        Heading4 ->
            Html.h4

        Heading5 ->
            Html.h5

        Heading6 ->
            Html.h6



-- VIEW


view : Config msg -> List (Html.Html msg) -> Html.Html msg
view (Config config) children =
    let
        resolveId =
            case config.id of
                Just id_ ->
                    [ Html.Attributes.id id_ ]

                Nothing ->
                    []

        resolveAttributes =
            List.map toUntypedDataAttribute config.dataAttribute

        resolveTag =
            case config.tag of
                Just tag_ ->
                    tag_

                Nothing ->
                    inferTagFromVariant config.variant

        resolveCustomClass =
            config.classNameAndIHaveSpokenToDST |> Maybe.withDefault ""
    in
    resolveTag
        ([ className config.variant ] ++ [ Html.Attributes.class resolveCustomClass ] ++ resolveId ++ resolveAttributes)
        children


className : TypeVariant -> Html.Attribute msg
className typeVariant =
    let
        styleClass =
            case typeVariant of
                Display0 ->
                    .display0

                Heading1 ->
                    .heading1

                Heading2 ->
                    .heading2

                Heading3 ->
                    .heading3

                Heading4 ->
                    .heading4

                Heading5 ->
                    .heading5

                Heading6 ->
                    .heading6
    in
    styles.classList
        [ ( styleClass, True )
        , ( .heading, True )
        ]


styles =
    css "@kaizen/component-library/components/Heading/Heading.module.scss"
        { heading = "heading"
        , display0 = "display-0"
        , heading1 = "heading-1"
        , heading2 = "heading-2"
        , heading3 = "heading-3"
        , heading4 = "heading-4"
        , heading5 = "heading-5"
        , heading6 = "heading-6"
        }


type TypeVariant
    = Display0
    | Heading1
    | Heading2
    | Heading3
    | Heading4
    | Heading5
    | Heading6



-- MODIFIERS


pre : Config msg
pre =
    Config { defaultConfig | tag = Just Html.pre }


p : Config msg
p =
    Config { defaultConfig | tag = Just Html.p }


div : Config msg
div =
    Config { defaultConfig | tag = Just Html.div }


span : Config msg
span =
    Config { defaultConfig | tag = Just Html.span }


h1 : Config msg
h1 =
    Config { defaultConfig | tag = Just Html.h1 }


h2 : Config msg
h2 =
    Config { defaultConfig | tag = Just Html.h2 }


h3 : Config msg
h3 =
    Config { defaultConfig | tag = Just Html.h3 }


h4 : Config msg
h4 =
    Config { defaultConfig | tag = Just Html.h4 }


h5 : Config msg
h5 =
    Config { defaultConfig | tag = Just Html.h5 }


h6 : Config msg
h6 =
    Config { defaultConfig | tag = Just Html.h6 }


variant : TypeVariant -> Config msg -> Config msg
variant value (Config config) =
    Config { config | variant = value }


id : String -> Config msg -> Config msg
id id_ (Config config) =
    Config { config | id = Just id_ }


classNameAndIHaveSpokenToDST : String -> Config msg -> Config msg
classNameAndIHaveSpokenToDST value (Config config) =
    Config { config | classNameAndIHaveSpokenToDST = Just value }


addDataAttribute : DataAttribute -> Config msg -> Config msg
addDataAttribute attribute_ (Config config) =
    Config { config | dataAttribute = config.dataAttribute ++ [ attribute_ ] }


tag tag_ (Config config) =
    Config { config | id = Just tag_ }

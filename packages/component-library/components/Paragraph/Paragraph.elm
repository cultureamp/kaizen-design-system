module Paragraph.Paragraph exposing
    ( Config
    , DataAttribute
    , TypeVariant(..)
    , a
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
    , variant = Body
    , id = Nothing
    , dataAttribute = []
    , classNameAndIHaveSpokenToDST = Nothing
    }


toUntypedDataAttribute : DataAttribute -> Html.Attribute msg
toUntypedDataAttribute typedAttribute =
    case typedAttribute of
        { name, value } ->
            Html.Attributes.attribute ("data-" ++ name) value



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
                    Html.p

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
                IntroLede ->
                    .introLede

                Body ->
                    .body

                Small ->
                    .small

                ExtraSmall ->
                    .extraSmall
    in
    styles.classList
        [ ( styleClass, True )
        , ( .paragraph, True )
        ]


styles =
    css "@kaizen/component-library/components/Paragraph/Paragraph.module.scss"
        { paragraph = "paragraph"
        , introLede = "intro-lede"
        , body = "body"
        , small = "small"
        , extraSmall = "extra-small"
        }


type TypeVariant
    = IntroLede
    | Body
    | Small
    | ExtraSmall



-- MODIFIERS


pre : Config msg
pre =
    Config { defaultConfig | tag = Just Html.pre }


p : Config msg
p =
    Config { defaultConfig | tag = Just Html.p }


a : Config msg
a =
    Config { defaultConfig | tag = Just Html.a }


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

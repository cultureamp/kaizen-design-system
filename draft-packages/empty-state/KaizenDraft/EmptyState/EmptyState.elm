module KaizenDraft.EmptyState.EmptyState exposing
    ( BodyTextProp(..)
    , Illustration(..)
    , LayoutContext(..)
    , automationId
    , bodyText
    , children
    , default
    , headingText
    , id
    , illustrationType
    , layoutContext
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, img, text)
import Html.Attributes exposing (id, src)
import Kaizen.HostedAssets.Image as Image exposing (Role(..), image)



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type Illustration
    = Positive
    | Neutral
    | Negative
    | Informative
    | Action


type LayoutContext
    = SidebarAndContent
    | ContentOnly


type BodyTextProp msg
    = BodyText String
    | BodyTextHtml (List (Html msg))


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , headingText : String
    , bodyText : BodyTextProp msg
    , illustrationType : Illustration
    , layoutContext : LayoutContext
    , children : List (Html msg)
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
    , headingText = ""
    , bodyText = BodyText ""
    , illustrationType = Informative
    , layoutContext = SidebarAndContent
    , children = []
    }


illustrationPath : ConfigValue msg -> String
illustrationPath config =
    case config.illustrationType of
        Action ->  "illustrations/heart/scene/empty-states-action.svg"

        Neutral -> "illustrations/heart/scene/empty-states-neutral.svg"

        Positive -> "illustrations/heart/scene/empty-states-positive.svg"

        Informative -> "illustrations/heart/scene/empty-states-informative.svg"

        Negative -> "illustrations/heart/scene/empty-states-negative.svg"



-- VARIANTS


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }


headingText : String -> Config msg -> Config msg
headingText value (Config config) =
    Config { config | headingText = value }


bodyText : BodyTextProp msg -> Config msg -> Config msg
bodyText value (Config config) =
    Config { config | bodyText = value }


illustrationType : Illustration -> Config msg -> Config msg
illustrationType value (Config config) =
    Config { config | illustrationType = value }


layoutContext : LayoutContext -> Config msg -> Config msg
layoutContext value (Config config) =
    Config { config | layoutContext = value }


children : List (Html msg) -> Config msg -> Config msg
children value (Config config) =
    Config { config | children = value }


emptyStateIllustration : ConfigValue msg -> Html msg
emptyStateIllustration config =
    let
        imageConfig =
            Image.default
                |> Image.attributes [ styles.class .illustration ]
    in
    image imageConfig (illustrationPath config)


illustrationClass :
    Illustration
    ->
        { a
            | positiveIllustrationType : String
            , negativeIllustrationType : String
            , neutralIllustrationType : String
            , informativeIllustrationType : String
            , actionIllustrationType : String
        }
    -> String
illustrationClass illustration =
    case illustration of
        Positive ->
            .positiveIllustrationType

        Negative ->
            .negativeIllustrationType

        Neutral ->
            .neutralIllustrationType

        Informative ->
            .informativeIllustrationType

        Action ->
            .actionIllustrationType



-- VIEW


view : Config msg -> Html msg
view (Config config) =
    let
        idAttr =
            case config.id of
                Just idString ->
                    [ Html.Attributes.id idString ]

                Nothing ->
                    []

        automationIdAttr =
            case config.automationId of
                Just idString ->
                    [ Html.Attributes.attribute "data-automation-id" idString ]

                Nothing ->
                    []

        bodyTextContent =
            case config.bodyText of
                BodyText string ->
                    [ text string ]

                BodyTextHtml bodyTextChildren ->
                    bodyTextChildren
    in
    div
        (idAttr
            ++ automationIdAttr
            ++ [ styles.classList
                    [ ( .container, True )
                    , ( .sidebarAndContent, config.layoutContext == SidebarAndContent )
                    , ( .contentOnly, config.layoutContext == ContentOnly )
                    , ( .zen, True )
                    , ( illustrationClass config.illustrationType, True )
                    ]
               ]
        )
        [ div [ styles.class .illustrationSide ]
            [ emptyStateIllustration config
            ]
        , div [ styles.class .textSide ]
            [ div [ styles.class .textSideInner ]
                ([ div [ styles.class .heading ] [ text config.headingText ]
                 , div [ styles.class .description ] bodyTextContent
                 ]
                    ++ config.children
                )
            ]
        ]


styles =
    css "@kaizen/draft-empty-state/KaizenDraft/EmptyState/styles.scss"
        { container = "container"
        , illustrationSide = "illustrationSide"
        , textSide = "textSide"
        , illustration = "illustration"
        , textSideInner = "textSideInner"
        , zen = "zen"
        , heading = "heading"
        , description = "description"
        , sidebarAndContent = "sidebarAndContent"
        , contentOnly = "contentOnly"
        , positiveIllustrationType = "positive"
        , negativeIllustrationType = "negative"
        , neutralIllustrationType = "neutral"
        , actionIllustrationType = "action"
        , informativeIllustrationType = "informative"
        }

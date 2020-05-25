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
import WebpackAsset exposing (assetUrl)



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


actionIllustrationUrl : WebpackAsset.AssetUrl
actionIllustrationUrl =
    assetUrl "@kaizen/draft-empty-state/KaizenDraft/EmptyState/illustrations/action.png"


informativeIllustrationUrl : WebpackAsset.AssetUrl
informativeIllustrationUrl =
    assetUrl "@kaizen/draft-empty-state/KaizenDraft/EmptyState/illustrations/informative.png"


negativeIllustrationUrl : WebpackAsset.AssetUrl
negativeIllustrationUrl =
    assetUrl "@kaizen/draft-empty-state/KaizenDraft/EmptyState/illustrations/negative.png"


neutralIllustrationUrl : WebpackAsset.AssetUrl
neutralIllustrationUrl =
    assetUrl "@kaizen/draft-empty-state/KaizenDraft/EmptyState/illustrations/neutral.png"


positiveIllustrationUrl : WebpackAsset.AssetUrl
positiveIllustrationUrl =
    assetUrl "@kaizen/draft-empty-state/KaizenDraft/EmptyState/illustrations/positive.png"



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


emptyStateIllustration : Illustration -> Html msg
emptyStateIllustration illustration =
    case illustration of
        Positive ->
            img [ styles.class .illustration, src positiveIllustrationUrl ] []

        Negative ->
            img [ styles.class .illustration, src negativeIllustrationUrl ] []

        Neutral ->
            img [ styles.class .illustration, src neutralIllustrationUrl ] []

        Informative ->
            img [ styles.class .illustration, src informativeIllustrationUrl ] []

        Action ->
            img [ styles.class .illustration, src actionIllustrationUrl ] []



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
                    ]
               ]
        )
        [ div [ styles.class .illustrationSide ]
            [ emptyStateIllustration config.illustrationType
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
        }

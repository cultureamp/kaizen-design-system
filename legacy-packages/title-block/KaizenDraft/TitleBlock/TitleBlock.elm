module KaizenDraft.TitleBlock.TitleBlock exposing (Breadcrumb, NavButton(..), ReverseColor(..), actionsList, breadcrumb, class, default, navigationButtons, reverseColor, reversed, subtitle, view)

import CssModules exposing (css)
import Html exposing (Html, a, div, h2, h3, span, text)
import Html.Attributes exposing (..)
import Html.Extra exposing (static)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import KaizenDraft.TitleBlock.NavigationButton as NavigationButton


type alias Breadcrumb =
    { label : String
    , link : String
    }


type ReverseColor
    = Lapis
    | Ocean
    | Peach
    | Seedling
    | Wisteria
    | Yuzu
    | Transparent


type NavButton msg
    = NavBtnLink String String (Maybe msg) Bool
    | NavBtn String (Maybe msg) Bool


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { subtitle : Maybe String
    , navigationButtons : Maybe (List (NavButton msg))
    , actionsList : Maybe (List (Html msg))
    , breadcrumb : Maybe Breadcrumb
    , reversed : Bool
    , reverseColor : Maybe ReverseColor
    }


defaults : ConfigValue msg
defaults =
    { subtitle = Nothing
    , navigationButtons = Nothing
    , actionsList = Nothing
    , breadcrumb = Nothing
    , reversed = False
    , reverseColor = Nothing
    }


default : Config msg
default =
    Config defaults



-- MODIFIERS


subtitle : String -> Config msg -> Config msg
subtitle value (Config config) =
    Config { config | subtitle = Just value }


navigationButtons : List (NavButton msg) -> Config msg -> Config msg
navigationButtons value (Config config) =
    Config { config | navigationButtons = Just value }


actionsList : List (Html msg) -> Config msg -> Config msg
actionsList value (Config config) =
    Config { config | actionsList = Just value }


breadcrumb : Breadcrumb -> Config msg -> Config msg
breadcrumb value (Config config) =
    Config { config | breadcrumb = Just value }


reversed : Bool -> Config msg -> Config msg
reversed value (Config config) =
    Config { config | reversed = value }


reverseColor : ReverseColor -> Config msg -> Config msg
reverseColor value (Config config) =
    Config { config | reverseColor = Just value }



-- VIEWS


breadCrumbView : Breadcrumb -> Config msg -> Html msg
breadCrumbView { label, link } (Config config) =
    let
        breadCrumbClassList =
            styles.classList
                [ ( .breadcrumb, True )
                , ( .reversed, config.reversed )
                ]
    in
    a [ href link, breadCrumbClassList, attribute "data-automation-id" "TitleBlock__Breadcrumb" ]
        [ div [ class .circle ]
            [ Icon.view
                Icon.presentation
                (svgAsset "@kaizen/component-library/icons/arrow-backward.icon.svg")
                |> static
            ]
        , span
            [ class .breadcrumbText ]
            [ text label ]
        ]


navigationButtonView : Bool -> NavButton msg -> Html msg
navigationButtonView reverseColors navButton =
    case navButton of
        NavBtnLink label path maybeMsg active ->
            case maybeMsg of
                Just msg ->
                    NavigationButton.view
                        (NavigationButton.default
                            |> NavigationButton.onClick msg
                            |> NavigationButton.path path
                            |> NavigationButton.active active
                            |> NavigationButton.reversed reverseColors
                        )
                        label

                Nothing ->
                    NavigationButton.view
                        (NavigationButton.default
                            |> NavigationButton.path path
                            |> NavigationButton.active active
                            |> NavigationButton.reversed reverseColors
                        )
                        label

        NavBtn label maybeMsg active ->
            case maybeMsg of
                Just msg ->
                    NavigationButton.view
                        (NavigationButton.default
                            |> NavigationButton.onClick msg
                            |> NavigationButton.active active
                            |> NavigationButton.reversed reverseColors
                        )
                        label

                Nothing ->
                    NavigationButton.view
                        (NavigationButton.default
                            |> NavigationButton.active active
                            |> NavigationButton.reversed reverseColors
                        )
                        label


view : String -> Config msg -> Html msg
view title (Config config) =
    let
        subtitleView =
            case config.subtitle of
                Just subtileString ->
                    div [ class .subtitle, attribute "data-automation-id" "TitleBlock__Subtitle" ] [ text subtileString ]

                Nothing ->
                    text ""

        navigationButtonsView =
            case config.navigationButtons of
                Just buttons ->
                    div [ class .navButtonsContainer ] (List.map (navigationButtonView config.reversed) buttons)

                Nothing ->
                    text ""

        actionsListProp =
            case config.actionsList of
                Just actions ->
                    actions

                Nothing ->
                    [ text "" ]

        breadcrumbView =
            case config.breadcrumb of
                Just crumb ->
                    breadCrumbView crumb (Config config)

                Nothing ->
                    text ""

        titleblockClassList =
            styles.classList
                [ ( .reverseColorLapis, config.reverseColor == Just Lapis )
                , ( .reverseColorOcean, config.reverseColor == Just Ocean )
                , ( .reverseColorPeach, config.reverseColor == Just Peach )
                , ( .reverseColorSeedling, config.reverseColor == Just Seedling )
                , ( .reverseColorWisteria, config.reverseColor == Just Wisteria )
                , ( .reverseColorYuzu, config.reverseColor == Just Yuzu )
                , ( .reverseColorTransparent, config.reverseColor == Just Transparent )
                , ( .titleBlockContainer, True )
                , ( .reversed, config.reversed )
                ]
    in
    div [ titleblockClassList ]
        [ div [ class .titleBlock, attribute "data-automation-id" "TitleBlock__TitleBlock" ]
            [ div [ class .titleBlockInner ]
                [ breadcrumbView
                , div [ class .leftContent ]
                    [ div [ class .titleContainer ]
                        [ div [ class .textContainer ]
                            [ div [ class .title, attribute "data-automation-id" "TitleBlock__Heading" ] [ text title ]
                            , subtitleView
                            ]
                        ]
                    , div [ styles.classList [ ( .navContainer, True ), ( .nonMobileNav, True ) ] ] [ navigationButtonsView ]
                    ]
                , div [ class .actionsContainer, attribute "data-automation-id" "title-block--actions" ] actionsListProp
                ]
            ]
        , div [ styles.classList [ ( .navContainer, True ), ( .mobileNav, True ) ] ] [ navigationButtonsView ]
        ]


class =
    styles.class


styles =
    css "@kaizen/draft-title-block/KaizenDraft/TitleBlock/TitleBlock.scss"
        { breadcrumb = "breadcrumb"
        , circle = "circle"
        , breadcrumbText = "breadcrumbText"
        , titleBlockContainer = "titleBlockContainer"
        , titleBlock = "titleBlock"
        , titleBlockInner = "titleBlockInner"
        , titleContainer = "titleContainer"
        , textContainer = "textContainer"
        , actionsContainer = "actionsContainer"
        , title = "title"
        , subtitle = "subtitle"
        , leftContent = "leftContent"
        , reversed = "reversed"
        , reverseColorLapis = "reverseColorLapis"
        , reverseColorOcean = "reverseColorOcean"
        , reverseColorPeach = "reverseColorPeach"
        , reverseColorSeedling = "reverseColorSeedling"
        , reverseColorWisteria = "reverseColorWisteria"
        , reverseColorYuzu = "reverseColorYuzu"
        , reverseColorTransparent = "reverseColorTransparent"
        , navContainer = "navContainer"
        , nonMobileNav = "nonMobileNav"
        , mobileNav = "mobileNav"
        , navButtonsContainer = "navButtonsContainer"
        }

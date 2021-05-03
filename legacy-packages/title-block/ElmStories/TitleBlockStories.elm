module ElmStories.TitleBlockStories exposing (main)

import ElmStorybook exposing (statelessStoryOf, storybook)
import Heading.Heading as Heading exposing (AllowedColor(..), TypeVariant(..), view)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import KaizenDraft.TitleBlock.TitleBlock as TitleBlock
import KaizenDraft.Button.Button as Button exposing (..)

navigationButton : List (TitleBlock.NavButton msg)
navigationButton = [(TitleBlock.NavBtn "Dashboard" Nothing False)
    , (TitleBlock.NavBtn "Tasks" Nothing False)]

navigationActionsPrimary : List (Html msg)
navigationActionsPrimary = [ (Button.view Button.primary "Primary action") ]

navigationActionsSecondary : List (Html msg)
navigationActionsSecondary = [ (Button.view Button.secondary "Action 1")
    , (Button.view Button.secondary "Action 2") ]

navigationBreadcrumb : TitleBlock.Breadcrumb
navigationBreadcrumb = {label="Back to reports", link="Home"}
main =
    storybook
        [ statelessStoryOf "Admin, with breadcrumb" <|
            TitleBlock.view "Home"
                (TitleBlock.default
                    |> TitleBlock.actionsList navigationActionsSecondary
                    |> TitleBlock.reversed False
                    |> TitleBlock.breadcrumb navigationBreadcrumb
                )
        , statelessStoryOf "Admin, with navigation buttons" <|
            TitleBlock.view "Home"
                (TitleBlock.default
                    |> TitleBlock.navigationButtons navigationButton
                    |> TitleBlock.actionsList navigationActionsSecondary
                    |> TitleBlock.reversed False
                )
        , statelessStoryOf "Reversed" <|
            TitleBlock.view "Home"
                (TitleBlock.default
                    |> TitleBlock.navigationButtons navigationButton
                    |> TitleBlock.actionsList navigationActionsPrimary
                    |> TitleBlock.reversed True
                    |> TitleBlock.breadcrumb navigationBreadcrumb
                    |> TitleBlock.reverseColor TitleBlock.Wisteria
                )]

module ElmStories.SelectStories exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import KaizenDraft.Select.Select as Select


type alias Item =
    String


type alias SelectModel =
    { selectState : Select.State
    , selectedMembers : List Item
    , selectedMember : Maybe Item
    , members : List Item
    }


type SelectMsg
    = SelectMsg (Select.Msg Item)


model : SelectModel
model =
    { selectState = Select.initState |> Select.usePorts True
    , selectedMembers = []
    , selectedMember = Nothing
    , members = [ "Mindy", "Jaime", "Rafa", "Elaine", "Julio", "Priyanka", "Prince", "Charith", "Nick", "AVeryLongNameWithoutAnySpacesAtall", "A very very very very very very very very very very long name with spaces inside it" ]
    }


update : SelectMsg -> SelectModel -> ( SelectModel, Cmd SelectMsg )
update msg selectModel =
    case msg of
        SelectMsg selectMsg ->
            let
                ( action, selectState, selectCmd ) =
                    Select.update selectMsg selectModel.selectState

                updatedModel =
                    case action of
                        Select.Select i ->
                            { selectModel | selectedMember = Just i, selectedMembers = selectModel.selectedMembers ++ [ i ] }

                        Select.Deselect i ->
                            { selectModel | selectedMembers = List.filter (\item -> item /= i) selectModel.selectedMembers }

                        Select.DeselectSingleSelectItem ->
                            { selectModel | selectedMember = Nothing }

                        _ ->
                            selectModel
            in
            ( { updatedModel | selectState = selectState }, Cmd.map SelectMsg selectCmd )


main =
    let
        buildMenuItem i =
            { item = i, label = i, menuItemType = Select.Default }

        buildSelected m =
            case m.selectedMember of
                Just member ->
                    Just { item = member, label = member, menuItemType = Select.Default }

                Nothing ->
                    Nothing

        config =
            { update = update
            , init = ( model, Cmd.none )
            , subscriptions = \_ -> Sub.none
            }
    in
    storybook
        [ storyOf "Single (Kaizen Site Demo)" config <|
            \m ->
                Html.map SelectMsg <|
                    div [ style "width" "300px", style "margin-top" "12px" ]
                        [ Select.view
                            (Select.single (buildSelected m)
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItem m.members)
                                |> Select.searchable False
                                |> Select.placeholder ( "Placeholder", Select.Bold )
                            )
                            (Select.selectIdentifier "Single Select")
                        ]
        , storyOf "Single Searchable" config <|
            \m ->
                Html.map SelectMsg <|
                    div [ style "width" "300px", style "margin-top" "12px" ]
                        [ Select.view
                            (Select.single (buildSelected m)
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItem m.members)
                                |> Select.searchable True
                                |> Select.placeholder ( "Placeholder", Select.Bold )
                            )
                            (Select.selectIdentifier "Single Searchable Select")
                        ]
        , storyOf "Multi-Select Searchable" config <|
            \m ->
                Html.map SelectMsg <|
                    div [ style "width" "500px", style "margin-top" "12px" ]
                        [ Select.view
                            (Select.multi { truncationWidth = Just 300, allowTextWrapping = False } (List.map buildMenuItem m.selectedMembers)
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItem m.members)
                                |> Select.searchable True
                                |> Select.placeholder ( "Placeholder", Select.Bold )
                            )
                            (Select.selectIdentifier "Multi Select")
                        ]
        , storyOf "Single Clearable" config <|
            \m ->
                Html.map SelectMsg <|
                    div [ style "width" "300px", style "margin-top" "12px" ]
                        [ Select.view
                            (Select.single (buildSelected m)
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItem m.members)
                                |> Select.searchable True
                                |> Select.clearable True
                                |> Select.placeholder ( "Placeholder", Select.Bold )
                            )
                            (Select.selectIdentifier "Single Clearable Select")
                        ]
        , storyOf "Single Disabled" config <|
            \m ->
                Html.map SelectMsg <|
                    div [ style "width" "300px", style "margin-top" "12px" ]
                        [ Select.view
                            (Select.single (Just <| buildMenuItem "Jaime")
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItem m.members)
                                |> Select.searchable True
                                |> Select.clearable True
                                |> Select.placeholder ( "Placeholder", Select.Bold )
                                |> Select.disabled True
                            )
                            (Select.selectIdentifier "Single Clearable Select")
                        ]
        , storyOf "Single, no placeholder (test case)" config <|
            \m ->
                Html.map SelectMsg <|
                    div [ style "width" "300px", style "margin-top" "12px" ]
                        [ Select.view
                            (Select.single (buildSelected m)
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItem m.members)
                            )
                            (Select.selectIdentifier "single-no-placeholder")
                        ]
        , storyOf
            "Single Clearable, controlHasUnconstrainedHeight"
            (let
                thisInitialModel =
                    { model | selectedMember = Just "A very very very very very very very very very very long name with spaces inside it" }
             in
             { update = update
             , init = ( thisInitialModel, Cmd.none )
             , subscriptions = \_ -> Sub.none
             }
            )
          <|
            \m ->
                Html.map SelectMsg <|
                    div [ style "width" "300px", style "margin-top" "12px" ]
                        [ Select.view
                            (Select.single (buildSelected m)
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItem m.members)
                                |> Select.clearable True
                                |> Select.controlHasUnconstrainedHeight True
                            )
                            (Select.selectIdentifier "single-control-has-unconstrained-height")
                        ]
        ]

module Main exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import Kaizen.Select.Select as Select


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
    , members = [ "Mindy", "Jaime", "Rafa", "Elaine", "Julio", "Priyanka", "Prince", "Charith", "Nick" ]
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

                        _ ->
                            selectModel
            in
            ( { updatedModel | selectState = selectState }, Cmd.map SelectMsg selectCmd )


main =
    let
        buildMenuItems i =
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
                                |> Select.menuItems (List.map buildMenuItems m.members)
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
                                |> Select.menuItems (List.map buildMenuItems m.members)
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
                            (Select.multi { truncationWidth = Just 300 } (List.map buildMenuItems m.selectedMembers)
                                |> Select.state m.selectState
                                |> Select.menuItems (List.map buildMenuItems m.members)
                                |> Select.searchable True
                                |> Select.placeholder ( "Placeholder", Select.Bold )
                            )
                            (Select.selectIdentifier "Multi Select")
                        ]
        ]

module ElmStories.SelectFieldStories exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import KaizenDraft.Form.SelectField.SelectField as SelectField
import KaizenDraft.Select.Select as Select


type alias Item =
    String


type alias State =
    { selectState : Select.State
    , selectedItems : List Item
    , selectedItem : Maybe Item
    , items : List Item
    }


type Msg
    = SelectMsg (Select.Msg Item)


init : ( State, Cmd msg )
init =
    ( { selectState = Select.initState |> Select.usePorts True
      , selectedItems = []
      , selectedItem = Nothing
      , items = [ "Mindy", "Jaime", "Rafa", "Elaine", "Julio", "Priyanka", "Prince", "Charith", "Nick" ]
      }
    , Cmd.none
    )


update : Msg -> State -> ( State, Cmd Msg )
update msg selectModel =
    case msg of
        SelectMsg selectMsg ->
            let
                ( action, selectState, selectCmd ) =
                    Select.update selectMsg selectModel.selectState

                updatedModel =
                    case action of
                        Select.Select i ->
                            { selectModel | selectedItem = Just i, selectedItems = selectModel.selectedItems ++ [ i ] }

                        Select.Deselect i ->
                            { selectModel | selectedItems = List.filter (\item -> item /= i) selectModel.selectedItems }

                        _ ->
                            selectModel
            in
            ( { updatedModel | selectState = selectState }, Cmd.map SelectMsg selectCmd )


main =
    let
        buildMenuItem item =
            { item = item, label = item, menuItemType = Select.Default }

        buildSelected state =
            (case state.selectedItem of
                Just item ->
                    Just (buildMenuItem item)

                Nothing ->
                    Nothing
            )
                |> Debug.log "selected"

        storyConfig =
            { update = update
            , init = init
            , subscriptions = \_ -> Sub.none
            }
    in
    storybook
        [ storyOf "Single" storyConfig <|
            \state ->
                let
                    isError =
                        state.selectedItem == Nothing
                in
                div [ style "width" "300px", style "margin-top" "12px" ]
                    [ SelectField.view
                        (SelectField.single
                            { maybeSelectedItem = buildSelected state
                            , toMsg = SelectMsg
                            , id = "single-select-demo"
                            }
                            |> SelectField.state state.selectState
                            |> SelectField.menuItems (List.map buildMenuItem state.items)
                            |> SelectField.searchable True
                            |> SelectField.placeholder ( "Placeholder", Select.Bold )
                            |> SelectField.description [ Html.text "A description goes here" ]
                            |> SelectField.labelHtml [ Html.text "Label" ]
                            |> SelectField.status
                                (if isError then
                                    SelectField.Error

                                 else
                                    SelectField.Default
                                )
                            |> SelectField.validationMessage
                                (if isError then
                                    Just "Please select an option"

                                 else
                                    Nothing
                                )
                        )
                    ]
        , storyOf "Multi-Select" storyConfig <|
            \state ->
                div [ style "width" "500px", style "margin-top" "12px" ]
                    [ SelectField.view
                        (SelectField.multi
                            { truncationWidth = Just 300
                            , selectedItems = List.map buildMenuItem state.selectedItems
                            , toMsg = SelectMsg
                            , id = "multi-select-searchable-demo"
                            }
                            |> SelectField.state state.selectState
                            |> SelectField.menuItems (List.map buildMenuItem state.items)
                            |> SelectField.searchable True
                            |> SelectField.placeholder ( "Placeholder", Select.Bold )
                            |> SelectField.description [ Html.text "A description goes here" ]
                            |> SelectField.labelHtml [ Html.text "Label" ]
                        )
                    ]
        ]

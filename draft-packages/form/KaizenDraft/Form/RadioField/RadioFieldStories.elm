module KaizenDraft.Form.RadioField.RadioFieldStories exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html exposing (a, div, text)
import Html.Attributes exposing (dir, href, style)
import KaizenDraft.Form.RadioField.RadioField as RadioField


type Msg
    = OnRadioSelect Bool


type alias Model =
    { interactiveRadioSelected : RadioField.SelectedStatus }


model : Model
model =
    { interactiveRadioSelected = RadioField.Unselected
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg m =
    case msg of
        OnRadioSelect isSelected ->
            let
                resolveSelected =
                    if isSelected then
                        RadioField.Selected

                    else
                        RadioField.Unselected
            in
            ( { m | interactiveRadioSelected = resolveSelected }, Cmd.none )


main =
    let
        config =
            { update = update
            , init = ( model, Cmd.none )
            , subscriptions = \_ -> Sub.none
            }
    in
    storybook
        [ storyOf "Interactive" config <|
            \m ->
                div [ style "width" "100%", style "padding-top" "24px" ]
                    [ RadioField.view
                        (RadioField.default
                            |> RadioField.selectedStatus m.interactiveRadioSelected
                            |> RadioField.onChange OnRadioSelect
                            |> RadioField.labelText (RadioField.LabelHtml [ text "This is a label with a ", a [ href "http://google.com" ] [ text "link" ] ])
                            |> RadioField.automationId "radio-1"
                            |> RadioField.name "radio"
                        )
                        (RadioField.radioId "radio-1")
                    ]
        , storyOf "Unselected disabled" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ RadioField.view
                        (RadioField.default
                            |> RadioField.selectedStatus RadioField.Unselected
                            |> RadioField.labelText (RadioField.LabelString "Label")
                            |> RadioField.automationId "radio-1"
                            |> RadioField.name "radio"
                            |> RadioField.disabled True
                            |> RadioField.value "radio-1"
                        )
                        (RadioField.radioId "radio-1")
                    ]
        , storyOf "Unselected default" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ RadioField.view
                        (RadioField.default
                            |> RadioField.selectedStatus RadioField.Unselected
                            |> RadioField.labelText (RadioField.LabelString "Label")
                            |> RadioField.automationId "radio-1"
                            |> RadioField.name "radio"
                            |> RadioField.disabled False
                            |> RadioField.value "radio-1"
                        )
                        (RadioField.radioId "radio-1")
                    ]
        , storyOf "Selected default" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ RadioField.view
                        (RadioField.default
                            |> RadioField.selectedStatus RadioField.Selected
                            |> RadioField.labelText (RadioField.LabelString "Label")
                            |> RadioField.automationId "radio-1"
                            |> RadioField.name "radio"
                            |> RadioField.disabled False
                            |> RadioField.value "radio-1"
                        )
                        (RadioField.radioId "radio-1")
                    ]
        , storyOf "Selected disabled" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ RadioField.view
                        (RadioField.default
                            |> RadioField.selectedStatus RadioField.Selected
                            |> RadioField.labelText (RadioField.LabelString "Label")
                            |> RadioField.automationId "radio-1"
                            |> RadioField.name "radio"
                            |> RadioField.disabled True
                            |> RadioField.value "radio-1"
                        )
                        (RadioField.radioId "radio-1")
                    ]
        , storyOf "RTL" config <|
            \_ ->
                div [ dir "rtl", style "width" "100%" ]
                    [ RadioField.view
                        (RadioField.default
                            |> RadioField.selectedStatus RadioField.Selected
                            |> RadioField.labelText (RadioField.LabelString "Label")
                            |> RadioField.automationId "radio-1"
                            |> RadioField.name "radio"
                            |> RadioField.disabled True
                            |> RadioField.value "radio-1"
                        )
                        (RadioField.radioId "radio-1")
                    ]
        ]

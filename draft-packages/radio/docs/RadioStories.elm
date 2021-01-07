module Main exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html exposing (a, div, text)
import Html.Attributes exposing (dir, href, style)
import KaizenDraft.Radio.Radio as Radio


type Msg
    = OnRadioSelect Bool


type alias Model =
    { interactiveRadioSelected : Radio.SelectedStatus }


model : Model
model =
    { interactiveRadioSelected = Radio.Unselected
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg m =
    case msg of
        OnRadioSelect isSelected ->
            let
                resolveSelected =
                    if isSelected then
                        Radio.Selected

                    else
                        Radio.Unselected
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
                    [ Radio.view
                        (Radio.default
                            |> Radio.selectedStatus m.interactiveRadioSelected
                            |> Radio.onChange OnRadioSelect
                            |> Radio.labelText (Radio.LabelHtml [ text "This is a label with a ", a [ href "http://google.com" ] [ text "link" ] ])
                            |> Radio.automationId "radio-1"
                            |> Radio.name "radio"
                        )
                        (Radio.radioId "radio-1")
                    ]
        , storyOf "Unselected disabled" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ Radio.view
                        (Radio.default
                            |> Radio.selectedStatus Radio.Unselected
                            |> Radio.labelText (Radio.LabelString "Label")
                            |> Radio.automationId "radio-1"
                            |> Radio.name "radio"
                            |> Radio.disabled True
                            |> Radio.value "radio-1"
                        )
                        (Radio.radioId "radio-1")
                    ]
        , storyOf "Unselected default" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ Radio.view
                        (Radio.default
                            |> Radio.selectedStatus Radio.Unselected
                            |> Radio.labelText (Radio.LabelString "Label")
                            |> Radio.automationId "radio-1"
                            |> Radio.name "radio"
                            |> Radio.disabled False
                            |> Radio.value "radio-1"
                        )
                        (Radio.radioId "radio-1")
                    ]
        , storyOf "Selected default" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ Radio.view
                        (Radio.default
                            |> Radio.selectedStatus Radio.Selected
                            |> Radio.labelText (Radio.LabelString "Label")
                            |> Radio.automationId "radio-1"
                            |> Radio.name "radio"
                            |> Radio.disabled False
                            |> Radio.value "radio-1"
                        )
                        (Radio.radioId "radio-1")
                    ]
        , storyOf "Selected disabled" config <|
            \_ ->
                div [ style "width" "100%" ]
                    [ Radio.view
                        (Radio.default
                            |> Radio.selectedStatus Radio.Selected
                            |> Radio.labelText (Radio.LabelString "Label")
                            |> Radio.automationId "radio-1"
                            |> Radio.name "radio"
                            |> Radio.disabled True
                            |> Radio.value "radio-1"
                        )
                        (Radio.radioId "radio-1")
                    ]
        , storyOf "RTL" config <|
            \_ ->
                div [ dir "rtl", style "width" "100%" ]
                    [ Radio.view
                        (Radio.default
                            |> Radio.selectedStatus Radio.Selected
                            |> Radio.labelText (Radio.LabelString "Label")
                            |> Radio.automationId "radio-1"
                            |> Radio.name "radio"
                            |> Radio.disabled True
                            |> Radio.value "radio-1"
                        )
                        (Radio.radioId "radio-1")
                    ]
        ]

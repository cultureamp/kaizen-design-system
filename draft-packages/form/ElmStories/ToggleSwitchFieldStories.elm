module ElmStories.ToggleSwitchFieldStories exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html exposing (..)
import KaizenDraft.Form.Primitives.Label.Label as Label
import KaizenDraft.Form.ToggleSwitchField.ToggleSwitchField as ToggleSwitchField


type alias ToggleSwitchFieldModel =
    { toggledStatus : ToggleSwitchField.ToggledStatus }


type ToggleSwitchFieldMsg
    = ToggleSwitchMsg Bool


model : ToggleSwitchFieldModel
model =
    { toggledStatus = ToggleSwitchField.On }


update : ToggleSwitchFieldMsg -> ToggleSwitchFieldModel -> ( ToggleSwitchFieldModel, Cmd ToggleSwitchFieldMsg )
update msg toggleSwitchFieldModel =
    case msg of
        ToggleSwitchMsg toggleStatus ->
            let
                newToggleStatus =
                    case toggleStatus of
                        True ->
                            ToggleSwitchField.Off

                        False ->
                            ToggleSwitchField.On
            in
            ( { toggleSwitchFieldModel | toggledStatus = newToggleStatus }, Cmd.none )


main =
    let
        config =
            { update = update
            , init = ( model, Cmd.none )
            , subscriptions = \_ -> Sub.none
            }
    in
    storybook
        [ storyOf "Default theme" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.id "hello"
                        |> ToggleSwitchField.toggledStatus m.toggledStatus
                        |> ToggleSwitchField.theme ToggleSwitchField.Default
                        |> ToggleSwitchField.onToggle
                            (\val -> ToggleSwitchMsg val)
                    )
        , storyOf "Freemium theme" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.id "hello"
                        |> ToggleSwitchField.toggledStatus m.toggledStatus
                        |> ToggleSwitchField.theme ToggleSwitchField.Freemium
                        |> ToggleSwitchField.onToggle
                            (\val -> ToggleSwitchMsg val)
                    )
        , storyOf "Disabled Off" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.toggledStatus ToggleSwitchField.Off
                        |> ToggleSwitchField.theme ToggleSwitchField.Default
                        |> ToggleSwitchField.disabled True
                    )
        , storyOf "Disabled On" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.toggledStatus ToggleSwitchField.On
                        |> ToggleSwitchField.theme ToggleSwitchField.Default
                        |> ToggleSwitchField.disabled True
                    )
        , storyOf "Label at end" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.toggledStatus m.toggledStatus
                        |> ToggleSwitchField.labelPosition Label.End
                        |> ToggleSwitchField.onToggle
                            (\val -> ToggleSwitchMsg val)
                    )
        ]

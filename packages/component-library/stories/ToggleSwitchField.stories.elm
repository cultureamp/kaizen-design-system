module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storyOf, storybook)
import Html exposing (..)
import Kaizen.Form.ToggleSwitchField.ToggleSwitchField as ToggleSwitchField


type alias ToggleSwitchFieldModel =
    { toggledStatus : ToggleSwitchField.ToggledStatus }


type ToggleSwitchFieldMsg
    = ToggleSwitchMsg String


model : ToggleSwitchFieldModel
model =
    { toggledStatus = ToggleSwitchField.On }


update : ToggleSwitchFieldMsg -> ToggleSwitchFieldModel -> ( ToggleSwitchFieldModel, Cmd ToggleSwitchFieldMsg )
update msg toggleSwitchFieldModel =
    case msg of
        ToggleSwitchMsg toggleStatus ->
            let
                _ =
                    Debug.log "ALALA" toggleStatus

                newToggleStatus =
                    case toggleStatus of
                        "on" ->
                            ToggleSwitchField.Off

                        "off" ->
                            ToggleSwitchField.On

                        _ ->
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
        [ storyOf "hello im an elm toggle story" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.toggledStatus m.toggledStatus
                        |> ToggleSwitchField.theme ToggleSwitchField.Freemium
                        |> ToggleSwitchField.onToggle (\val -> ToggleSwitchMsg val)
                    )
        ]

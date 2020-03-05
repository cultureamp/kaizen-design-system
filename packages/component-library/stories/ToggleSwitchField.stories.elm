module Main exposing (main)

import ElmStorybook exposing (statelessStoryOf, storyOf, storybook)
import Html exposing (..)
import Kaizen.Form.ToggleSwitchField.ToggleSwitchField as ToggleSwitchField


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
                _ =
                    Debug.log "ToggleSwitchMsg toggleStatus:" toggleStatus

                newToggleStatus =
                    case toggleStatus of
                        True ->
                            let
                                _ =
                                    Debug.log "on path" toggleStatus
                            in
                            ToggleSwitchField.Off

                        False ->
                            let
                                _ =
                                    Debug.log "off path" toggleStatus
                            in
                            ToggleSwitchField.On

                ola =
                    Debug.log "NEW TOGGLE STATUS" newToggleStatus
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
                let
                    _ =
                        Debug.log "storybook m toggleStatus" m.toggledStatus
                in
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.id "hello"
                        |> ToggleSwitchField.toggledStatus m.toggledStatus
                        |> ToggleSwitchField.theme ToggleSwitchField.Default
                        |> ToggleSwitchField.onToggle
                            (\val ->
                                let
                                    ala =
                                        Debug.log "ToggleSwitchMsg val" val
                                in
                                ToggleSwitchMsg val
                            )
                    )
        , storyOf "Disabled Off" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.toggledStatus ToggleSwitchField.Off
                        |> ToggleSwitchField.theme ToggleSwitchField.Freemium
                        |> ToggleSwitchField.disabled True
                    )
        , storyOf "Disabled On" config <|
            \m ->
                ToggleSwitchField.view
                    (ToggleSwitchField.default
                        |> ToggleSwitchField.labelText "Label"
                        |> ToggleSwitchField.toggledStatus ToggleSwitchField.On
                        |> ToggleSwitchField.theme ToggleSwitchField.Freemium
                        |> ToggleSwitchField.disabled True
                    )
        ]

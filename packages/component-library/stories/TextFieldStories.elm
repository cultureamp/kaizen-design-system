module Main exposing (TextFieldModel)

import Browser.Dom exposing (blur)
import ElmStorybook exposing (storyOf, storybook)
import Kaizen.Form.TextField.TextField as TextField
import Task


type alias TextFieldModel =
    String


type TextFieldMsg
    = TextFieldMsg String
    | TextFieldEnter
    | DoNothing


model : TextFieldModel
model =
    ""


update : TextFieldMsg -> TextFieldModel -> ( TextFieldModel, Cmd TextFieldMsg )
update msg textFieldModel =
    case msg of
        TextFieldMsg value ->
            ( value, Cmd.none )

        TextFieldEnter ->
            ( textFieldModel, Task.attempt (\_ -> DoNothing) (blur "the-id-field-input") )

        DoNothing ->
            ( textFieldModel, Cmd.none )


main =
    let
        config =
            { update = update
            , init = ( model, Cmd.none )
            , subscriptions = \_ -> Sub.none
            }
    in
    storybook
        [ storyOf "Default" config <|
            \m ->
                TextField.view
                    (TextField.default
                        |> TextField.id "the-id"
                        |> TextField.labelText "Default TextField"
                        |> TextField.controlled False
                        |> TextField.autoComplete False
                        |> TextField.onBlurWithValue TextFieldMsg
                        |> TextField.placeholder "Placeholder"
                        |> TextField.onEnter TextFieldEnter
                    )
        ]

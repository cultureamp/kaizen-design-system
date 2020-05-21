module Main exposing (TextFieldModel)

import Browser.Dom exposing (blur)
import ElmStorybook exposing (storyOf, storybook)
import Html.Extra exposing (static)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import KaizenDraft.Form.TextField.TextField as TextField
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

        icon =
            [ Icon.view Icon.presentation
                (svgAsset "@kaizen/component-library/icons/date-end.icon.svg")
                |> static
            ]
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
        , storyOf "Default /w icon" config <|
            \m ->
                TextField.view
                    (TextField.default
                        |> TextField.id "the-id"
                        |> TextField.labelText "Default TextField with icon"
                        |> TextField.controlled False
                        |> TextField.autoComplete False
                        |> TextField.onBlurWithValue TextFieldMsg
                        |> TextField.placeholder "Placeholder"
                        |> TextField.onEnter TextFieldEnter
                        |> TextField.icon icon
                    )
        ]

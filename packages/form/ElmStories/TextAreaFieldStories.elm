module ElmStories.TextAreaFieldStories exposing (TextFieldModel)

import Browser.Dom exposing (blur)
import CssModules exposing (css)
import ElmStorybook exposing (storyOf, storybook)
import Html exposing (Html, div)
import Html.Attributes exposing (style)
import KaizenDraft.Form.TextAreaField.TextAreaField as TextAreaField
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


storyContainer : List (Html msg) -> Bool -> Html msg
storyContainer children reversed =
    div [ style "width" "100vw", style "height" "100vh", styles.classList [ ( .reversedBackground, reversed ) ] ]
        [ div [ style "padding" "24px" ]
            children
        ]


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
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                            |> TextAreaField.description "Your reply will only be seen by you"
                        )
                    ]
                    False
        , storyOf "Default, Controlled, Prefilled Value" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.controlled True
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.textAreaValue "A prefilled value in controlled mode"
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                        )
                    ]
                    False
        , storyOf "Default, Uncontrolled, Prefilled Value" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.textAreaValue "A prefilled value in uncontrolled mode"
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                        )
                    ]
                    False
        , storyOf "Default, Description" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.controlled True
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                            |> TextAreaField.description "Your reply will only be seen by you"
                        )
                    ]
                    False
        , storyOf "Default, Error" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.placeholder "Write your reply..."
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                            |> TextAreaField.validationMessage "Enter a reply"
                            |> TextAreaField.status TextAreaField.Error
                        )
                    ]
                    False
        , storyOf "Default, Error & Description" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.placeholder "Write your reply..."
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                            |> TextAreaField.validationMessage "Enter a reply"
                            |> TextAreaField.status TextAreaField.Error
                            |> TextAreaField.description "Your reply will only be seen by you"
                        )
                    ]
                    False
        , storyOf "Default, Description" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.placeholder "Write your reply..."
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                            |> TextAreaField.description "Your reply will only be seen by you"
                        )
                    ]
                    False
        , storyOf "Default, Reversed" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.placeholder "Write your reply..."
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.rows 4
                            |> TextAreaField.reversed True
                        )
                    ]
                    True
        , storyOf "Default, Reversed, Error" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.placeholder "Write your reply..."
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.validationMessage "Enter a reply"
                            |> TextAreaField.status TextAreaField.Error
                            |> TextAreaField.rows 4
                            |> TextAreaField.reversed True
                        )
                    ]
                    True
        , storyOf "Default, Reversed, Error & Description" config <|
            \m ->
                storyContainer
                    [ TextAreaField.view
                        (TextAreaField.default
                            |> TextAreaField.id "the-id"
                            |> TextAreaField.labelText "Your reply"
                            |> TextAreaField.placeholder "Write your reply..."
                            |> TextAreaField.controlled False
                            |> TextAreaField.autoComplete False
                            |> TextAreaField.onBlurWithValue TextFieldMsg
                            |> TextAreaField.onEnter TextFieldEnter
                            |> TextAreaField.validationMessage "Enter a reply"
                            |> TextAreaField.status TextAreaField.Error
                            |> TextAreaField.rows 4
                            |> TextAreaField.reversed True
                            |> TextAreaField.description "Your reply will only be seen by you"
                        )
                    ]
                    True
        ]


styles =
    css "../docs/ElmTextAreaField.stories.scss"
        { reversedBackground = "reversedBackground"
        }

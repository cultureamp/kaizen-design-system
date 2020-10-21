module Main exposing (TextFieldModel)

import Browser.Dom exposing (blur)
import ElmStorybook exposing (storyOf, storybook)
import Html exposing (a, div, span, text)
import Html.Attributes exposing (href, style, target)
import Html.Extra exposing (static)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import KaizenDraft.Form.TextField.TextField as TextField
import KaizenDraft.Tooltip.Tooltip as Tooltip
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
        , storyOf "Default, Controlled, Prefilled Value" config <|
            \m ->
                TextField.view
                    (TextField.default
                        |> TextField.id "the-id"
                        |> TextField.labelText "Default TextField"
                        |> TextField.controlled True
                        |> TextField.autoComplete False
                        |> TextField.onBlurWithValue TextFieldMsg
                        |> TextField.inputValue "A prefilled value in controlled mode"
                        |> TextField.onEnter TextFieldEnter
                    )
        , storyOf "Default, Uncontrolled, Prefilled Value" config <|
            \m ->
                TextField.view
                    (TextField.default
                        |> TextField.id "the-id"
                        |> TextField.labelText "Default TextField"
                        |> TextField.controlled False
                        |> TextField.autoComplete False
                        |> TextField.onBlurWithValue TextFieldMsg
                        |> TextField.inputValue "A prefilled value in controlled mode"
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
        , storyOf "Default /w string description" config <|
            \m ->
                maxWidthContainer <|
                    TextField.view
                        (TextField.default
                            |> TextField.labelText "Default TextField with string description"
                            |> TextField.description "Helper text placed below the field can include further instructions or information on how to fill out the text field."
                        )
        , storyOf "Default /w html description" config <|
            \m ->
                maxWidthContainer <|
                    TextField.view
                        (TextField.default
                            |> TextField.labelText "Default TextField with HTML description"
                            |> TextField.descriptionHtml
                                [ text "The description may contain a link to further details - we recommended opening the link in a new tab with an "
                                , span [ style "position" "relative" ]
                                    [ Tooltip.view
                                        (Tooltip.default "opens in a new tab"
                                            |> Tooltip.position Tooltip.Above
                                        )
                                        (a [ href "https://cultureamp.design/guidelines/link-vs-button/#opens-in-new-tab-tooltip", target "_blank", style "position" "relative" ]
                                            [ text "\"opens in a new tab\" tooltip" ]
                                        )
                                    ]
                                ]
                        )
        ]


maxWidthContainer content =
    span [ style "max-width" "30rem" ] [ content ]

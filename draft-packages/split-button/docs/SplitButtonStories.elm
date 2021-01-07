module Main exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html
import KaizenDraft.SplitButton.SplitButton as SplitButton exposing (SplitButton, menuItems)


type alias Model =
    { splitButton : SplitButton }


type Msg
    = Foo
    | Bar
    | SplitButtonMsg (SplitButton.Msg Msg)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Foo ->
            let
                ( newSplitButton, splitButtonCmds ) =
                    SplitButton.update (SplitButton.MenuItemClicked Foo) model.splitButton
            in
            ( { model | splitButton = newSplitButton }, splitButtonCmds |> Cmd.map SplitButtonMsg )

        Bar ->
            let
                ( newSplitButton, splitButtonCmds ) =
                    SplitButton.update (SplitButton.MenuItemClicked Foo) model.splitButton
            in
            ( { model | splitButton = newSplitButton }, splitButtonCmds |> Cmd.map SplitButtonMsg )

        SplitButtonMsg subMsg ->
            let
                ( newSplitButton, splitButtonCmds ) =
                    SplitButton.update subMsg model.splitButton
            in
            ( { model | splitButton = newSplitButton }, splitButtonCmds |> Cmd.map SplitButtonMsg )


main =
    let
        menuItems_ =
            [ { label = "Foo", action = Foo }
            , { label = "Bar", action = Bar }
            ]

        config =
            { update = update
            , init = ( { splitButton = SplitButton.init }, Cmd.none )
            , subscriptions = \model -> SplitButton.subscriptions model.splitButton |> Sub.map SplitButtonMsg
            }
    in
    storybook
        [ storyOf "Default" config <|
            \model ->
                Html.map SplitButtonMsg <|
                    SplitButton.view
                        (SplitButton.default
                            |> menuItems menuItems_
                        )
                        model.splitButton
                        "Label"
        ]

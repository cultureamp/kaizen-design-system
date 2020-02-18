module Main exposing (main)

import ElmStorybook exposing (storyOf, storybook)
import Html exposing (div, text)
import Html.Attributes exposing (style)
import Kaizen.Modal.Modal as Modal
import Kaizen.Modal.Primitives.ModalBody as ModalBody
import Kaizen.Modal.Primitives.ModalFooter as ModalFooter
import Kaizen.Modal.Primitives.ModalHeader as ModalHeader
import Text.Text as Text


type ModalMsg
    = ModalUpdate Modal.ModalMsg
    | ModalConfirmed
    | ModalDismissed



-- SetModalContext


model : ModalState
model =
    { modalContext = Just (Modal.forceOpen Modal.initialState) }


type alias ModalState =
    { modalContext : Maybe (Modal.ModalState ModalMsg)
    }


update : ModalMsg -> ModalState -> ( ModalState, Cmd ModalMsg )
update msg state =
    case msg of
        ModalUpdate modalMsg ->
            case state.modalContext of
                Just ms ->
                    let
                        ( modalState, modalCmd, modalStatus ) =
                            Modal.update ms modalMsg

                        updatedModalState =
                            case modalStatus of
                                Just Modal.Closed ->
                                    Nothing

                                _ ->
                                    Just modalState
                    in
                    ( { state | modalContext = updatedModalState }, Cmd.map ModalUpdate modalCmd )

                Nothing ->
                    ( state, Cmd.none )

        ModalConfirmed ->
            -- we can do some stuff here when the user clicks confirm, then trigger the modal so it closes.
            case state.modalContext of
                Just ms ->
                    let
                        ( modalState, modalCmd, _ ) =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = Just modalState }, Cmd.map ModalUpdate modalCmd )

                Nothing ->
                    ( state, Cmd.none )

        ModalDismissed ->
            -- we can do some stuff here when the user clicks cancel, then trigger the modal so it closes.
            case state.modalContext of
                Just ms ->
                    let
                        ( modalState, modalCmd, _ ) =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = Just modalState }, Cmd.map ModalUpdate modalCmd )

                Nothing ->
                    ( state, Cmd.none )


subscriptions : ModalState -> Sub ModalMsg
subscriptions { modalContext } =
    case modalContext of
        Just modalState ->
            Sub.map ModalUpdate <| Modal.subscriptions modalState

        Nothing ->
            Sub.none


main =
    let
        config =
            { update = update
            , init = ( model, Cmd.none )
            , subscriptions = subscriptions
            }
    in
    storybook
        [ storyOf "Generic" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.generic
                                    [ ModalHeader.view <| ModalHeader.layout [ div [] [ text "Generic header" ] ]
                                    , ModalBody.view <|
                                        (ModalBody.layout [ div [] [ text "Generic body" ] ]
                                            |> ModalBody.fillVerticalSpace True
                                            |> ModalBody.background ModalBody.Stone
                                        )
                                    , ModalFooter.view <|
                                        (ModalFooter.layout [ div [] [ text "Generic footer" ] ]
                                            |> ModalFooter.fixed True
                                            |> ModalFooter.padded True
                                        )
                                    ]
                                    ( 800, 640 )
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        Nothing ->
                            text ""
                    ]
        , storyOf "Confirmation (Informative)" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.confirmation Modal.Informative
                                    { title = "Informative title"
                                    , bodySubtext =
                                        Just
                                            [ div [ style "text-align" "center" ]
                                                [ Text.view (Text.p |> Text.style Text.Lede |> Text.inline True) [ text "Additional subtext to aid the user can be added here." ] ]
                                            ]
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Just ModalConfirmed
                                    , confirmLabel = "Confirm"
                                    , dismissLabel = "Cancel"
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        Nothing ->
                            text ""
                    ]
        , storyOf "Confirmation (Positive)" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.confirmation Modal.Positive
                                    { title = "Positive title"
                                    , bodySubtext =
                                        Just
                                            [ div [ style "text-align" "center" ]
                                                [ Text.view (Text.p |> Text.style Text.Lede |> Text.inline True) [ text "Additional subtext to aid the user can be added here." ] ]
                                            ]
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Just ModalConfirmed
                                    , confirmLabel = "Confirm"
                                    , dismissLabel = "Cancel"
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        Nothing ->
                            text ""
                    ]
        , storyOf "Confirmation (Negative)" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.confirmation Modal.Negative
                                    { title = "Negative title"
                                    , bodySubtext =
                                        Just
                                            [ div [ style "text-align" "center" ]
                                                [ Text.view (Text.p |> Text.style Text.Lede |> Text.inline True) [ text "Additional subtext to aid the user can be added here." ] ]
                                            ]
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Just ModalConfirmed
                                    , confirmLabel = "Confirm"
                                    , dismissLabel = "Cancel"
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        Nothing ->
                            text ""
                    ]
        ]

module Main exposing (main)

import Button.Button as Button
import ElmStorybook exposing (storyOf, storybook)
import Html exposing (div, text)
import Html.Attributes exposing (style)
import Kaizen.Modal.Modal as Modal
import Kaizen.Modal.Primitives.ModalBody as ModalBody
import Kaizen.Modal.Primitives.ModalFooter as ModalFooter
import Kaizen.Modal.Primitives.ModalHeader as ModalHeader
import Text.Text as Text


type ModalMsg
    = ModalUpdate
    | ModalClosed
    | SetModalContext


model : ModalState
model =
    { modalContext = Nothing }


type alias ModalState =
    { modalContext : Maybe (Modal.ModalState ModalMsg)
    }


update : ModalMsg -> ModalState -> ( ModalState, Cmd ModalMsg )
update msg state =
    case msg of
        SetModalContext ->
            let
                ( modalState, modalCmd ) =
                    Modal.update Modal.initialState ModalUpdate
            in
            ( { state | modalContext = Just modalState }, modalCmd )

        ModalUpdate ->
            case state.modalContext of
                Just ms ->
                    let
                        ( modalState, modalCmd ) =
                            Modal.update (ms |> Modal.withDispatch [ Modal.Closed ModalClosed ]) ModalUpdate
                    in
                    ( { state | modalContext = Just modalState }, modalCmd )

                Nothing ->
                    ( state, Cmd.none )

        ModalClosed ->
            ( { state | modalContext = Nothing }, Cmd.none )


main =
    let
        config =
            { update = update
            , init = ( model, Cmd.none )
            , subscriptions = \_ -> Sub.none
            }
    in
    storybook
        [ storyOf "Generic" config <|
            \m ->
                div [ style "width" "100%" ]
                    [ Button.view (Button.primary |> Button.onClick SetModalContext) "Open Modal"
                    , case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.generic
                                    [ ModalHeader.view <| ModalHeader.layout [ div [] [ text "Generic header" ] ]
                                    , ModalBody.view <| (ModalBody.layout [ div [] [ text "Generic body" ] ] |> ModalBody.fillVerticalSpace True)
                                    , ModalFooter.view <| (ModalFooter.layout [ div [] [ text "Generic footer" ] ] |> ModalFooter.fixed True)
                                    ]
                                    ( 800, 640 )
                                    |> Modal.modalState modalState
                                    |> Modal.onUpdate ModalUpdate
                                )

                        Nothing ->
                            text ""
                    ]
        , storyOf "Confirmation (Informative)" config <|
            \m ->
                div [ style "width" "100%" ]
                    [ Button.view (Button.primary |> Button.onClick SetModalContext) "Open Modal"
                    , case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.confirmation Modal.Informative
                                    { title = "Informative title"
                                    , bodySubtext =
                                        Just
                                            [ div [ style "text-align" "center" ]
                                                [ Text.view (Text.p |> Text.style Text.Lede |> Text.inline True) [ text "Additional subtext to aid the user can be added here." ] ]
                                            ]
                                    }
                                    |> Modal.modalState modalState
                                    |> Modal.onUpdate ModalUpdate
                                )

                        Nothing ->
                            text ""
                    ]
        ]

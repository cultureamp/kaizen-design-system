module Main exposing (main)

import Button.Button as Button
import ElmStorybook exposing (storyOf, storybook)
import Html exposing (div, text)
import Html.Attributes exposing (style)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Kaizen.Form.TextField.TextField as TextField
import Kaizen.Modal.Modal as Modal
import Kaizen.Modal.Primitives.Constants as ModalConstants
import Kaizen.Modal.Primitives.ModalBody as ModalBody
import Kaizen.Modal.Primitives.ModalFooter as ModalFooter
import Kaizen.Modal.Primitives.ModalHeader as ModalHeader
import Text.Text as Text


type ModalMsg
    = ModalUpdate Modal.ModalMsg
    | ModalConfirmed
    | ModalDismissed
    | SetModalContext



-- MODEL


type alias ModalState =
    { modalContext : Maybe (Modal.ModalState ModalMsg)
    , idealWayToSetUpModal : Bool
    }


model : ModalState
model =
    { modalContext = Just (Modal.trigger Modal.initialState)
    , idealWayToSetUpModal = False
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
                        modalState =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = Just modalState }, Cmd.none )

                Nothing ->
                    ( state, Cmd.none )

        ModalDismissed ->
            -- we can do some stuff here when the user clicks cancel, then trigger the modal so it closes.
            case state.modalContext of
                Just ms ->
                    let
                        modalState =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = Just modalState }, Cmd.none )

                Nothing ->
                    ( state, Cmd.none )

        -- Typically modals dont start off open when you load a page. Setting the modal context is the ideal way
        -- to render the modal into view.
        SetModalContext ->
            let
                modalState =
                    Modal.trigger Modal.initialState
            in
            ( { state | idealWayToSetUpModal = True, modalContext = Just modalState }, Cmd.none )


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
        [ storyOf "Confirmation (cautionary)" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.confirmation Modal.Cautionary
                                    { title = "Cautionary title"
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
        , storyOf "Generic" config <|
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
        , storyOf "Confirmation (informative)" config <|
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
        , storyOf "Confirmation (positive)" config <|
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
        , storyOf "Confirmation (negative)" config <|
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
        , storyOf "Confirmation (user action)" config <|
            \m ->
                div []
                    [ Button.view (Button.default |> Button.onClick SetModalContext) "Open Modal"
                    , if m.idealWayToSetUpModal then
                        case m.modalContext of
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

                      else
                        text ""
                    ]
        , storyOf "InputEdit (positive)" config <|
            \m ->
                let
                    textFieldConfigs =
                        [ TextField.default
                            |> TextField.inputType TextField.Email
                            |> TextField.labelText "email"
                            |> TextField.inputValue "mackenzie@example.com"
                            |> TextField.icon [ Html.map never <| Icon.view Icon.presentation (svgAsset "@kaizen/component-library/icons/user.icon.svg") ]
                            |> TextField.id ModalConstants.defaultFocusableId
                        , TextField.default
                            |> TextField.inputType TextField.Password
                            |> TextField.labelText "password"
                            |> TextField.inputValue "123456789"
                            |> TextField.icon [ Html.map never <| Icon.view Icon.presentation (svgAsset "@kaizen/component-library/icons/lock.icon.svg") ]
                        ]
                in
                div []
                    [ case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.inputEdit Modal.InputPositive
                                    { title = "Input-edit modal title"
                                    , textFieldConfigs = textFieldConfigs
                                    , instructiveText =
                                        Just "Instructive text to drive user selection goes here."
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Just ModalConfirmed
                                    , confirmLabel = "Submit"
                                    , dismissLabel = "Cancel"
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        Nothing ->
                            text ""
                    ]
        , storyOf "InputEdit (negative)" config <|
            \m ->
                let
                    textFieldConfigs =
                        [ TextField.default
                            |> TextField.inputType TextField.Email
                            |> TextField.labelText "email"
                            |> TextField.inputValue "mackenzie@example.com"
                            |> TextField.icon [ Html.map never <| Icon.view Icon.presentation (svgAsset "@kaizen/component-library/icons/user.icon.svg") ]
                            |> TextField.id ModalConstants.defaultFocusableId
                        , TextField.default
                            |> TextField.inputType TextField.Password
                            |> TextField.labelText "password"
                            |> TextField.inputValue "123456789"
                            |> TextField.icon [ Html.map never <| Icon.view Icon.presentation (svgAsset "@kaizen/component-library/icons/lock.icon.svg") ]
                        ]
                in
                div []
                    [ case m.modalContext of
                        Just modalState ->
                            Modal.view <|
                                (Modal.inputEdit Modal.InputNegative
                                    { title = "Input-edit modal title"
                                    , textFieldConfigs = textFieldConfigs
                                    , instructiveText =
                                        Just "Instructive text to drive user selection goes here."
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Just ModalConfirmed
                                    , confirmLabel = "Submit"
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

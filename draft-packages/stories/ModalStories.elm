module Main exposing (main)

import Button.Button as Button
import ElmStorybook exposing (storyOf, storybook)
import Html exposing (div, text)
import Html.Attributes exposing (style)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import KaizenDraft.Form.TextField.TextField as TextField
import KaizenDraft.Modal.Modal as Modal
import KaizenDraft.Modal.Primitives.Constants as ModalConstants
import KaizenDraft.Modal.Primitives.ModalAccessibleDescription as ModalAccessibleDescription
import KaizenDraft.Modal.Primitives.ModalBody as ModalBody
import KaizenDraft.Modal.Primitives.ModalFooter as ModalFooter
import KaizenDraft.Modal.Primitives.ModalHeader as ModalHeader
import Text.Text as Text


type ModalMsg
    = ModalUpdate Modal.ModalMsg
    | ModalConfirmed
    | ModalDismissed
    | SetDefaultModalContext
    | SetInputEditModalContext


type ModalContext
    = Default (Modal.ModalState ModalMsg)
    | InputEditModal (Modal.ModalState ModalMsg)
    | NoModal



-- MODEL


type alias ModalState =
    { modalContext : ModalContext
    , idealWayToSetUpModal : Bool
    }


model : ModalState
model =
    { modalContext = Default (Modal.trigger Modal.initialState)
    , idealWayToSetUpModal = False
    }


update : ModalMsg -> ModalState -> ( ModalState, Cmd ModalMsg )
update msg state =
    case msg of
        ModalUpdate modalMsg ->
            case state.modalContext of
                Default ms ->
                    let
                        ( modalState, modalCmd, modalStatus ) =
                            Modal.update ms modalMsg

                        updatedModalState =
                            case modalStatus of
                                Just Modal.Closed ->
                                    NoModal

                                _ ->
                                    Default modalState
                    in
                    ( { state | modalContext = updatedModalState }, Cmd.map ModalUpdate modalCmd )

                InputEditModal ms ->
                    let
                        ( modalState, modalCmd, modalStatus ) =
                            Modal.update ms modalMsg

                        updatedModalState =
                            case modalStatus of
                                Just Modal.Closed ->
                                    NoModal

                                _ ->
                                    InputEditModal modalState
                    in
                    ( { state | modalContext = updatedModalState }, Cmd.map ModalUpdate modalCmd )

                _ ->
                    ( state, Cmd.none )

        -- we can do some stuff here when the user clicks confirm, then trigger the modal so it closes.
        ModalConfirmed ->
            -- there should ideally only be one modal context, don't do this.
            case state.modalContext of
                Default ms ->
                    let
                        modalState =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = Default modalState }, Cmd.none )

                InputEditModal ms ->
                    let
                        modalState =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = InputEditModal modalState }, Cmd.none )

                _ ->
                    ( state, Cmd.none )

        -- we can do some stuff here when the user clicks cancel, then trigger the modal so it closes.
        ModalDismissed ->
            case state.modalContext of
                Default ms ->
                    let
                        modalState =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = Default modalState }, Cmd.none )

                InputEditModal ms ->
                    let
                        modalState =
                            Modal.trigger ms
                    in
                    ( { state | modalContext = InputEditModal modalState }, Cmd.none )

                _ ->
                    ( state, Cmd.none )

        -- Typically modals dont start off open when you load a page. Setting the modal context is the ideal way
        -- to render the modal into view.
        SetDefaultModalContext ->
            let
                modalState =
                    Modal.trigger Modal.initialState
            in
            ( { state | idealWayToSetUpModal = True, modalContext = Default modalState }, Cmd.none )

        SetInputEditModalContext ->
            let
                modalState =
                    Modal.trigger <| Modal.setDefaultFocusableId (Modal.defaultFocusableId <| ModalConstants.defaultFocusableId ++ "-field-input") Modal.initialState
            in
            ( { state | idealWayToSetUpModal = True, modalContext = InputEditModal modalState }, Cmd.none )


subscriptions : ModalState -> Sub ModalMsg
subscriptions { modalContext } =
    case modalContext of
        Default modalState ->
            Sub.map ModalUpdate <| Modal.subscriptions modalState

        InputEditModal modalState ->
            Sub.map ModalUpdate <| Modal.subscriptions modalState

        NoModal ->
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
        [ storyOf "Confirmation (cautionary), shown by default" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Default modalState ->
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
                                    , onConfirmDisabled = False
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        _ ->
                            text ""
                    ]
        , storyOf "Generic, shown by default" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Default modalState ->
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

                        _ ->
                            text ""
                    ]
        , storyOf "Confirmation (informative), shown by default" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Default modalState ->
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
                                    , onConfirmDisabled = False
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        _ ->
                            text ""
                    ]
        , storyOf "Confirmation (positive), shown by default" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Default modalState ->
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
                                    , onConfirmDisabled = False
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        _ ->
                            text ""
                    ]
        , storyOf "Confirmation (negative), shown by default" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Default modalState ->
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
                                    , onConfirmDisabled = False
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        _ ->
                            text ""
                    ]
        , storyOf "Confirmation (negative), with disabled confirm button" config <|
            \m ->
                div []
                    [ case m.modalContext of
                        Default modalState ->
                            Modal.view <|
                                (Modal.confirmation Modal.Negative
                                    { title = "Negative title"
                                    , bodySubtext =
                                        Just
                                            [ div [ style "text-align" "center" ]
                                                [ Text.view (Text.p |> Text.style Text.Lede |> Text.inline True) [ text "Additional subtext to aid the user can be added here." ] ]
                                            ]
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Nothing
                                    , confirmLabel = "Confirm"
                                    , dismissLabel = "Cancel"
                                    , onConfirmDisabled = True
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        _ ->
                            text ""
                    ]
        , storyOf "Confirmation, user initiated" config <|
            \m ->
                div []
                    [ Button.view (Button.default |> Button.onClick SetDefaultModalContext) "Open Modal"
                    , if m.idealWayToSetUpModal then
                        case m.modalContext of
                            Default modalState ->
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
                                        , onConfirmDisabled = False
                                        }
                                        |> Modal.modalState modalState
                                        -- IMPORTANT: the modal uses this for internal messages
                                        |> Modal.onUpdate ModalUpdate
                                    )

                            _ ->
                                text ""

                      else
                        text ""
                    ]
        , storyOf "InputEdit (positive), user initiated" config <|
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

                    instructionText =
                        ModalAccessibleDescription.view
                            [ Text.view Text.p [ text "Instructive text to drive user selection goes here." ]
                            ]

                    textFields =
                        List.map TextField.view textFieldConfigs
                in
                div []
                    [ Button.view (Button.default |> Button.onClick SetInputEditModalContext) "Open Modal"
                    , case m.modalContext of
                        InputEditModal modalState ->
                            Modal.view <|
                                (Modal.inputEdit Modal.InputPositive
                                    { title = "Input-edit modal title"
                                    , children = instructionText :: textFields
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Just ModalConfirmed
                                    , confirmLabel = "Submit"
                                    , dismissLabel = "Cancel"
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        _ ->
                            text ""
                    ]
        , storyOf "InputEdit (negative), user initiated" config <|
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

                    instructionText =
                        ModalAccessibleDescription.view
                            [ Text.view Text.p [ text "Instructive text to drive user selection goes here." ]
                            ]

                    textFields =
                        List.map TextField.view textFieldConfigs
                in
                div []
                    [ Button.view (Button.default |> Button.onClick SetInputEditModalContext) "Open Modal"
                    , case m.modalContext of
                        InputEditModal modalState ->
                            Modal.view
                                (Modal.inputEdit Modal.InputNegative
                                    { title = "Input-edit modal title"
                                    , children = instructionText :: textFields
                                    , onDismiss = Just ModalDismissed
                                    , onConfirm = Just ModalConfirmed
                                    , confirmLabel = "Submit"
                                    , dismissLabel = "Cancel"
                                    }
                                    |> Modal.modalState modalState
                                    -- IMPORTANT: the modal uses this for internal messages
                                    |> Modal.onUpdate ModalUpdate
                                )

                        _ ->
                            text ""
                    ]
        ]

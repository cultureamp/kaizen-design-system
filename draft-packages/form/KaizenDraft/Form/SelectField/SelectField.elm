module KaizenDraft.Form.SelectField.SelectField exposing
    ( Config
    , Status(..)
    , clearable
    , description
    , disabled
    , id
    , labelHtml
    , labelText
    , menuItems
    , multi
    , placeholder
    , reversed
    , searchable
    , single
    , state
    , status
    , validationMessage
    , view
    )

import Html exposing (..)
import KaizenDraft.Form.Primitives.FieldGroup.FieldGroup as FieldGroup
import KaizenDraft.Form.Primitives.FieldMessage.FieldMessage as FieldMessage
import KaizenDraft.Form.Primitives.Label.Label as Label
import KaizenDraft.Select.Select as Select


type Status
    = Default
    | Success
    | Error



-- CONFIG


type Config msg item
    = Config (ConfigValue msg item)


type alias ConfigValue msg item =
    { id : String
    , variant : Select.Variant item
    , status : Status
    , isLoading : Bool
    , state : Select.State
    , placeholder : ( String, Select.Style )
    , menuItems : List (Select.MenuItem item)
    , searchable : Bool
    , clearable : Bool
    , toMsg : ToMsg msg item
    , labelText : Label.LabelProp msg
    , description : Maybe (List (Html msg))
    , disabled : Bool
    , reversed : Bool
    , validationMessage : Maybe String
    }


type alias ToMsg msg item =
    Select.Msg item -> msg


defaults : ToMsg msg item -> ConfigValue msg item
defaults toMsg =
    { id = ""
    , variant = Select.defaults.variant
    , status = Default
    , isLoading = Select.defaults.isLoading
    , state = Select.defaults.state
    , placeholder = Select.defaults.placeholder
    , menuItems = Select.defaults.menuItems
    , searchable = Select.defaults.searchable
    , clearable = Select.defaults.clearable
    , toMsg = toMsg
    , labelText = Label.LabelString ""
    , description = Nothing
    , disabled = False
    , reversed = False
    , validationMessage = Nothing
    }


single :
    { maybeSelectedItem : Maybe (Select.MenuItem item)
    , toMsg : ToMsg msg item
    , id : String
    }
    -> Config msg item
single required =
    let
        config =
            defaults required.toMsg
    in
    Config
        { config
            | variant = Select.Single required.maybeSelectedItem
            , id = required.id
        }


multi :
    { truncationWidth : Maybe Float
    , selectedItems : List (Select.MenuItem item)
    , toMsg : ToMsg msg item
    , id : String
    }
    -> Config msg item
multi required =
    let
        config =
            defaults required.toMsg
    in
    Config
        { config
            | variant =
                Select.Multi
                    { truncationWidth = required.truncationWidth }
                    required.selectedItems
            , id = required.id
        }


isLoading : Bool -> Config msg item -> Config msg item
isLoading isLoading_ (Config config) =
    Config { config | isLoading = isLoading_ }


state : Select.State -> Config msg item -> Config msg item
state state_ (Config config) =
    Config { config | state = state_ }


menuItems : List (Select.MenuItem item) -> Config msg item -> Config msg item
menuItems items (Config config) =
    Config { config | menuItems = items }


placeholder : ( String, Select.Style ) -> Config msg item -> Config msg item
placeholder plc (Config config) =
    Config { config | placeholder = plc }


searchable : Bool -> Config msg item -> Config msg item
searchable searchable_ (Config config) =
    Config { config | searchable = searchable_ }


clearable : Bool -> Config msg item -> Config msg item
clearable predicate (Config config) =
    Config { config | clearable = predicate }



-- MODIFIERS


id : String -> Config msg item -> Config msg item
id value (Config config) =
    Config { config | id = value }


labelText : String -> Config msg item -> Config msg item
labelText value (Config config) =
    Config { config | labelText = Label.LabelString value }


labelHtml : List (Html msg) -> Config msg item -> Config msg item
labelHtml value (Config config) =
    Config { config | labelText = Label.LabelHtml value }


validationMessage : Maybe String -> Config msg item -> Config msg item
validationMessage value (Config config) =
    Config { config | validationMessage = value }


description : List (Html msg) -> Config msg item -> Config msg item
description value (Config config) =
    Config { config | description = Just value }


disabled : Bool -> Config msg item -> Config msg item
disabled value (Config config) =
    Config { config | disabled = value }


reversed : Bool -> Config msg item -> Config msg item
reversed value (Config config) =
    Config { config | reversed = value }


status : Status -> Config msg item -> Config msg item
status value (Config config) =
    Config { config | status = value }


view : Config msg item -> Html msg
view (Config config) =
    let
        selectStatusProp =
            case config.status of
                Success ->
                    Select.Default

                Error ->
                    Select.Error

                Default ->
                    Select.Default

        fieldValidationMessageStatusProp =
            case config.status of
                Success ->
                    FieldMessage.Success

                Error ->
                    FieldMessage.Error

                Default ->
                    FieldMessage.Default

        fieldDescriptionHtml =
            div
                []
                [ FieldMessage.view
                    (FieldMessage.default
                        |> FieldMessage.id (config.id ++ "-field-description")
                        |> FieldMessage.automationId (config.id ++ "-field-description")
                        -- FieldMessage.message will be deprecated and replaced with messageHtml
                        |> FieldMessage.message ""
                        |> FieldMessage.messageHtml config.description
                        |> FieldMessage.status FieldMessage.Default
                        |> FieldMessage.reversed config.reversed
                    )
                ]

        fieldValidationMessageHtml =
            case config.validationMessage of
                Just validationMessageString ->
                    FieldMessage.view
                        (FieldMessage.default
                            |> FieldMessage.id (config.id ++ "-field-validation-message")
                            |> FieldMessage.automationId (config.id ++ "-field-validation-message")
                            |> FieldMessage.message validationMessageString
                            |> FieldMessage.status fieldValidationMessageStatusProp
                            |> FieldMessage.reversed config.reversed
                        )

                Nothing ->
                    text ""

        selectInputViewConfig : Select.Config item
        selectInputViewConfig =
            (case config.variant of
                Select.Single maybeSelectedItem ->
                    Select.single maybeSelectedItem

                Select.Multi multiSelectTagConfig selectedItems ->
                    Select.multi multiSelectTagConfig selectedItems
            )
                |> Select.selectType
                    (case config.status of
                        Error ->
                            Select.Error

                        Success ->
                            Select.Default

                        Default ->
                            Select.Default
                    )
                |> Select.isLoading config.isLoading
                |> Select.state config.state
                |> Select.placeholder config.placeholder
                |> Select.menuItems config.menuItems
                |> Select.searchable config.searchable
                |> Select.clearable config.clearable

        selectInputId =
            config.id ++ "-field-input"

        dummySelectInputId =
            Select.dummyInputIdPrefix ++ selectInputId

        selectInputView : Html msg
        selectInputView =
            Select.view
                selectInputViewConfig
                (Select.selectIdentifier selectInputId)
                |> Html.map config.toMsg
    in
    FieldGroup.view
        (FieldGroup.default
            |> FieldGroup.id (config.id ++ "-field-group")
            |> FieldGroup.automationId (config.id ++ "-field-group")
        )
        [ Label.view
            (Label.default
                |> Label.id (config.id ++ "-field-label")
                |> Label.automationId (config.id ++ "-field-label")
                |> Label.htmlFor dummySelectInputId
                |> Label.labelText config.labelText
                |> Label.reversed config.reversed
            )
        , selectInputView
        , fieldValidationMessageHtml
        , fieldDescriptionHtml
        ]

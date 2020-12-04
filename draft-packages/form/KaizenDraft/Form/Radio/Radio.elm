module KaizenDraft.Form.Radio.Radio exposing
    ( LabelProp(..)
    , SelectedStatus(..)
    , automationId
    , default
    , disabled
    , inline
    , labelText
    , name
    , onChange
    , radioId
    , selectedStatus
    , value
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div)
import Html.Attributes as Attributes
import KaizenDraft.Form.Primitives.Label.Label as Label
import KaizenDraft.Form.Primitives.RadioInput.RadioInput as RadioInput


labelSuffix : String
labelSuffix =
    "-field-label"


radioSuffix : String
radioSuffix =
    "-radio-input"


type LabelProp msg
    = LabelString String
    | LabelHtml (List (Html msg))


type Config msg
    = Config (Configuration msg)


type SelectedStatus
    = Selected
    | Unselected


type RadioId
    = RadioId String


type alias Configuration msg =
    { selectedStatus : SelectedStatus
    , onChange : Maybe (Bool -> msg)
    , inline : Bool
    , name : String
    , value : String
    , labelText : LabelProp msg
    , disabled : Bool
    , automationId : String
    }


defaults : Configuration msg
defaults =
    { selectedStatus = Unselected
    , onChange = Nothing
    , inline = False
    , name = ""
    , value = ""
    , labelText = LabelString ""
    , disabled = False
    , automationId = ""
    }


view : Config msg -> RadioId -> Html msg
view (Config config) (RadioId i) =
    let
        resolveLabelText =
            case config.labelText of
                LabelString s ->
                    Label.LabelString s

                LabelHtml h ->
                    Label.LabelHtml h

        resolveSelectedStatus =
            case config.selectedStatus of
                Selected ->
                    RadioInput.Selected

                _ ->
                    RadioInput.Unselected

        withOnChange cnfg =
            case config.onChange of
                Just onChangeMsg ->
                    RadioInput.onChange onChangeMsg cnfg

                _ ->
                    cnfg
    in
    div
        [ styles.classList
            [ ( .container, True )
            , ( .selected, config.selectedStatus == Selected )
            , ( .disabled, config.disabled )
            , ( .inline, config.inline )
            ]
        , Attributes.attribute "data-automation-id" config.automationId
        ]
        [ Label.view
            (Label.default
                |> Label.id (i ++ labelSuffix)
                |> Label.htmlFor i
                |> Label.automationId (i ++ labelSuffix)
                |> Label.labelText resolveLabelText
                |> Label.labelType Label.Radio
                |> Label.children
                    [ RadioInput.view
                        (RadioInput.default
                            |> RadioInput.automationId (i ++ radioSuffix)
                            |> RadioInput.disabled config.disabled
                            |> RadioInput.selectedStatus resolveSelectedStatus
                            |> RadioInput.value config.value
                            |> RadioInput.name config.name
                            |> withOnChange
                            |> RadioInput.id i
                        )
                    ]
            )
        ]


radioId : String -> RadioId
radioId i =
    RadioId i



-- CONFIG


default : Config msg
default =
    Config defaults



-- MODIFIERS


onChange : (Bool -> msg) -> Config msg -> Config msg
onChange msg (Config config) =
    Config { config | onChange = Just msg }


selectedStatus : SelectedStatus -> Config msg -> Config msg
selectedStatus v (Config config) =
    Config { config | selectedStatus = v }


inline : Bool -> Config msg -> Config msg
inline i (Config config) =
    Config { config | inline = i }


name : String -> Config msg -> Config msg
name n (Config config) =
    Config { config | name = n }


value : String -> Config msg -> Config msg
value v (Config config) =
    Config { config | name = v }


labelText : LabelProp msg -> Config msg -> Config msg
labelText l (Config config) =
    Config { config | labelText = l }


disabled : Bool -> Config msg -> Config msg
disabled d (Config config) =
    Config { config | disabled = d }


automationId : String -> Config msg -> Config msg
automationId a (Config config) =
    Config { config | automationId = a }


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/Radio/styles.scss"
        { container = "container"
        , selected = "selected"
        , disabled = "disabled"
        , inline = "inline"
        }

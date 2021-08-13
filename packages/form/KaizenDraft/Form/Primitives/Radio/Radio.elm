module KaizenDraft.Form.Primitives.Radio.Radio exposing (SelectedStatus(..), automationId, default, disabled, id, name, onChange, selectedStatus, value, view)

import CssModules exposing (css)
import Html exposing (Html, div, input, text)
import Html.Attributes as Attributes
import Html.Events as Events


type Config msg
    = Config (Configuration msg)


type SelectedStatus
    = Selected
    | Unselected


type alias Configuration msg =
    { id : String
    , automationId : String
    , selectedStatus : SelectedStatus
    , onChange : Maybe (Bool -> msg)
    , disabled : Bool
    , name : String
    , value : String
    }


defaults : Configuration msg
defaults =
    { id = ""
    , automationId = ""
    , selectedStatus = Unselected
    , onChange = Nothing
    , disabled = False
    , name = ""
    , value = ""
    }



-- CONFIG


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id a (Config config) =
    Config { config | id = a }


automationId : String -> Config msg -> Config msg
automationId a (Config config) =
    Config { config | automationId = a }


selectedStatus : SelectedStatus -> Config msg -> Config msg
selectedStatus v (Config config) =
    Config { config | selectedStatus = v }


onChange : (Bool -> msg) -> Config msg -> Config msg
onChange msg (Config config) =
    Config { config | onChange = Just msg }


disabled : Bool -> Config msg -> Config msg
disabled d (Config config) =
    Config { config | disabled = d }


name : String -> Config msg -> Config msg
name n (Config config) =
    Config { config | name = n }


value : String -> Config msg -> Config msg
value v (Config config) =
    Config { config | name = v }


view : Config msg -> Html msg
view (Config config) =
    let
        resolveSelected =
            case config.selectedStatus of
                Selected ->
                    True

                _ ->
                    False

        change onChangeMsg =
            Events.onCheck onChangeMsg

        events =
            List.filterMap identity
                [ Maybe.map change config.onChange ]
    in
    div []
        [ input
            ([ styles.class .radioInput
             , Attributes.class "needsclick"
             , Attributes.type_ "radio"
             , Attributes.id config.id
             , Attributes.name config.name
             , Attributes.value config.value
             , Attributes.checked resolveSelected
             , Attributes.attribute "data-automation-id" config.automationId
             , Attributes.disabled config.disabled
             ]
                ++ events
            )
            []
        , div [ styles.class .box ] [ renderSelected config.selectedStatus ]
        ]


renderSelected : SelectedStatus -> Html msg
renderSelected status =
    case status of
        Selected ->
            div [ styles.class .icon ] []

        _ ->
            text ""


styles =
    css "@kaizen/form/KaizenDraft/Form/Primitives/Radio/styles.scss"
        { radioInput = "radioInput"
        , box = "box"
        , icon = "icon"
        }

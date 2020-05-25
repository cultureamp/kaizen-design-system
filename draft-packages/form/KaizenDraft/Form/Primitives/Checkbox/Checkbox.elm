module KaizenDraft.Form.Primitives.Checkbox.Checkbox exposing
    ( CheckedValue(..)
    , Config
    , automationId
    , checkedStatus
    , default
    , disabled
    , id
    , name
    , onCheck
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, input, text)
import Html.Attributes exposing (attribute, for, id, property, type_)
import Html.Events as Events
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Encode as Encode



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , name : Maybe String
    , automationId : Maybe String
    , checkedStatus : CheckedValue
    , onCheck : Maybe (Bool -> msg)
    , disabled : Bool
    }


type CheckedValue
    = On
    | Off
    | Mixed


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , name = Nothing
    , automationId = Nothing
    , checkedStatus = Off
    , onCheck = Nothing
    , disabled = False
    }



-- VARIANTS


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


name : String -> Config msg -> Config msg
name value (Config config) =
    Config { config | name = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }


checkedStatus : CheckedValue -> Config msg -> Config msg
checkedStatus value (Config config) =
    Config
        { config | checkedStatus = value }


onCheck : (Bool -> msg) -> Config msg -> Config msg
onCheck value (Config config) =
    Config { config | onCheck = Just value }


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }



-- VIEW


view : Config msg -> Html msg
view (Config config) =
    let
        automationIdAttr =
            case config.automationId of
                Just idString ->
                    [ Html.Attributes.attribute "data-automation-id" idString ]

                Nothing ->
                    []

        maybeIdAttr =
            case config.id of
                Just idString ->
                    [ Html.Attributes.id idString ]

                Nothing ->
                    []

        maybeNameAttr =
            case config.name of
                Just nameString ->
                    [ Html.Attributes.name nameString ]

                Nothing ->
                    []

        maybeOnCheckAttr =
            case config.onCheck of
                Just onCheckMsg ->
                    [ Events.onCheck onCheckMsg ]

                Nothing ->
                    []

        checkedStatusAttr =
            case config.checkedStatus of
                On ->
                    [ Html.Attributes.checked True ]

                Off ->
                    [ Html.Attributes.checked False ]

                Mixed ->
                    [ property "indeterminate" (Encode.bool True) ]

        checkOrMixedIcon =
            case config.checkedStatus of
                On ->
                    div [ styles.class .icon ]
                        [ Icon.view (Icon.presentation |> Icon.inheritSize True)
                            (svgAsset "@kaizen/component-library/icons/check.icon.svg")
                            |> Html.map never
                        ]

                Off ->
                    Html.text ""

                Mixed ->
                    div [ styles.class .icon ]
                        [ Icon.view (Icon.presentation |> Icon.inheritSize True)
                            (svgAsset "@kaizen/component-library/icons/minus.icon.svg")
                            |> Html.map never
                        ]

        attribs =
            maybeIdAttr
                ++ automationIdAttr
                ++ checkedStatusAttr
                ++ maybeOnCheckAttr
                ++ maybeNameAttr
    in
    div [ styles.class .container ]
        [ input
            (attribs
                ++ [ type_ "checkbox"
                   , Html.Attributes.disabled config.disabled
                   , styles.class .checkbox
                   ]
            )
            []
        , div [ styles.class .box ] [ checkOrMixedIcon ]
        ]


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/Primitives/Checkbox/styles.scss"
        { checkbox = "checkbox"
        , disabled = "disabled"
        , container = "container"
        , icon = "icon"
        , box = "box"
        }

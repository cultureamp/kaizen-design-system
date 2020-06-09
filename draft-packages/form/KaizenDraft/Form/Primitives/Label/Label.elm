module KaizenDraft.Form.Primitives.Label.Label exposing
    ( LabelProp(..)
    , LabelType(..)
    , automationId
    , children
    , default
    , htmlFor
    , id
    , labelText
    , labelType
    , reversed
    , view
    )

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes
import Text.Text as Text exposing (TypeStyle(..))


type LabelProp msg
    = LabelString String
    | LabelHtml (List (Html msg))


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/Primitives/Label/styles.scss"
        { label = "label"
        , reversed = "reversed"
        , text = "text"
        , checkbox = "checkbox"
        , toggle = "toggle"
        , labelText = "labelText"
        }



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , reversed : Bool
    , labelText : LabelProp msg
    , labelType : LabelType
    , htmlFor : Maybe String
    , children : List (Html msg)
    }


type LabelType
    = Text
    | Checkbox
    | Toggle


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
    , reversed = False
    , labelText = LabelString ""
    , labelType = Text
    , htmlFor = Nothing
    , children = []
    }



-- VARIANTS


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }


reversed : Bool -> Config msg -> Config msg
reversed value (Config config) =
    Config { config | reversed = value }


labelText : LabelProp msg -> Config msg -> Config msg
labelText value (Config config) =
    Config { config | labelText = value }


labelType : LabelType -> Config msg -> Config msg
labelType value (Config config) =
    Config { config | labelType = value }


htmlFor : String -> Config msg -> Config msg
htmlFor value (Config config) =
    Config { config | htmlFor = Just value }


children : List (Html msg) -> Config msg -> Config msg
children value (Config config) =
    Config { config | children = value }


view : Config msg -> Html msg
view (Config config) =
    let
        idAttr =
            case config.id of
                Just idString ->
                    [ Html.Attributes.id idString ]

                Nothing ->
                    []

        automationIdAttr =
            case config.automationId of
                Just idString ->
                    [ Html.Attributes.attribute "data-automation-id" idString ]

                Nothing ->
                    []

        htmlForAttr =
            case config.htmlFor of
                Just idString ->
                    [ Html.Attributes.for idString ]

                Nothing ->
                    []

        attribs =
            idAttr
                ++ automationIdAttr
                ++ htmlForAttr

        labelTextValue =
            case config.labelText of
                LabelString value ->
                    [ text value ]

                LabelHtml value ->
                    value
    in
    label
        (attribs
            ++ [ styles.classList
                    [ ( .label, True )
                    , ( .reversed, config.reversed )
                    , ( .text, config.labelType == Text )
                    , ( .checkbox, config.labelType == Checkbox )
                    , ( .toggle, config.labelType == Toggle )
                    ]
               ]
        )
        (config.children ++ [ span [ styles.classList [ ( .labelText, True ) ] ] labelTextValue ])

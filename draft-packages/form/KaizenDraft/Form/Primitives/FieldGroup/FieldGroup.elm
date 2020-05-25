module KaizenDraft.Form.Primitives.FieldGroup.FieldGroup exposing (automationId, className, default, id, inline, view)

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/Primitives/FieldGroup/styles.scss"
        { group = "group"
        , inline = "inline"
        }



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , className : List (Attribute msg)
    , inline : Bool
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
    , className = []
    , inline = False
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


className : List (Attribute msg) -> Config msg -> Config msg
className value (Config config) =
    Config { config | className = value }


inline : Bool -> Config msg -> Config msg
inline value (Config config) =
    Config { config | inline = value }


view : Config msg -> List (Html msg) -> Html msg
view (Config config) children =
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

        attribs =
            idAttr
                ++ automationIdAttr
    in
    div
        (attribs
            ++ [ styles.classList
                    [ ( .group, True )
                    , ( .inline, config.inline )
                    ]
               ]
            ++ config.className
        )
        children

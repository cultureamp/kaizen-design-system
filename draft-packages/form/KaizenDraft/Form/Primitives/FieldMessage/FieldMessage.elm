module KaizenDraft.Form.Primitives.FieldMessage.FieldMessage exposing (FieldMessageStatus(..), automationId, default, id, message, reversed, status, view)

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes


styles =
    css "@kaizen/draft-form/KaizenDraft/Form/Primitives/FieldMessage/styles.scss"
        { error = "error"
        , default = "default"
        , reversed = "reversed"
        , message = "message"
        }


type FieldMessageStatus
    = Default
    | Success
    | Error



-- CONFIG


type Config
    = Config ConfigValue


type alias ConfigValue =
    { id : Maybe String
    , automationId : Maybe String
    , reversed : Bool
    , message : String
    , status : FieldMessageStatus
    }


defaults : ConfigValue
defaults =
    { id = Nothing
    , automationId = Nothing
    , reversed = False
    , message = ""
    , status = Default
    }



-- VARIANTS


default : Config
default =
    Config defaults



-- MODIFIERS


id : String -> Config -> Config
id value (Config config) =
    Config { config | id = Just value }


automationId : String -> Config -> Config
automationId value (Config config) =
    Config { config | automationId = Just value }


reversed : Bool -> Config -> Config
reversed value (Config config) =
    Config { config | reversed = value }


message : String -> Config -> Config
message value (Config config) =
    Config { config | message = value }


status : FieldMessageStatus -> Config -> Config
status value (Config config) =
    Config { config | status = value }


view : Config -> Html msg
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

        attribs =
            idAttr
                ++ automationIdAttr
    in
    div
        (attribs
            ++ [ styles.classList
                    [ ( .message, True )
                    , ( .default, config.status == Default )
                    , ( .error, config.status == Error )
                    , ( .reversed, config.reversed )
                    ]
               ]
        )
        [ text config.message ]

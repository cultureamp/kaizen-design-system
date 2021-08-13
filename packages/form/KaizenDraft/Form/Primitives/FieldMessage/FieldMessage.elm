module KaizenDraft.Form.Primitives.FieldMessage.FieldMessage exposing (FieldMessageStatus(..), automationId, default, id, message, messageHtml, reversed, status, view)

import CssModules exposing (css)
import Html exposing (..)
import Html.Attributes


styles =
    css "@kaizen/form/KaizenDraft/Form/Primitives/FieldMessage/styles.scss"
        { error = "error"
        , default = "default"
        , reversed = "reversed"
        , message = "message"
        , positionTop = "positionTop"
        , positionBottom = "positionBottom"
        }


type FieldMessageStatus
    = Default
    | Success
    | Error


type FieldMessagePosition
    = Top
    | Bottom



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , reversed : Bool
    , message : String
    , messageHtml : Maybe (List (Html msg))
    , status : FieldMessageStatus
    , position : FieldMessagePosition
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
    , reversed = False
    , message = ""
    , messageHtml = Nothing
    , status = Default
    , position = Bottom
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


message : String -> Config msg -> Config msg
message value (Config config) =
    Config { config | message = value }


messageHtml : Maybe (List (Html msg)) -> Config msg -> Config msg
messageHtml value (Config config) =
    Config { config | messageHtml = value }


status : FieldMessageStatus -> Config msg -> Config msg
status value (Config config) =
    Config { config | status = value }


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
                    , ( .positionTop, config.position == Top )
                    , ( .positionBottom, config.position == Bottom )
                    ]
               ]
        )
        (case ( config.message, config.messageHtml ) of
            ( _, Just html ) ->
                -- ideally we'd only allow either a string or html, not both, but
                -- we wanted to avoid a breaking change, so we need to deal with
                -- nonsensical state where both are provided, so the html
                -- aribitrarily wins out if both are supplied
                html

            ( messageString, Nothing ) ->
                [ text messageString ]
        )

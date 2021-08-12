module KaizenDraft.Modal.Primitives.GenericModal exposing (Size(..), default, events, view)

import CssModules exposing (css)
import Html exposing (Html, div, span)
import Html.Attributes exposing (style)
import Html.Attributes.Aria exposing (ariaDescribedby, ariaLabelledby, role)
import KaizenDraft.Modal.Primitives.Constants as Constants


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { events : Maybe (List (Html.Attribute msg))
    }


defaults : Configuration msg
defaults =
    { events = Nothing
    }



-- TYPES


type Size
    = Custom ( Float, Float )
    | Default



-- VARIANTS


default : Config msg
default =
    Config defaults


view : Size -> List (Html msg) -> Config msg -> Html msg
view size content (Config config) =
    span [ styles.class .scrollLayer ]
        [ div
            ([ styles.classList [ ( .scrollLayer, True ) ]
             , role "dialog"
             , ariaDescribedby Constants.ariaDescribedBy
             , ariaLabelledby Constants.ariaLabelledBy
             ]
                ++ Maybe.withDefault [] config.events
            )
            []
        , modalBox content size
        ]


modalBox : List (Html msg) -> Size -> Html msg
modalBox content size =
    let
        resolveSize =
            case size of
                Custom ( width, height ) ->
                    [ style "width" <| (String.fromFloat width ++ "px"), style "height" <| (String.fromFloat height ++ "px") ]

                Default ->
                    [ style "max-width" "600px", style "min-width" "300px" ]
    in
    div
        ([ styles.classList
            [ ( .elmGenericModal, True )
            ]
         ]
            ++ resolveSize
        )
        content


events : List (Html.Attribute msg) -> Config msg -> Config msg
events msg (Config config) =
    Config { config | events = Just msg }


styles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Primitives/GenericModal.scss"
        { scrollLayer = "scrollLayer"
        , elmGenericModal = "elmGenericModal"
        }

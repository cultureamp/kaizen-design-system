module KaizenDraft.Modal.Primitives.ModalHeader exposing
    ( dismissId
    , dismissReverse
    , fixed
    , layout
    , onDismiss
    , onDismissBlur
    , onDismissFocus
    , preventDismissKeydown
    , view
    )

import Button.Button as Button
import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Events exposing (onClick)
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode


type Config msg
    = Config (Configuration msg)


type alias Configuration msg =
    { variant : Variant msg
    , fixed : Bool
    , onDismiss : Maybe msg
    , dismissId : Maybe String
    , onDismissFocus : Maybe msg
    , onDismissBlur : Maybe msg
    , preventDismissKeydown : List (Decode.Decoder msg)
    , dismissReverse : Bool
    }


defaults : Configuration msg
defaults =
    { variant = Layout [ text "" ]
    , fixed = False
    , onDismiss = Nothing
    , dismissId = Nothing
    , onDismissFocus = Nothing
    , onDismissBlur = Nothing
    , preventDismissKeydown = []
    , dismissReverse = True
    }


view : Config msg -> Html msg
view (Config config) =
    let
        --        This helps avoid using tricky layout css and renders a block element the same size as the fixed div
        useFiller =
            config.fixed

        filler content =
            if useFiller then
                fillerBox content

            else
                []
    in
    case config.variant of
        Layout content ->
            div [] <| (layoutBox content config ++ filler content)


layoutBox : List (Html msg) -> Configuration msg -> List (Html msg)
layoutBox content config =
    let
        withDismissId buttonConfig =
            case config.dismissId of
                Just id_ ->
                    Button.id id_ buttonConfig

                Nothing ->
                    buttonConfig

        withFocus buttonConfig =
            case config.onDismissFocus of
                Just msg ->
                    Button.onFocus msg buttonConfig

                Nothing ->
                    buttonConfig

        withBlur buttonConfig =
            case config.onDismissBlur of
                Just msg ->
                    Button.onBlur msg buttonConfig

                Nothing ->
                    buttonConfig

        withPreventKeydown buttonConfig =
            if List.isEmpty config.preventDismissKeydown then
                buttonConfig

            else
                Button.preventKeydownOn config.preventDismissKeydown buttonConfig

        resolveDismissButton =
            case config.onDismiss of
                Just onDismissMsg ->
                    div [ styles.class .dismissButton, onClick onDismissMsg ]
                        [ Button.view
                            (Button.iconButton
                                (svgAsset "@kaizen/component-library/icons/close.icon.svg")
                                |> Button.reversed config.dismissReverse
                                |> withDismissId
                                |> withFocus
                                |> withBlur
                                |> withPreventKeydown
                            )
                            "Dismiss"
                        ]

                Nothing ->
                    text ""
    in
    [ div
        [ styles.classList
            [ ( .layout, True )
            , ( .fixed, config.fixed )
            ]
        ]
        (resolveDismissButton
            :: content
        )
    ]


fillerBox : List (Html msg) -> List (Html msg)
fillerBox content =
    [ div [ styles.class .filler ] content ]



-- VARIANTS


type Variant msg
    = Layout (List (Html msg))


layout : List (Html msg) -> Config msg
layout content =
    Config { defaults | variant = Layout content }



-- MODIFIERS


fixed : Bool -> Config msg -> Config msg
fixed predicate (Config config) =
    Config { config | fixed = predicate }


{-| If present this will render a close button which triggers the msg.
If you are providing your own layout and handling the close yourself, dont use this modifier
as it may clash with the provided close button
-}
onDismiss : msg -> Config msg -> Config msg
onDismiss msg (Config config) =
    Config { config | onDismiss = Just msg }


onDismissFocus : msg -> Config msg -> Config msg
onDismissFocus msg (Config config) =
    Config { config | onDismissFocus = Just msg }


dismissReverse : Bool -> Config msg -> Config msg
dismissReverse predicate (Config config) =
    Config { config | dismissReverse = predicate }


onDismissBlur : msg -> Config msg -> Config msg
onDismissBlur msg (Config config) =
    Config { config | onDismissBlur = Just msg }


dismissId : String -> Config msg -> Config msg
dismissId id_ (Config config) =
    Config { config | dismissId = Just id_ }


preventDismissKeydown : List (Decode.Decoder msg) -> Config msg -> Config msg
preventDismissKeydown keydownDecoders (Config config) =
    Config { config | preventDismissKeydown = keydownDecoders }


styles =
    css "@kaizen/draft-modal/KaizenDraft/Modal/Primitives/ModalHeader.scss"
        { layout = "layout"
        , filler = "filler"
        , fixed = "fixed"
        , dismissButton = "dismissButton"
        }

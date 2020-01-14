module Kaizen.Popover.Popover exposing
    ( Config
    , Position(..)
    , Side(..)
    , automationId
    , cautionary
    , default
    , id
    , informative
    , isDismissible
    , negative
    , positive
    , view
    , withContent
    , withHeading
    , withTipPosition
    , withVariableHeight
    )

import CssModules exposing (css)
import Html exposing (Html, button, div, span, text)
import Html.Attributes
import Html.Events exposing (onClick)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)



-- CONFIG


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { id : Maybe String
    , automationId : Maybe String
    , visible : Bool
    , onClose : Maybe msg
    , content : Html msg
    , heading : Maybe String
    , variant : Variant
    , tipPosition : ( Side, Position )
    , forVariableHeight : Bool
    }


defaults : ConfigValue msg
defaults =
    { id = Nothing
    , automationId = Nothing
    , visible = False
    , onClose = Nothing
    , content = text ""
    , heading = Nothing
    , variant = Default
    , tipPosition = ( Bottom, Center )
    , forVariableHeight = False
    }



-- VARIANTS


type Variant
    = Default
    | Informative
    | Positive
    | Negative
    | Cautionary


type Position
    = Start
    | Center
    | End


type Side
    = Top
    | Bottom
    | Left
    | Right


default : Config msg
default =
    Config defaults


informative : Config msg
informative =
    Config { defaults | variant = Informative }


positive : Config msg
positive =
    Config { defaults | variant = Positive }


negative : Config msg
negative =
    Config { defaults | variant = Negative }


cautionary : Config msg
cautionary =
    Config { defaults | variant = Cautionary }



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }


isVisible : Bool -> Config msg -> Config msg
isVisible value (Config config) =
    Config { config | visible = value }


withTipPosition : ( Side, Position ) -> Config msg -> Config msg
withTipPosition value (Config config) =
    Config { config | tipPosition = value }


withHeading : String -> Config msg -> Config msg
withHeading value (Config config) =
    Config { config | heading = Just value }


withContent : Html msg -> Config msg -> Config msg
withContent value (Config config) =
    Config { config | content = value }


isDismissible : msg -> Config msg -> Config msg
isDismissible closeMsg (Config config) =
    Config { config | onClose = Just closeMsg }


withPosition : Side -> Config msg -> Config msg
withPosition value (Config config) =
    Config { config | tipPosition = ( value, Center ) }


withVariableHeight : Bool -> Config msg -> Config msg
withVariableHeight value (Config config) =
    Config { config | forVariableHeight = value }



-- VIEW


view : Config msg -> Html msg
view (Config config) =
    let
        viewClose =
            case config.onClose of
                Just closeMsg ->
                    button [ styles.class .close, onClick closeMsg ]
                        [ Icon.view
                            Icon.presentation
                            (svgAsset "@cultureamp/kaizen-component-library/icons/close.icon.svg")
                            |> Html.map never
                        ]

                Nothing ->
                    text ""

        ( sideClass, positionClass ) =
            mapPositionToClass config.tipPosition
    in
    div
        ([ styles.classList
            [ ( mapVariantToRootClass config.variant, True )
            , ( sideClass, True )
            , ( positionClass, True )
            ]
         ]
            ++ mapVariableHeightToAttribute config.forVariableHeight config.tipPosition
        )
        [ case config.heading of
            Just heading ->
                div [ styles.class .header ]
                    [ span [ styles.class .icon ] [ mapVariantToIcon config.variant ]
                    , text heading
                    , viewClose
                    ]

            Nothing ->
                text ""
        , div [ styles.class .container ] [ config.content ]
        ]


styles =
    css "@cultureamp/kaizen-component-library/draft/Kaizen/Popover/styles.scss"
        { container = "container"
        , root = "root"
        , default = "default"
        , informative = "informative"
        , positive = "positive"
        , negative = "negative"
        , cautionary = "cautionary"
        , header = "header"
        , icon = "icon"
        , close = "close"
        , sideTop = "sideTop"
        , sideBottom = "sideBottom"
        , positionStart = "positionStart"
        , positionCenter = "positionCenter"
        , positionEnd = "positionEnd"
        , bottomAttribute = "bottomAttribute"
        , topAttribute = "topAttribute"
        }



-- HELPERS


mapVariantToIcon : Variant -> Html msg
mapVariantToIcon variant =
    case variant of
        Default ->
            text ""

        Informative ->
            Icon.view
                Icon.presentation
                (svgAsset "@cultureamp/kaizen-component-library/icons/information.icon.svg")
                |> Html.map never

        Positive ->
            Icon.view
                Icon.presentation
                (svgAsset "@cultureamp/kaizen-component-library/icons/success.icon.svg")
                |> Html.map never

        Negative ->
            Icon.view
                Icon.presentation
                (svgAsset "@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
                |> Html.map never

        Cautionary ->
            Icon.view
                Icon.presentation
                (svgAsset "@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
                |> Html.map never


mapVariantToRootClass : Variant -> { b | default : a, informative : a, positive : a, negative : a, cautionary : a } -> a
mapVariantToRootClass variant =
    case variant of
        Default ->
            .default

        Informative ->
            .informative

        Positive ->
            .positive

        Negative ->
            .negative

        Cautionary ->
            .cautionary


mapPositionToClass :
    ( Side, Position )
    -> ( { b | sideTop : a, sideBottom : a } -> a, { b | positionStart : a, positionCenter : a, positionEnd : a } -> a )
mapPositionToClass tipPosition =
    case tipPosition of
        ( Bottom, Start ) ->
            ( .sideBottom, .positionStart )

        ( Bottom, Center ) ->
            ( .sideBottom, .positionCenter )

        ( Bottom, End ) ->
            ( .sideBottom, .positionEnd )

        ( Top, Start ) ->
            ( .sideTop, .positionStart )

        ( Top, Center ) ->
            ( .sideTop, .positionCenter )

        ( Top, End ) ->
            ( .sideTop, .positionEnd )

        ( _, _ ) ->
            ( .sideBottom, .positionCenter )


mapVariableHeightToAttribute : Bool -> ( Side, Position ) -> List (Html.Attribute msg)
mapVariableHeightToAttribute value ( side, position ) =
    case value of
        True ->
            case side of
                Bottom ->
                    [ styles.class .bottomAttribute ]

                Top ->
                    [ styles.class .topAttribute ]

                _ ->
                    []

        False ->
            []

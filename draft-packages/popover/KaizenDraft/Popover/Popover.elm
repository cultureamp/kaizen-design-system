module KaizenDraft.Popover.Popover exposing
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
    )

import CssModules exposing (css)
import Html exposing (Attribute, Html, button, div, span, text)
import Html.Attributes exposing (style)
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



-- Not yet implemented
--| Left
--| Right


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
                            (svgAsset "@kaizen/component-library/icons/close.icon.svg")
                            |> Html.map never
                        ]

                Nothing ->
                    text ""

        ( side, position ) =
            config.tipPosition
    in
    div
        [ styles.class .root
        , getRootStyle
        ]
        [ div
            [ styles.classList
                [ ( mapVariantToBoxClass config.variant, True ) ]
            ]
            [ case config.heading of
                Just heading ->
                    div [ styles.class .header ]
                        [ if config.variant == Default then
                            text ""

                          else
                            span
                                [ styles.classList
                                    [ ( mapVariantToIconClass config.variant, True ) ]
                                , styles.class .icon
                                ]
                                [ mapVariantToIcon config.variant ]
                        , text heading
                        , viewClose
                        ]

                Nothing ->
                    text ""
            , div [ styles.class .container ] [ config.content ]
            ]
        , div
            [ styles.classList
                [ ( mapArrowVariantToClass config.variant, True )
                , ( mapArrowSideToClass side, True )
                , ( mapArrowPositionToClass position, True )
                ]
            , getArrowStyle side
            ]
            []
        ]


styles =
    css "@kaizen/draft-popover/KaizenDraft/Popover/styles.scss"
        { container = "container"
        , root = "root"
        , defaultBox = "defaultBox"
        , informativeBox = "informativeBox"
        , positiveBox = "positiveBox"
        , negativeBox = "negativeBox"
        , cautionaryBox = "cautionaryBox"
        , header = "header"
        , icon = "icon"
        , close = "close"
        , informativeArrow = "informativeArrow"
        , positiveArrow = "positiveArrow"
        , negativeArrow = "negativeArrow"
        , cautionaryArrow = "cautionaryArrow"
        , defaultArrow = "defaultArrow"
        , arrowSideTop = "arrowSideTop"
        , arrowSideBottom = "arrowSideBottom"
        , arrowPositionStart = "arrowPositionStart"
        , arrowPositionEnd = "arrowPositionEnd"
        , arrowPositionCenter = "arrowPositionCenter"
        , informativeIcon = "informativeIcon"
        , positiveIcon = "positiveIcon"
        , negativeIcon = "negativeIcon"
        , cautionaryIcon = "cautionaryIcon"
        }



-- HELPERS


getRootStyle : Attribute msg
getRootStyle =
    style "transform" "translateX(-50%)"


mapVariantToBoxClass : Variant -> { b | defaultBox : a, informativeBox : a, positiveBox : a, negativeBox : a, cautionaryBox : a } -> a
mapVariantToBoxClass variant =
    case variant of
        Default ->
            .defaultBox

        Informative ->
            .informativeBox

        Positive ->
            .positiveBox

        Negative ->
            .negativeBox

        Cautionary ->
            .cautionaryBox


getArrowStyle : Side -> Attribute msg
getArrowStyle side =
    case side of
        Top ->
            style "transform" "rotate(180deg)"

        Bottom ->
            style "" ""


mapVariantToIconClass : Variant -> { b | informativeIcon : a, positiveIcon : a, negativeIcon : a, cautionaryIcon : a } -> a
mapVariantToIconClass variant =
    case variant of
        Default ->
            .informativeIcon

        Informative ->
            .informativeIcon

        Positive ->
            .positiveIcon

        Negative ->
            .negativeIcon

        Cautionary ->
            .cautionaryIcon


mapVariantToIcon : Variant -> Html msg
mapVariantToIcon variant =
    case variant of
        Default ->
            text ""

        Informative ->
            Icon.view
                Icon.presentation
                (svgAsset "@kaizen/component-library/icons/information.icon.svg")
                |> Html.map never

        Positive ->
            Icon.view
                Icon.presentation
                (svgAsset "@kaizen/component-library/icons/success.icon.svg")
                |> Html.map never

        Negative ->
            Icon.view
                Icon.presentation
                (svgAsset "@kaizen/component-library/icons/exclamation.icon.svg")
                |> Html.map never

        Cautionary ->
            Icon.view
                Icon.presentation
                (svgAsset "@kaizen/component-library/icons/exclamation.icon.svg")
                |> Html.map never


mapArrowVariantToClass : Variant -> { b | defaultArrow : a, informativeArrow : a, positiveArrow : a, negativeArrow : a, cautionaryArrow : a } -> a
mapArrowVariantToClass variant =
    case variant of
        Default ->
            .defaultArrow

        Informative ->
            .informativeArrow

        Positive ->
            .positiveArrow

        Negative ->
            .negativeArrow

        Cautionary ->
            .cautionaryArrow


mapArrowPositionToClass : Position -> { b | arrowPositionStart : a, arrowPositionEnd : a, arrowPositionCenter : a } -> a
mapArrowPositionToClass position =
    case position of
        Start ->
            .arrowPositionStart

        End ->
            .arrowPositionEnd

        Center ->
            .arrowPositionCenter


mapArrowSideToClass : Side -> { b | arrowSideTop : a, arrowSideBottom : a } -> a
mapArrowSideToClass side =
    case side of
        Bottom ->
            .arrowSideBottom

        Top ->
            .arrowSideTop

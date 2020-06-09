module KaizenDraft.Button.Button exposing
    ( BrandColor(..)
    , ButtonType(..)
    , Config
    , IconPosition(..)
    , automationId
    , buttonType
    , default
    , destructive
    , destructiveIconButton
    , destructiveModifier
    , disabled
    , form
    , fullWidth
    , href
    , icon
    , iconButton
    , iconPosition
    , id
    , newTabAndIUnderstandTheAccessibilityImplications
    , onBlur
    , onClick
    , onFocus
    , onMouseDown
    , preventKeydownOn
    , primary
    , reverseColor
    , reversed
    , secondary
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, a, button, span, text)
import Html.Attributes
import Html.Attributes.Aria
import Html.Events as HtmlEvents
import Icon.Icon as Icon
import Icon.SvgAsset exposing (SvgAsset)
import Json.Decode as Decode
import Maybe



-- VIEW


view : Config msg -> String -> Html msg
view (Config config) label =
    let
        disabledAttr =
            if config.disabled then
                [ Html.Attributes.disabled True ]

            else
                []

        buttonClass =
            [ styles.classList
                [ ( .button, True )
                , ( .primary, config.variant == Primary )
                , ( .secondary, config.variant == Secondary )
                , ( .iconButton, config.iconButton )
                , ( .reversedIconButton, config.iconButton && config.reversed )
                , ( .destructive, config.variant == Destructive )
                , ( .form, config.form )
                , ( .reversed, config.reversed )
                , ( .reverseColorCluny, config.reverseColor == Just Cluny )
                , ( .reverseColorPeach, config.reverseColor == Just Peach )
                , ( .reverseColorSeedling, config.reverseColor == Just Seedling )
                , ( .reverseColorWisteria, config.reverseColor == Just Wisteria )
                , ( .reverseColorYuzu, config.reverseColor == Just Yuzu )
                , ( .destructiveModifier, config.destructive == True )
                ]
            ]

        automationIdAttr =
            case config.automationId of
                Just idString ->
                    [ Html.Attributes.attribute "data-automation-id" idString ]

                Nothing ->
                    []

        idAttr =
            case config.id of
                Just idString ->
                    [ Html.Attributes.id idString ]

                Nothing ->
                    []

        titleAttr =
            if config.iconButton then
                [ Html.Attributes.title label
                , Html.Attributes.Aria.ariaLabel label
                ]

            else
                []

        targetValue =
            if config.newTabAndIUnderstandTheAccessibilityImplications then
                "_blank"

            else
                "_self"

        attribs =
            buttonClass
                ++ onClickAttribs config
                ++ onFocusAttribs config
                ++ onBlurAttribs config
                ++ preventKeydownAttribs config
                ++ onMouseDownAttribs config
                ++ automationIdAttr
                ++ titleAttr
                ++ buttonTypeAttribs config
                ++ idAttr
    in
    span
        [ styles.classList
            [ ( .container, True )
            , ( .fullWidth, config.fullWidth )
            ]
        ]
        [ case config.href of
            Just hrefValue ->
                a (attribs ++ [ Html.Attributes.href hrefValue, Html.Attributes.target targetValue ])
                    [ viewContent (Config config) label |> Html.map never ]

            Nothing ->
                button (attribs ++ disabledAttr)
                    [ viewContent (Config config) label |> Html.map never ]
        ]


onFocusAttribs : ConfigValue msg -> List (Html.Attribute msg)
onFocusAttribs config =
    case config.onFocus of
        Just focusMsg ->
            [ HtmlEvents.onFocus focusMsg ]

        Nothing ->
            []


onBlurAttribs : ConfigValue msg -> List (Html.Attribute msg)
onBlurAttribs config =
    case config.onBlur of
        Just blurMsg ->
            [ HtmlEvents.onBlur blurMsg ]

        Nothing ->
            []


preventKeydownAttribs : ConfigValue msg -> List (Html.Attribute msg)
preventKeydownAttribs config =
    if List.isEmpty config.preventKeydownOn then
        []

    else
        [ HtmlEvents.preventDefaultOn "keydown" <| Decode.map (\msg -> ( msg, True )) (Decode.oneOf config.preventKeydownOn) ]


onMouseDownAttribs : ConfigValue msg -> List (Html.Attribute msg)
onMouseDownAttribs config =
    case config.onMouseDown of
        Just mouseDownMsg ->
            [ HtmlEvents.onMouseDown mouseDownMsg ]

        Nothing ->
            []


onClickAttribs : ConfigValue msg -> List (Html.Attribute msg)
onClickAttribs config =
    case config.onClick of
        Just msg ->
            let
                preventDefault =
                    case config.buttonType of
                        Just buttonTypeValue ->
                            case buttonTypeValue of
                                Submit ->
                                    False

                                Reset ->
                                    False

                        Nothing ->
                            True

                decoder =
                    Decode.map
                        (\m ->
                            { message = m
                            , stopPropagation = False
                            , preventDefault = preventDefault
                            }
                        )
                        (Decode.succeed msg)
            in
            [ HtmlEvents.custom "click" decoder ]

        Nothing ->
            []


buttonTypeAttribs : ConfigValue msg -> List (Html.Attribute msg)
buttonTypeAttribs config =
    case config.href of
        Just _ ->
            []

        Nothing ->
            case config.buttonType of
                Just buttonTypeValue ->
                    let
                        encodedButtonType =
                            case buttonTypeValue of
                                Submit ->
                                    "submit"

                                Reset ->
                                    "reset"
                    in
                    [ Html.Attributes.type_ encodedButtonType ]

                Nothing ->
                    []


viewContent : Config msg -> String -> Html Never
viewContent (Config config) label =
    span [ styles.class .content ]
        [ viewIconFor config Start
        , viewLabel label config.iconButton
        , viewIconFor config End
        ]


viewLabel : String -> Bool -> Html Never
viewLabel label isIconButton =
    if isIconButton then
        text ""

    else
        span [ styles.class .label ]
            [ text label ]


viewIconFor : ConfigValue msg -> IconPosition -> Html Never
viewIconFor configValue forPosition =
    if configValue.iconPosition == forPosition then
        case configValue.icon of
            Just svgAsset ->
                span [ styles.class .iconWrapper ]
                    [ Icon.view Icon.presentation svgAsset ]

            Nothing ->
                text ""

    else
        text ""


styles =
    css "@kaizen/draft-button/KaizenDraft/components/GenericButton.module.scss"
        { container = "container"
        , button = "button"
        , primary = "primary"
        , secondary = "secondary"
        , iconButton = "iconButton"
        , reversedIconButton = "reversedIconButton"
        , destructive = "destructive"
        , secondaryDestructive = "secondaryDestructive"
        , form = "form"
        , reversed = "reversed"
        , reverseColorCluny = "reverseColorCluny"
        , reverseColorPeach = "reverseColorPeach"
        , reverseColorSeedling = "reverseColorSeedling"
        , reverseColorWisteria = "reverseColorWisteria"
        , reverseColorYuzu = "reverseColorYuzu"
        , content = "content"
        , label = "label"
        , fullWidth = "fullWidth"
        , iconWrapper = "iconWrapper"
        , destructiveModifier = "destructiveModifier"
        }



-- VARIANTS


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { variant : Variant
    , icon : Maybe SvgAsset
    , iconPosition : IconPosition
    , iconButton : Bool
    , disabled : Bool
    , form : Bool
    , reversed : Bool
    , reverseColor : Maybe BrandColor
    , onClick : Maybe msg
    , onFocus : Maybe msg
    , onBlur : Maybe msg
    , preventKeydownOn : List (Decode.Decoder msg)
    , onMouseDown : Maybe msg
    , href : Maybe String
    , newTabAndIUnderstandTheAccessibilityImplications : Bool
    , id : Maybe String
    , automationId : Maybe String
    , buttonType : Maybe ButtonType
    , fullWidth : Bool
    , destructive : Bool
    }


type Variant
    = Default
    | Primary
    | Secondary
    | Destructive


type IconPosition
    = Start
    | End


type BrandColor
    = Cluny
    | Peach
    | Seedling
    | Wisteria
    | Yuzu


default : Config msg
default =
    Config defaults


defaults : ConfigValue msg
defaults =
    { variant = Default
    , icon = Nothing
    , iconPosition = End
    , iconButton = False
    , disabled = False
    , form = False
    , reversed = False
    , reverseColor = Nothing
    , onClick = Nothing
    , onFocus = Nothing
    , onBlur = Nothing
    , preventKeydownOn = []
    , onMouseDown = Nothing
    , href = Nothing
    , newTabAndIUnderstandTheAccessibilityImplications = False
    , id = Nothing
    , automationId = Nothing
    , buttonType = Nothing
    , fullWidth = False
    , destructive = False
    }


primary : Config msg
primary =
    Config { defaults | variant = Primary }


secondary : Config msg
secondary =
    Config { defaults | variant = Secondary }


destructive : Config msg
destructive =
    Config { defaults | variant = Destructive }


iconButton : SvgAsset -> Config msg
iconButton svgAsset =
    Config { defaults | icon = Just svgAsset, iconButton = True }


destructiveIconButton : SvgAsset -> Config msg
destructiveIconButton svgAsset =
    Config { defaults | icon = Just svgAsset, variant = Destructive, iconButton = True }



-- MODIFIERS


disabled : Bool -> Config msg -> Config msg
disabled value (Config config) =
    Config { config | disabled = value }


icon : SvgAsset -> Config msg -> Config msg
icon svgAsset (Config config) =
    Config { config | icon = Just svgAsset }


iconPosition : IconPosition -> Config msg -> Config msg
iconPosition position (Config config) =
    Config { config | iconPosition = position }


form : Bool -> Config msg -> Config msg
form value (Config config) =
    Config { config | form = value }


reversed : Bool -> Config msg -> Config msg
reversed value (Config config) =
    Config { config | reversed = value }


fullWidth : Bool -> Config msg -> Config msg
fullWidth value (Config config) =
    Config { config | fullWidth = value }


reverseColor : BrandColor -> Config msg -> Config msg
reverseColor value (Config config) =
    Config { config | reverseColor = Just value }


onClick : msg -> Config msg -> Config msg
onClick value (Config config) =
    Config { config | onClick = Just value }


onFocus : msg -> Config msg -> Config msg
onFocus value (Config config) =
    Config { config | onFocus = Just value }


onBlur : msg -> Config msg -> Config msg
onBlur value (Config config) =
    Config { config | onBlur = Just value }


preventKeydownOn : List (Decode.Decoder msg) -> Config msg -> Config msg
preventKeydownOn decoders (Config config) =
    Config { config | preventKeydownOn = decoders }


onMouseDown : msg -> Config msg -> Config msg
onMouseDown value (Config config) =
    Config { config | onMouseDown = Just value }


href : String -> Config msg -> Config msg
href value (Config config) =
    Config { config | href = Just value }


newTabAndIUnderstandTheAccessibilityImplications : Config msg -> Config msg
newTabAndIUnderstandTheAccessibilityImplications (Config config) =
    Config { config | newTabAndIUnderstandTheAccessibilityImplications = True }


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


automationId : String -> Config msg -> Config msg
automationId value (Config config) =
    Config { config | automationId = Just value }


destructiveModifier : Bool -> Config msg -> Config msg
destructiveModifier value (Config config) =
    Config { config | destructive = value }


type ButtonType
    = Submit
    | Reset


buttonType : ButtonType -> Config msg -> Config msg
buttonType value (Config config) =
    Config { config | buttonType = Just value }

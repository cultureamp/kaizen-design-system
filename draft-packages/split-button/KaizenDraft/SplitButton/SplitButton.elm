module KaizenDraft.SplitButton.SplitButton exposing (MenuItem, Msg(..), SplitButton, default, disable, href, init, menuItems, subscriptions, update, view)

import Browser.Events
import CssModules exposing (css)
import Html exposing (Html, a, button, div, span, text)
import Html.Attributes exposing (dir, disabled, style, tabindex)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onClickPreventDefaultAndStopPropagation)
import Html.Extra exposing (static, viewIf)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode exposing (Decoder)
import KaizenDraft.Events.Events exposing (isEscape)



-- DATA


type DropdownMenuVisibility
    = Opening
    | Open
    | Closed


type alias MenuItem menuItemMsg =
    { label : String
    , action : menuItemMsg
    }



-- MODEL


type SplitButton
    = SplitButton
        { dropdownMenuVisibility : DropdownMenuVisibility
        }


init : SplitButton
init =
    SplitButton { dropdownMenuVisibility = Closed }


subscriptions : SplitButton -> Sub (Msg menuItemMsg)
subscriptions (SplitButton splitButton) =
    case splitButton.dropdownMenuVisibility of
        Opening ->
            Browser.Events.onAnimationFrame (\_ -> FinishOpenDropdownMenu)

        Open ->
            Sub.batch
                [ Browser.Events.onClick (Decode.succeed CloseDropdownMenu)
                , Browser.Events.onKeyDown <| isEscape CloseDropdownMenu
                ]

        Closed ->
            Sub.none



-- CONFIG


type Config menuItemMsg
    = Config (ConfigValue menuItemMsg)


type alias ConfigValue menuItemMsg =
    { href : String
    , menuItems : List (MenuItem (Msg menuItemMsg))
    , dir : String
    , disabled : Bool
    }


default : Config menuItemMsg
default =
    Config { href = "", menuItems = [], dir = "ltr", disabled = False }



-- MODIFIERS


menuItems : List (MenuItem menuItemMsg) -> Config menuItemMsg -> Config menuItemMsg
menuItems items (Config config) =
    let
        menuItems_ =
            items
                |> List.map
                    (\item -> { label = item.label, action = MenuItemClicked item.action })
    in
    Config { config | menuItems = menuItems_ }


href : String -> Config menuItemMsg -> Config menuItemMsg
href value (Config config) =
    Config { config | href = value }


disable : Bool -> Config menuItemMsg -> Config menuItemMsg
disable value (Config config) =
    Config { config | disabled = value }



--UPDATE


type Msg menuItemMsg
    = OpenDropdownMenu
    | FinishOpenDropdownMenu
    | CloseDropdownMenu
    | MenuItemClicked menuItemMsg
    | NoOp


update : Msg menuItemMsg -> SplitButton -> ( SplitButton, Cmd (Msg menuItemMsg) )
update msg (SplitButton model) =
    case msg of
        OpenDropdownMenu ->
            ( SplitButton { model | dropdownMenuVisibility = Opening }, Cmd.none )

        FinishOpenDropdownMenu ->
            ( SplitButton { model | dropdownMenuVisibility = Open }, Cmd.none )

        CloseDropdownMenu ->
            ( SplitButton { model | dropdownMenuVisibility = Closed }, Cmd.none )

        MenuItemClicked _ ->
            ( SplitButton model, Cmd.none )

        NoOp ->
            ( SplitButton model, Cmd.none )



-- VIEW


disabledView : Config menuItemMsg -> String -> Html (Msg menuItemMsg)
disabledView (Config config) label =
    let
        disabledPrimaryButton =
            div
                [ styles.classList
                    [ ( .default, True )
                    , ( .disabled, True )
                    ]
                ]
                [ span [ styles.class .label ]
                    [ text label ]
                ]

        disabledDropDown =
            div [ styles.class .dropdown ]
                [ button
                    [ styles.classList [ ( .dropdownButton, True ), ( .dropdownButtonDefault, True ), ( .disabled, True ) ]
                    ]
                    [ span
                        [ styles.class .dropdownIcon ]
                        [ Icon.view Icon.presentation
                            (svgAsset "@kaizen/component-library/icons/chevron-down.icon.svg")
                            |> static
                        ]
                    ]
                ]
    in
    div [ styles.class .root, dir config.dir ]
        [ div [ styles.class .buttonsContainer ]
            [ disabledPrimaryButton
            , disabledDropDown
            ]
        ]


enabledView : Config menuItemMsg -> SplitButton -> String -> Html (Msg menuItemMsg)
enabledView (Config config) (SplitButton splitButton) label =
    div [ styles.class .root, dir config.dir ]
        [ div [ styles.class .buttonsContainer ]
            [ primaryActionButtonView config.href label
            , dropdownView splitButton.dropdownMenuVisibility
            , viewIf (splitButton.dropdownMenuVisibility == Open) <|
                dropdownMenuView config.menuItems
            ]
        ]


view : Config menuItemMsg -> SplitButton -> String -> Html (Msg menuItemMsg)
view ((Config unwrappedConfig) as config) splitButton label =
    if unwrappedConfig.disabled then
        disabledView config label

    else
        enabledView config splitButton label


primaryActionButtonView : String -> String -> Html (Msg menuItemMsg)
primaryActionButtonView url label =
    a [ styles.class .default, Html.Attributes.href url ]
        [ span [ styles.class .label ]
            [ text label ]
        ]


dropdownView : DropdownMenuVisibility -> Html (Msg msg)
dropdownView visibility =
    let
        onClickAttribute =
            case visibility of
                Opening ->
                    onClick NoOp

                Open ->
                    onClick CloseDropdownMenu

                Closed ->
                    onClick OpenDropdownMenu
    in
    div [ styles.class .dropdown ]
        [ button
            [ onClickAttribute
            , styles.classList [ ( .dropdownButton, True ), ( .dropdownButtonDefault, True ) ]
            ]
            [ span
                [ styles.class .dropdownIcon ]
                [ Icon.view Icon.presentation
                    (svgAsset "@kaizen/component-library/icons/chevron-down.icon.svg")
                    |> static
                ]
            ]
        ]


dropdownMenuView : List (MenuItem (Msg menuItemMsg)) -> Html (Msg menuItemMsg)
dropdownMenuView menuItems_ =
    div
        [ styles.class .menuContainer
        , style "right" "0px"
        , style "top" "46px"
        ]
        [ menuListView menuItems_ ]


menuListView : List (MenuItem (Msg menuItemMsg)) -> Html (Msg menuItemMsg)
menuListView menuItems_ =
    div [ styles.class .menuList ]
        (menuItems_ |> List.map menuItemView)


menuItemView : MenuItem (Msg menuItemMsg) -> Html (Msg menuItemMsg)
menuItemView { label, action } =
    div
        [ styles.class .menuItem
        , onClick action
        , tabindex 0
        ]
        [ text label ]


styles =
    css "@kaizen/draft-split-button/KaizenDraft/SplitButton/styles.scss"
        { root = "root"
        , buttonsContainer = "buttonsContainer"
        , label = "label"
        , default = "default"
        , disabled = "disabled"
        , dropdown = "dropdown"
        , dropdownButton = "dropdownButton"
        , dropdownButtonDefault = "dropdownButtonDefault"
        , dropdownIcon = "dropdownIcon"
        , menuContainer = "menuContainer"
        , menuList = "menuList"
        , menuItem = "menuItem"
        }

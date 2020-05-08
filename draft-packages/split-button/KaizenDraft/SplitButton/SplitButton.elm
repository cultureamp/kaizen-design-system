module KaizenDraft.SplitButton.SplitButton exposing (Msg(..), SplitButton, default, href, init, menuItems, subscriptions, update, view)

import Browser.Events
import CssModules exposing (css)
import Html exposing (Html, a, button, div, span, text)
import Html.Attributes exposing (dir, style, tabindex)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onClickPreventDefaultAndStopPropagation)
import Html.Extra exposing (static, viewIf)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode exposing (Decoder)



-- DATA


type alias SplitButtonId =
    String


type DropdownMenuVisibility
    = Open SplitButtonId
    | Closed


type alias MenuItem menuItemMsg =
    { label : String
    , action : menuItemMsg
    }



-- MODEL


type SplitButton
    = SplitButton
        { id : SplitButtonId
        , dropdownMenuVisibility : DropdownMenuVisibility
        , disabled : Bool
        }


init : SplitButton
init =
    SplitButton { id = "", dropdownMenuVisibility = Closed, disabled = False }


subscriptions : Sub (Msg menuItemMsg)
subscriptions =
    let
        keyDecoder : Decoder (Msg menuItemMsg)
        keyDecoder =
            Decode.map toMsg (Decode.field "key" Decode.string)

        toMsg : String -> Msg menuItemMsg
        toMsg string =
            case string of
                "Escape" ->
                    CloseDropdownMenu

                _ ->
                    NoOp
    in
    Sub.batch
        [ Browser.Events.onClick (Decode.succeed CloseDropdownMenu)
        , Browser.Events.onKeyDown keyDecoder
        ]



-- CONFIG


type Config menuItemMsg
    = Config (ConfigValue menuItemMsg)


type alias ConfigValue menuItemMsg =
    { href : String
    , menuItems : List (MenuItem (Msg menuItemMsg))
    , dir : String
    }


default : Config menuItemMsg
default =
    Config { href = "", menuItems = [], dir = "ltr" }



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



--UPDATE


type Msg menuItemMsg
    = ToggleDropdownMenu
    | CloseDropdownMenu
    | MenuItemClicked menuItemMsg
    | NoOp


update : Msg menuItemMsg -> SplitButton -> ( SplitButton, Cmd (Msg menuItemMsg) )
update msg (SplitButton model) =
    case msg of
        ToggleDropdownMenu ->
            let
                newVisibility =
                    case model.dropdownMenuVisibility of
                        Closed ->
                            Open ""

                        Open _ ->
                            Closed
            in
            ( SplitButton { model | dropdownMenuVisibility = newVisibility }, Cmd.none )

        CloseDropdownMenu ->
            ( SplitButton { model | dropdownMenuVisibility = Closed }, Cmd.none )

        MenuItemClicked _ ->
            ( SplitButton model, Cmd.none )

        NoOp ->
            ( SplitButton model, Cmd.none )



-- VIEW


view : Config menuItemMsg -> SplitButton -> String -> Html (Msg menuItemMsg)
view (Config config) (SplitButton splitButton) label =
    div [ styles.class .root, dir config.dir ]
        [ div [ styles.class .buttonsContainer ]
            [ primaryActionButtonView config.href label
            , dropdownView
            , viewIf (splitButton.dropdownMenuVisibility == Open "") <|
                dropdownMenuView config.menuItems
            ]
        ]


primaryActionButtonView : String -> String -> Html (Msg menuItemMsg)
primaryActionButtonView url label =
    a [ styles.class .default, Html.Attributes.href url ]
        [ span [ styles.class .label ]
            [ text label ]
        ]


dropdownView : Html (Msg msg)
dropdownView =
    div [ styles.class .dropdown ]
        [ button
            [ onClickPreventDefaultAndStopPropagation ToggleDropdownMenu
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
        , style "top" "42px"
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
        , dropdown = "dropdown"
        , dropdownButton = "dropdownButton"
        , dropdownButtonDefault = "dropdownButtonDefault"
        , dropdownIcon = "dropdownIcon"
        , menuContainer = "menuContainer"
        , menuList = "menuList"
        , menuItem = "menuItem"
        }

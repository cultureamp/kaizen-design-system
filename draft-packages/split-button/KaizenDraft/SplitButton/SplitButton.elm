module KaizenDraft.SplitButton.SplitButton exposing (Msg(..), SplitButton, default, href, init, menuItems, subscriptions, update, view)

import Browser.Events
import CssModules exposing (css)
import Html exposing (Html, a, button, div, span, text)
import Html.Attributes exposing (dir, style)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onClickPreventDefaultAndStopPropagation)
import Html.Extra exposing (static, viewIf)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode exposing (Decoder)
import KaizenDraft.MenuList.MenuList as MenuList



-- MODEL


type alias SplitButtonId =
    String


type DropdownMenuVisibility
    = Open SplitButtonId
    | Closed


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
            case Debug.log "key" string of
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
    , menuItems : List (MenuList.MenuItemConfig menuItemMsg)
    , dir : String
    }


default : Config menuItemMsg
default =
    Config { href = "", menuItems = [], dir = "ltr" }


menuItems : List (MenuList.MenuItemConfig menuItemMsg) -> Config menuItemMsg -> Config menuItemMsg
menuItems items (Config config) =
    Config { config | menuItems = items }



-- MODIFIERS


href : String -> Config menuItemMsg -> Config menuItemMsg
href value (Config config) =
    Config { config | href = value }



--UPDATE


type Msg menuItemMsg
    = ToggleDropdownMenu
    | CloseDropdownMenu
    | MenuItem menuItemMsg
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

        MenuItem _ ->
            ( SplitButton model, Cmd.none )

        NoOp ->
            ( SplitButton model, Cmd.none )



-- VIEW


view : Config menuItemMsg -> SplitButton -> String -> Html (Msg menuItemMsg)
view (Config config) (SplitButton splitButton) label =
    let
        mappedMenuItems : List (MenuList.MenuItemConfig (Msg menuItemMsg))
        mappedMenuItems =
            config.menuItems
                |> List.map
                    (\item -> { label = item.label, onClickMsg = MenuItem item.onClickMsg })
    in
    div [ styles.class .root, dir config.dir ]
        [ div [ styles.class .buttonsContainer ]
            [ viewPrimaryActionButton config.href label
            , viewDropdown
            , viewIf (splitButton.dropdownMenuVisibility == Open "") <|
                viewDropdownMenu mappedMenuItems
            ]
        ]


viewPrimaryActionButton : String -> String -> Html (Msg menuItemMsg)
viewPrimaryActionButton url label =
    a [ styles.class .default, Html.Attributes.href url ]
        [ span [ styles.class .label ]
            [ text label ]
        ]


viewDropdown : Html (Msg msg)
viewDropdown =
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


viewDropdownMenu : List (MenuList.MenuItemConfig (Msg menuItemMsg)) -> Html (Msg menuItemMsg)
viewDropdownMenu menuItems_ =
    div
        [ styles.class .menuContainer
        , style "right" "0px"
        , style "top" "40px"
        ]
        [ MenuList.view { items = menuItems_ } ]


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
        }

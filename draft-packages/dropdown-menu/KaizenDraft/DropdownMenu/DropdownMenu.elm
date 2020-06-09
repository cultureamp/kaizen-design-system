module KaizenDraft.DropdownMenu.DropdownMenu exposing
    ( Msg
    , State(..)
    , init
    , subscriptions
    , toggle
    , update
    , view
    )

import CssModules exposing (css)
import Elm18Compatible.Html.Attributes exposing (style)
import Elm18Compatible.Html.Events exposing (onWithOptions)
import Html exposing (Attribute, Html, a, article, button, div, h1, h2, main_, option, p, progress, select, span, table, tbody, td, text, th, thead, tr)
import Html.Attributes as Attributes exposing (attribute, selected, tabindex, title)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode
import KaizenDraft.Dropdown.Dropdown as Dropdown
import KaizenDraft.MenuList.MenuList as MenuList


type State
    = State Dropdown.State


init : State
init =
    State Dropdown.init


isOpen : String -> State -> Bool
isOpen id (State dropdownState) =
    Dropdown.isOpen dropdownState id


type Msg
    = Msg Dropdown.Msg


update : Msg -> State -> State
update (Msg msg) (State state) =
    State <| Dropdown.update state msg


toggle : String -> State -> State
toggle id (State state) =
    State <| Dropdown.update state (Dropdown.Toggle id)


subscriptions : Sub Msg
subscriptions =
    Dropdown.subscriptions |> Sub.map Msg


view :
    { label : String
    , menuItems : List (MenuList.MenuItemConfig msg)
    , toggleDropdownMsg : msg
    , toggleButtonAutomationId : String
    , dropdownId : String
    }
    -> State
    -> Html msg
view args state =
    div
        [ styles.class .dropdown ]
        [ button
            [ onClickWithStopAndPrevent args.toggleDropdownMsg
            , attribute "data-automation-id" args.toggleButtonAutomationId
            , styles.class .dropdownButton
            , styles.class .dropdownControlAction
            , styles.class .buttonReset
            , tabindex 0
            ]
            [ span [ styles.class .dropdownLabel ] [ text args.label ]
            , span
                [ styles.class .chevronIcon ]
                [ Icon.view Icon.presentation
                    (svgAsset "@kaizen/component-library/icons/chevron-down.icon.svg")
                    |> Html.map never
                ]
            ]
        , if state |> isOpen args.dropdownId then
            div
                [ styles.class .menuContainer
                , style [ ( "right", "0px" ) ]
                ]
                [ MenuList.view { items = args.menuItems } ]

          else
            text ""
        ]


onClickWithStopAndPrevent : msg -> Attribute msg
onClickWithStopAndPrevent msg =
    onWithOptions
        "click"
        { preventDefault = True, stopPropagation = True }
        (Decode.succeed msg)


styles =
    css "@kaizen/draft-dropdown-menu/KaizenDraft/DropdownMenu/DropdownMenu.scss"
        { dropdown = "dropdown"
        , dropdownControlAction = "dropdownControlAction"
        , buttonReset = "buttonReset"
        , dropdownButton = "dropdownButton"
        , dropdownIcon = "dropdownIcon"
        , dropdownLabel = "dropdownLabel"
        , chevronIcon = "chevronIcon"
        , menuContainer = "menuContainer"
        }

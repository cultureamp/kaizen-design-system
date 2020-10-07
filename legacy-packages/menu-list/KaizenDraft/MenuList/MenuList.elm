module KaizenDraft.MenuList.MenuList exposing (MenuItemConfig, view)

import CssModules exposing (css)
import Html exposing (Html, a, div, text)
import Html.Attributes exposing (tabindex)
import Html.Events exposing (onClick)


type alias Config msg =
    { items : List (MenuItemConfig msg)
    }


view : Config msg -> Html msg
view { items } =
    div
        [ menuListCss.class .menuList ]
        (List.map item items)


type alias MenuItemConfig msg =
    { label : String, onClickMsg : msg }


item : MenuItemConfig msg -> Html msg
item { onClickMsg, label } =
    a
        [ menuListCss.class .menuItem
        , onClick onClickMsg
        , tabindex 0
        ]
        [ text label ]


menuListCss : CssModules.Helpers { menuList : String, menuItem : String } msg
menuListCss =
    css "@kaizen/draft-menu-list/KaizenDraft/MenuList/MenuList.scss"
        { menuList = "menuList"
        , menuItem = "menuItem"
        }

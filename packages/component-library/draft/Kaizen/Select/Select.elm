module Kaizen.Select.Select exposing
    ( Action(..)
    , Msg
    , SelectType(..)
    , State
    , Style(..)
    , initState
    , isLoading
    , menuItems
    , multi
    , placeholder
    , searchable
    , selectIdentifier
    , selectType
    , single
    , state
    , update
    , usePorts
    , view
    )

import Browser.Dom as Dom
import CssModules exposing (css)
import Html exposing (Html, div, input, span, text)
import Html.Attributes exposing (id, readonly, style, tabindex, value)
import Html.Attributes.Aria exposing (role)
import Html.Events exposing (on, onBlur, onFocus, preventDefaultOn)
import Html.Extra exposing (viewIf)
import Html.Keyed as Keyed
import Html.Lazy exposing (lazy)
import Icon.Icon as Icon
import Icon.SvgAsset exposing (svgAsset)
import Json.Decode as Decode
import Json.Encode as Encode
import Kaizen.Events.Events as Events
import Kaizen.Select.Ports as Ports
import Kaizen.Select.SelectInput as SelectInput
import Kaizen.Tag.Tag as Tag
import List.Extra as ListExtra
import Task


type Config item
    = Config (Configuration item)


type SelectId
    = SelectId String


type Msg item
    = InputChanged SelectId String
    | InputReceivedFocused (Maybe SelectId)
    | SelectedItem item
    | DeselectedMultiItem item
    | SearchableSelectContainerClicked SelectId
    | UnsearchableSelectContainerClicked SelectId
    | ToggleMenuAtKey SelectId
    | OnInputFocused (Result Dom.Error ())
    | OnInputBlurred (Maybe SelectId)
    | MenuItemClickFocus Int
    | MultiItemFocus Int
    | InputMousedowned
    | ClearFocusedItem
    | HoverFocused Int
    | EnterSelect item
    | KeyboardDown SelectId Int
    | KeyboardUp SelectId Int
    | OpenMenu
    | CloseMenu
    | FocusMenuViewport SelectId (Result Dom.Error ( MenuListElement, MenuItemElement ))
    | MenuListScrollTop Float
    | SetMouseMenuNavigation
    | DoNothing


type Action item
    = InputChange String
    | Select item
    | Deselect item
    | Internal


type Style
    = Bold
    | Faded
    | FadedBold


type State
    = State SelectState


type InitialMousedown
    = MultiItemMousedown Int
    | MenuItemMousedown Int
    | InputMousedown
    | ContainerMousedown
    | NothingMousedown


type Direction
    = Up
    | Down


type MenuItemVisibility
    = Within
    | Above
    | Below
    | Both


type MenuListElement
    = MenuListElement Dom.Element


type MenuItemElement
    = MenuItemElement Dom.Element



-- VIEW FUNCTiON DATA
-- These data structures make using 'lazy' function a breeze


type alias ViewMenuItemData item =
    { index : Int
    , itemSelected : Bool
    , isClickFocused : Bool
    , menuItemIsTarget : Bool
    , selectId : SelectId
    , menuItem : MenuItem item
    , menuNavigation : MenuNavigation
    , initialMousedown : InitialMousedown
    }


type alias ViewMenuData item =
    { variant : Variant item
    , selectId : SelectId
    , viewableMenuItems : List (MenuItem item)
    , initialMousedown : InitialMousedown
    , activeTargetIndex : Int
    , menuNavigation : MenuNavigation
    }


type alias ViewSelectInputData item =
    { id : String
    , maybeInputValue : Maybe String
    , maybeActiveTarget : Maybe (MenuItem item)
    , totalViewableMenuItems : Int
    , menuOpen : Bool
    , usePorts : Bool
    }


type alias ViewDummyInputData item =
    { id : String
    , maybeTargetItem : Maybe (MenuItem item)
    , totalViewableMenuItems : Int
    , menuOpen : Bool
    }


type alias MenuListBoundaries =
    ( Float, Float )


type alias Configuration item =
    { variant : Variant item
    , selectType : SelectType
    , isLoading : Bool
    , state : State
    , placeholder : ( String, Style )
    , menuItems : List (MenuItem item)
    , searchable : Bool
    }


type alias MultiSelectTagConfig =
    { truncationWidth : Maybe Float }


type SelectType
    = Default
    | Cautionary
    | Error


type alias MenuItemType =
    SelectType


type MenuNavigation
    = Keyboard
    | Mouse


type alias SelectState =
    { inputValue : Maybe String
    , menuOpen : Bool
    , initialMousedown : InitialMousedown
    , controlFocused : Bool
    , activeTargetIndex : Int
    , menuViewportFocusNodes : Maybe ( MenuListElement, MenuItemElement )
    , menuListScrollTop : Float
    , menuNavigation : MenuNavigation
    , usePorts : Bool
    }



{-
   'item' will be the type of data structure that can be selected. This will be surfaced in an Action msg.

   'label' is a string representation that will show both in the menu and the selected value.

   menuItem = { item = { country = "Australia", hemisphere = "southern"}. label = "Australia" }

-}


type alias MenuItem item =
    { item : item
    , label : String
    , menuItemType : MenuItemType
    }



-- DEFAULTS


initState : State
initState =
    State
        { inputValue = Nothing
        , menuOpen = False
        , initialMousedown = NothingMousedown
        , controlFocused = False

        -- Always focus the first menu item by default. This facilitates auto selecting the first item on Enter
        , activeTargetIndex = 0
        , menuViewportFocusNodes = Nothing
        , menuListScrollTop = 0
        , menuNavigation = Mouse
        , usePorts = False
        }


defaults : Configuration item
defaults =
    { variant = Single Nothing
    , selectType = Default
    , isLoading = False
    , state = initState
    , placeholder = ( "Select...", Faded )
    , menuItems = []
    , searchable = True
    }



-- VARIANT


type Variant item
    = Single (Maybe (MenuItem item))
    | Multi MultiSelectTagConfig (List (MenuItem item))


single : Maybe (MenuItem item) -> Config item
single maybeSelectedItem =
    Config { defaults | variant = Single maybeSelectedItem }


multi : MultiSelectTagConfig -> List (MenuItem item) -> Config item
multi multiSelectTagConfig selectedItems =
    Config { defaults | variant = Multi multiSelectTagConfig selectedItems }



-- MODIFIERS


isLoading : Bool -> Config item -> Config item
isLoading predicate (Config config) =
    Config { config | isLoading = predicate }


state : State -> Config item -> Config item
state state_ (Config config) =
    Config { config | state = state_ }


selectType : SelectType -> Config msg -> Config msg
selectType value (Config config) =
    Config { config | selectType = value }


searchable : Bool -> Config item -> Config item
searchable predicate (Config config) =
    Config { config | searchable = predicate }



-- This will show when there is no defaultValue or clearable == True
-- and the default value is cleared


placeholder : ( String, Style ) -> Config item -> Config item
placeholder plc (Config config) =
    Config { config | placeholder = plc }


menuItems : List (MenuItem item) -> Config item -> Config item
menuItems items (Config config) =
    Config { config | menuItems = items }


selectIdentifier : String -> SelectId
selectIdentifier id_ =
    SelectId id_


usePorts : Bool -> State -> State
usePorts predicate (State state_) =
    State { state_ | usePorts = predicate }



-- UPDATE


update : Msg value -> State -> ( Action value, State, Cmd (Msg value) )
update msg (State state_) =
    case msg of
        EnterSelect item ->
            let
                ( _, State stateWithClosedMenu, cmdWithClosedMenu ) =
                    update CloseMenu (State state_)
            in
            ( Select item
            , State
                { stateWithClosedMenu
                    | initialMousedown = NothingMousedown
                    , inputValue = Nothing
                }
            , cmdWithClosedMenu
            )

        HoverFocused i ->
            ( Internal, State { state_ | activeTargetIndex = i }, Cmd.none )

        InputChanged selectId inputValue ->
            let
                ( _, State stateWithOpenMenu, cmdWithOpenMenu ) =
                    update OpenMenu (State state_)
            in
            ( InputChange inputValue, State { stateWithOpenMenu | inputValue = Just inputValue }, cmdWithOpenMenu )

        InputReceivedFocused maybeSelectId ->
            case maybeSelectId of
                Just selectId ->
                    let
                        ports =
                            if state_.usePorts then
                                Ports.kaizenConnectSelectInputDynamicWidth <| buildEncodedValueForPorts selectId

                            else
                                Cmd.none
                    in
                    ( Internal, State { state_ | controlFocused = True }, ports )

                Nothing ->
                    ( Internal, State { state_ | controlFocused = True }, Cmd.none )

        SelectedItem item ->
            let
                ( _, State stateWithClosedMenu, cmdWithClosedMenu ) =
                    update CloseMenu (State state_)
            in
            ( Select item
            , State
                { stateWithClosedMenu
                    | initialMousedown = NothingMousedown
                    , inputValue = Nothing
                }
            , cmdWithClosedMenu
            )

        DeselectedMultiItem deselectedItem ->
            ( Deselect deselectedItem, State { state_ | initialMousedown = NothingMousedown }, Cmd.none )

        -- focusing the input is usually the last thing that happens after all the mousedown events.
        -- Its important to ensure we have a NothingInitClicked so that if the user clicks outside of the
        -- container it will close the menu and un focus the container. OnInputBlurred treats ContainerInitClick and
        -- MutiItemInitClick as special cases to avoid flickering when an input gets blurred then focused again.
        OnInputFocused focusResult ->
            case focusResult of
                Ok () ->
                    ( Internal, State { state_ | initialMousedown = NothingMousedown }, Cmd.none )

                Err _ ->
                    ( Internal, State state_, Cmd.none )

        FocusMenuViewport selectId (Ok ( menuListElem, menuItemElem )) ->
            let
                ( viewportFocusCmd, newViewportY ) =
                    menuItemOrientationInViewport menuListElem menuItemElem
                        |> setMenuViewportPosition selectId state_.menuListScrollTop menuListElem menuItemElem
            in
            ( Internal, State { state_ | menuViewportFocusNodes = Just ( menuListElem, menuItemElem ), menuListScrollTop = newViewportY }, viewportFocusCmd )

        -- If the menu list element was not found it likely has no viewable menu items.
        -- In this case the menu does not render therefore no id is present on menu element.
        FocusMenuViewport _ (Err _) ->
            ( Internal, State { state_ | menuViewportFocusNodes = Nothing }, Cmd.none )

        DoNothing ->
            ( Internal, State state_, Cmd.none )

        OnInputBlurred maybeSelectId ->
            let
                ( _, State stateWithClosedMenu, cmdWithClosedMenu ) =
                    update CloseMenu (State state_)

                ( updatedState, updatedCmds ) =
                    case state_.initialMousedown of
                        ContainerMousedown ->
                            ( { state_ | inputValue = Nothing }, Cmd.none )

                        MultiItemMousedown _ ->
                            ( state_, Cmd.none )

                        _ ->
                            ( { stateWithClosedMenu
                                | initialMousedown = NothingMousedown
                                , controlFocused = False
                                , inputValue = Nothing
                              }
                            , cmdWithClosedMenu
                            )

                ports =
                    case maybeSelectId of
                        Just id_ ->
                            if state_.usePorts then
                                Ports.kaizenDisconnectSelectInputDynamicWidth <| buildEncodedValueForPorts id_

                            else
                                Cmd.none

                        Nothing ->
                            Cmd.none
            in
            ( Internal
            , State updatedState
            , Cmd.batch [ updatedCmds, ports ]
            )

        MenuItemClickFocus i ->
            ( Internal, State { state_ | initialMousedown = MenuItemMousedown i }, Cmd.none )

        MultiItemFocus index ->
            ( Internal, State { state_ | initialMousedown = MultiItemMousedown index }, Cmd.none )

        InputMousedowned ->
            ( Internal, State { state_ | initialMousedown = InputMousedown }, Cmd.none )

        ClearFocusedItem ->
            ( Internal, State { state_ | initialMousedown = NothingMousedown }, Cmd.none )

        SearchableSelectContainerClicked (SelectId id) ->
            let
                inputId =
                    SelectInput.inputId id

                ( _, State stateWithOpenMenu, cmdWithOpenMenu ) =
                    update OpenMenu (State state_)

                ( _, State stateWithClosedMenu, cmdWithClosedMenu ) =
                    update CloseMenu (State state_)

                ( updatedState, updatedCmds ) =
                    case state_.initialMousedown of
                        -- A mousedown on a multi tag dismissible icon has been registered. This will
                        -- bubble and fire the the mousedown on the container div which toggles the menu.
                        -- To avoid the annoyance of opening and closing the menu whenever a multi tag item is dismissed
                        -- we just want to leave the menu open which it will be when it reaches here.
                        MultiItemMousedown _ ->
                            ( state_, Cmd.none )

                        -- This is set by a mousedown event in the input. Because the container mousedown will also fire
                        -- as a result of bubbling we want to ensure that the preventDefault on the container is set to
                        -- false and allow the input to do all the native click things i.e. double click to select text.
                        -- If the initClicked values are InputInitClick || NothingInitClick we will not preventDefault.
                        InputMousedown ->
                            ( { stateWithOpenMenu | initialMousedown = NothingMousedown }, cmdWithOpenMenu )

                        -- When no container children i.e. tag, input, have initiated a click, then this means a click on the container itself
                        -- has been initiated.
                        NothingMousedown ->
                            if state_.menuOpen then
                                ( { stateWithClosedMenu | initialMousedown = ContainerMousedown }, cmdWithClosedMenu )

                            else
                                ( { stateWithOpenMenu | initialMousedown = ContainerMousedown }, cmdWithOpenMenu )

                        ContainerMousedown ->
                            if state_.menuOpen then
                                ( { stateWithClosedMenu | initialMousedown = NothingMousedown }, cmdWithClosedMenu )

                            else
                                ( { stateWithOpenMenu | initialMousedown = NothingMousedown }, cmdWithOpenMenu )

                        _ ->
                            if state_.menuOpen then
                                ( stateWithClosedMenu, cmdWithClosedMenu )

                            else
                                ( stateWithOpenMenu, cmdWithOpenMenu )
            in
            ( Internal, State { updatedState | controlFocused = True }, Cmd.batch [ updatedCmds, Task.attempt OnInputFocused (Dom.focus inputId) ] )

        UnsearchableSelectContainerClicked (SelectId id) ->
            let
                ( _, State stateWithOpenMenu, cmdWithOpenMenu ) =
                    update OpenMenu (State state_)

                ( _, State stateWithClosedMenu, cmdWithClosedMenu ) =
                    update CloseMenu (State state_)

                ( updatedState, updatedCmd ) =
                    if state_.menuOpen then
                        ( stateWithClosedMenu, cmdWithClosedMenu )

                    else
                        ( stateWithOpenMenu, cmdWithOpenMenu )
            in
            ( Internal, State { updatedState | controlFocused = True }, Cmd.batch [ updatedCmd, Task.attempt OnInputFocused (Dom.focus (dummyInputId <| SelectId id)) ] )

        ToggleMenuAtKey selectId ->
            let
                ( _, State stateWithOpenMenu, cmdWithOpenMenu ) =
                    update OpenMenu (State state_)

                ( _, State stateWithClosedMenu, cmdWithClosedMenu ) =
                    update CloseMenu (State state_)

                ( updatedState, updatedCmd ) =
                    if state_.menuOpen then
                        ( stateWithClosedMenu, cmdWithClosedMenu )

                    else
                        ( stateWithOpenMenu, cmdWithOpenMenu )
            in
            ( Internal, State { updatedState | controlFocused = True }, updatedCmd )

        KeyboardDown selectId totalTargetCount ->
            let
                ( _, State stateWithOpenMenu, cmdWithOpenMenu ) =
                    update OpenMenu (State state_)

                nextActiveTargetIndex =
                    calculateNextActiveTarget state_.activeTargetIndex totalTargetCount Down

                nodeQueryForViewportFocus =
                    if shouldQueryNextTargetElement nextActiveTargetIndex state_ then
                        queryNodesForViewportFocus selectId nextActiveTargetIndex

                    else
                        Cmd.none

                ( updatedState, updatedCmd ) =
                    if state_.menuOpen then
                        ( { state_ | activeTargetIndex = nextActiveTargetIndex, menuNavigation = Keyboard }, nodeQueryForViewportFocus )

                    else
                        ( { stateWithOpenMenu | menuNavigation = Keyboard }, cmdWithOpenMenu )
            in
            ( Internal, State updatedState, updatedCmd )

        KeyboardUp selectId totalTargetCount ->
            let
                ( _, State stateWithOpenMenu, cmdWithOpenMenu ) =
                    update OpenMenu (State state_)

                nextActiveTargetIndex =
                    calculateNextActiveTarget state_.activeTargetIndex totalTargetCount Up

                nodeQueryForViewportFocus =
                    if shouldQueryNextTargetElement nextActiveTargetIndex state_ then
                        queryNodesForViewportFocus selectId nextActiveTargetIndex

                    else
                        Cmd.none

                ( updatedState, updatedCmd ) =
                    if state_.menuOpen then
                        ( { state_ | activeTargetIndex = nextActiveTargetIndex, menuNavigation = Keyboard }, nodeQueryForViewportFocus )

                    else
                        ( { stateWithOpenMenu | menuNavigation = Keyboard }, cmdWithOpenMenu )
            in
            ( Internal, State updatedState, updatedCmd )

        OpenMenu ->
            ( Internal, State { state_ | menuOpen = True, activeTargetIndex = 0 }, Cmd.none )

        CloseMenu ->
            ( Internal
            , State
                { state_
                    | menuOpen = False
                    , activeTargetIndex = 0
                    , menuViewportFocusNodes = Nothing
                    , menuListScrollTop = 0
                    , menuNavigation = Mouse
                }
            , Cmd.none
            )

        MenuListScrollTop position ->
            ( Internal, State { state_ | menuListScrollTop = position }, Cmd.none )

        SetMouseMenuNavigation ->
            ( Internal, State { state_ | menuNavigation = Mouse }, Cmd.none )



-- The id value needs to be a unique id


view : Config value -> SelectId -> Html (Msg value)
view (Config config) selectId =
    let
        (State state_) =
            config.state

        enterSelectTargetItem =
            if state_.menuOpen && not (List.isEmpty viewableMenuItems) then
                ListExtra.getAt state_.activeTargetIndex viewableMenuItems

            else
                Nothing

        resolveContainerMsg =
            if config.searchable then
                SearchableSelectContainerClicked selectId

            else
                UnsearchableSelectContainerClicked selectId

        viewableMenuItems =
            buildMenuItems config state_

        totalMenuItems =
            List.length viewableMenuItems

        resolveLoadingSpinner =
            if config.isLoading && config.searchable then
                viewLoading

            else
                text ""

        buildMulti =
            case config.variant of
                Multi tagConfig multiSelectedValues ->
                    List.indexedMap (viewMultiValue tagConfig state_.initialMousedown) multiSelectedValues

                Single _ ->
                    [ text "" ]

        resolvePlaceholder =
            case config.variant of
                Multi _ [] ->
                    viewPlaceholder config

                Multi _ _ ->
                    text ""

                Single (Just v) ->
                    viewSelectedPlaceholder v

                Single Nothing ->
                    viewPlaceholder config

        buildPlaceholder =
            if isEmptyInputValue state_.inputValue then
                resolvePlaceholder

            else
                text ""

        buildInput =
            if config.searchable then
                lazy viewSelectInput
                    (ViewSelectInputData (getSelectId selectId) state_.inputValue enterSelectTargetItem totalMenuItems state_.menuOpen state_.usePorts)

            else
                lazy viewDummyInput
                    (ViewDummyInputData
                        (getSelectId selectId)
                        enterSelectTargetItem
                        totalMenuItems
                        state_.menuOpen
                    )

        preventDefault =
            if config.searchable then
                case state_.initialMousedown of
                    NothingMousedown ->
                        False

                    InputMousedown ->
                        False

                    _ ->
                        True

            else
                True
    in
    div [ styles.class .container ]
        [ div
            [ styles.classList
                [ ( .control, True )
                , ( .isFocused, state_.controlFocused )
                , ( .cautionary, config.selectType == Cautionary && state_.controlFocused == False )
                , ( .error, config.selectType == Error && state_.controlFocused == False )
                ]
            , preventDefaultOn "mousedown" <|
                Decode.map
                    (\msg ->
                        ( msg
                        , preventDefault
                        )
                    )
                <|
                    Decode.succeed resolveContainerMsg
            ]
            [ div [ styles.class .valueContainer ]
                [ span [] buildMulti
                , buildPlaceholder
                , buildInput
                ]
            , div [ styles.class .indicators ]
                [ div [ styles.class .indicatorContainer ]
                    [ resolveLoadingSpinner
                    , span [ styles.class .iconButton ]
                        [ Icon.view Icon.presentation
                            (svgAsset "@kaizen/component-library/icons/chevron-down.icon.svg")
                            |> Html.map never
                        ]
                    ]
                ]
            ]
        , viewIf state_.menuOpen
            (lazy viewMenu
                (ViewMenuData
                    config.variant
                    selectId
                    viewableMenuItems
                    state_.initialMousedown
                    state_.activeTargetIndex
                    state_.menuNavigation
                )
            )
        ]



-- VIEWS


viewLoading : Html msg
viewLoading =
    span [ styles.class .iconButton ]
        [ Icon.view Icon.presentation
            (svgAsset "@kaizen/component-library/icons/spinner.icon.svg")
            |> Html.map never
        ]


viewMenu : ViewMenuData item -> Html (Msg item)
viewMenu viewMenuData =
    let
        resolveMouseover =
            if viewMenuData.menuNavigation == Keyboard then
                [ on "mousemove" <| Decode.succeed SetMouseMenuNavigation ]

            else
                []
    in
    viewIf (hasMenuItems viewMenuData.viewableMenuItems)
        (div
            ([ styles.class .menu
             , style "margin-top" (String.fromFloat menuMarginTop ++ "px")
             ]
                ++ resolveMouseover
            )
            [ Keyed.node "div"
                [ styles.class .menuList
                , id (menuListId viewMenuData.selectId)
                , on "scroll" <| Decode.map MenuListScrollTop <| Decode.at [ "target", "scrollTop" ] Decode.float
                ]
                (List.indexedMap (buildMenuItem viewMenuData.selectId viewMenuData.variant viewMenuData.initialMousedown viewMenuData.activeTargetIndex viewMenuData.menuNavigation) viewMenuData.viewableMenuItems)
            ]
        )


viewMenuItem : ViewMenuItemData item -> ( String, Html (Msg item) )
viewMenuItem viewMenuItemData =
    ( String.fromInt viewMenuItemData.index
    , lazy
        (\data ->
            let
                resolveMouseLeave =
                    if data.isClickFocused then
                        [ on "mouseleave" <| Decode.succeed ClearFocusedItem ]

                    else
                        []

                resolveMouseUp =
                    case data.initialMousedown of
                        MenuItemMousedown _ ->
                            [ on "mouseup" <| Decode.succeed (SelectedItem data.menuItem.item) ]

                        _ ->
                            []
            in
            div
                ([ role "listitem"
                 , tabindex -1
                 , preventDefaultOn "mousedown" <| Decode.map (\msg -> ( msg, True )) <| Decode.succeed (MenuItemClickFocus data.index)
                 , on "mouseover" <| Decode.succeed (HoverFocused data.index)
                 , id (menuItemId data.selectId data.index)
                 , styles.classList
                    [ ( .option, True )
                    , ( .isSelected, data.itemSelected )
                    , ( .isFocused, data.isClickFocused )
                    , ( .isTarget, data.menuItemIsTarget )
                    , ( .preventPointer, data.menuNavigation == Keyboard )
                    ]
                 ]
                    ++ resolveMouseLeave
                    ++ resolveMouseUp
                )
                [ text data.menuItem.label ]
        )
        viewMenuItemData
    )


viewPlaceholder : Configuration item -> Html (Msg item)
viewPlaceholder config =
    let
        ( placeholderValue, style ) =
            config.placeholder
    in
    div
        [ styles.classList
            [ ( .placeholder, True )
            , ( .faded, style == Faded )
            , ( .bold, style == Bold )
            , ( .fadedBold, style == FadedBold )
            ]
        ]
        [ text placeholderValue ]


viewSelectedPlaceholder : MenuItem item -> Html (Msg item)
viewSelectedPlaceholder item =
    let
        ( placeholderValue, style ) =
            ( item.label, Bold )
    in
    div
        [ styles.classList
            [ ( .singleValue, True )
            , ( .faded, style == Faded )
            , ( .bold, style == Bold )
            , ( .fadedBold, style == FadedBold )
            ]
        ]
        [ text placeholderValue ]


viewSelectInput : ViewSelectInputData item -> Html (Msg item)
viewSelectInput viewSelectInputData =
    let
        enterKeydownDecoder =
            -- There will always be a target item if the menu is
            -- open and not empty
            case viewSelectInputData.maybeActiveTarget of
                Just mi ->
                    [ Events.isEnter (EnterSelect mi.item) ]

                Nothing ->
                    []

        resolveInputValue =
            Maybe.withDefault "" viewSelectInputData.maybeInputValue

        spaceKeydownDecoder decoders =
            if canBeSpaceToggled viewSelectInputData.menuOpen viewSelectInputData.maybeInputValue then
                Events.isSpace (ToggleMenuAtKey <| SelectId viewSelectInputData.id) :: decoders

            else
                decoders

        whenArrowEvents =
            if viewSelectInputData.menuOpen && 0 == viewSelectInputData.totalViewableMenuItems then
                []

            else
                [ Events.isDownArrow (KeyboardDown (SelectId viewSelectInputData.id) viewSelectInputData.totalViewableMenuItems)
                , Events.isUpArrow (KeyboardUp (SelectId viewSelectInputData.id) viewSelectInputData.totalViewableMenuItems)
                ]

        resolveInputWidth selectInputConfig =
            if viewSelectInputData.usePorts then
                -- Fixed because javascript controls its width via ports
                SelectInput.inputSizing SelectInput.Fixed selectInputConfig

            else
                SelectInput.inputSizing SelectInput.Dynamic selectInputConfig
    in
    SelectInput.view
        (SelectInput.default
            |> SelectInput.onInput (InputChanged <| SelectId viewSelectInputData.id)
            |> SelectInput.onBlurMsg (OnInputBlurred (Just <| SelectId viewSelectInputData.id))
            |> SelectInput.onFocusMsg (InputReceivedFocused (Just <| SelectId viewSelectInputData.id))
            |> SelectInput.currentValue resolveInputValue
            |> SelectInput.onMousedown InputMousedowned
            |> resolveInputWidth
            |> (SelectInput.preventKeydownOn <|
                    (enterKeydownDecoder |> spaceKeydownDecoder)
                        ++ [ Events.isEscape CloseMenu
                           ]
                        ++ whenArrowEvents
               )
        )
        viewSelectInputData.id


viewDummyInput : ViewDummyInputData item -> Html (Msg item)
viewDummyInput viewDummyInputData =
    let
        whenEnterEvent =
            -- There will always be a target item if the menu is
            -- open and not empty
            case viewDummyInputData.maybeTargetItem of
                Just menuItem ->
                    [ Events.isEnter (EnterSelect menuItem.item) ]

                Nothing ->
                    []

        whenArrowEvents =
            if viewDummyInputData.menuOpen && 0 == viewDummyInputData.totalViewableMenuItems then
                []

            else
                [ Events.isDownArrow (KeyboardDown (SelectId viewDummyInputData.id) viewDummyInputData.totalViewableMenuItems)
                , Events.isUpArrow (KeyboardUp (SelectId viewDummyInputData.id) viewDummyInputData.totalViewableMenuItems)
                ]
    in
    input
        ([ style "label" "dummyInput"
         , style "background" "0"
         , style "border" "0"
         , style "font-size" "inherit"
         , style "outline" "0"
         , style "padding" "0"
         , style "width" "1px"
         , style "color" "transparent"
         ]
            ++ [ readonly True
               , value ""
               , tabindex 0
               , id ("dummy-input-" ++ viewDummyInputData.id)
               , onFocus (InputReceivedFocused Nothing)
               , onBlur (OnInputBlurred Nothing)
               , preventDefaultOn "keydown" <|
                    Decode.map
                        (\msg -> ( msg, True ))
                        (Decode.oneOf
                            ([ Events.isSpace (ToggleMenuAtKey <| SelectId viewDummyInputData.id)
                             , Events.isEscape CloseMenu
                             , Events.isDownArrow (KeyboardDown (SelectId viewDummyInputData.id) viewDummyInputData.totalViewableMenuItems)
                             , Events.isUpArrow (KeyboardUp (SelectId viewDummyInputData.id) viewDummyInputData.totalViewableMenuItems)
                             ]
                                ++ whenEnterEvent
                                ++ whenArrowEvents
                            )
                        )
               ]
        )
        []


viewMultiValue : MultiSelectTagConfig -> InitialMousedown -> Int -> MenuItem item -> Html (Msg item)
viewMultiValue { truncationWidth } mousedownedItem index menuItem =
    let
        isMousedowned =
            case mousedownedItem of
                MultiItemMousedown i ->
                    i == index

                _ ->
                    False

        resolveMouseleave tagConfig =
            if isMousedowned then
                Tag.onMouseleave ClearFocusedItem tagConfig

            else
                tagConfig

        resolveTruncationWidth tagConfig =
            case truncationWidth of
                Just width ->
                    Tag.truncateWidth width tagConfig

                Nothing ->
                    tagConfig

        resolveVariant =
            case menuItem.menuItemType of
                Default ->
                    Tag.default

                Cautionary ->
                    Tag.validation Tag.ValidationCautionary

                Error ->
                    Tag.validation Tag.ValidationNegative
    in
    Keyed.node "div" [ styles.class .multiValue ] <|
        [ ( "multi-value-" ++ String.fromInt index
          , lazy
                (\mi ->
                    Tag.view
                        (resolveVariant
                            |> Tag.size Tag.Medium
                            |> Tag.dismissible True
                            |> Tag.onDismiss (DeselectedMultiItem mi.item)
                            |> Tag.onMousedown (MultiItemFocus index)
                            |> Tag.inline True
                            |> resolveTruncationWidth
                            |> resolveMouseleave
                        )
                        mi.label
                )
                menuItem
          )
        ]


menuListId : SelectId -> String
menuListId selectId =
    "select-menu-list-" ++ getSelectId selectId


menuItemId : SelectId -> Int -> String
menuItemId selectId index =
    "select-menu-item-" ++ String.fromInt index ++ "-" ++ getSelectId selectId


dummyInputId : SelectId -> String
dummyInputId selectId =
    "dummy-input-" ++ getSelectId selectId



-- GETTERS


getSelectId : SelectId -> String
getSelectId (SelectId id_) =
    id_


getState : State -> SelectState
getState (State state_) =
    state_



-- CALCULATORS


calculateNextActiveTarget : Int -> Int -> Direction -> Int
calculateNextActiveTarget currentTargetIndex totalTargetCount direction =
    case direction of
        Up ->
            if currentTargetIndex == 0 then
                0

            else if totalTargetCount < currentTargetIndex + 1 then
                0

            else
                currentTargetIndex - 1

        Down ->
            if currentTargetIndex + 1 == totalTargetCount then
                currentTargetIndex

            else if totalTargetCount < currentTargetIndex + 1 then
                0

            else
                currentTargetIndex + 1


calculateMenuBoundaries : MenuListElement -> MenuListBoundaries
calculateMenuBoundaries (MenuListElement menuListElem) =
    ( menuListElem.element.y, menuListElem.element.y + menuListElem.element.height )



-- BUILDERS


buildMenuItems : Configuration item -> SelectState -> List (MenuItem item)
buildMenuItems config state_ =
    case config.variant of
        Single _ ->
            if config.searchable then
                List.filter (filterMenuItem state_.inputValue) config.menuItems

            else
                config.menuItems

        Multi _ maybeSelectedMenuItems ->
            if config.searchable then
                List.filter (filterMenuItem state_.inputValue) config.menuItems
                    |> filterMultiSelectedItems maybeSelectedMenuItems

            else
                config.menuItems
                    |> filterMultiSelectedItems maybeSelectedMenuItems


buildMenuItem : SelectId -> Variant item -> InitialMousedown -> Int -> MenuNavigation -> Int -> MenuItem item -> ( String, Html (Msg item) )
buildMenuItem selectId variant initialMousedown activeTargetIndex menuNavigation idx item =
    case variant of
        Single maybeSelectedItem ->
            viewMenuItem <|
                ViewMenuItemData idx (isSelected item maybeSelectedItem) (isMenuItemClickFocused initialMousedown idx) (isTarget activeTargetIndex idx) selectId item menuNavigation initialMousedown

        Multi _ _ ->
            viewMenuItem <|
                ViewMenuItemData idx False (isMenuItemClickFocused initialMousedown idx) (isTarget activeTargetIndex idx) selectId item menuNavigation initialMousedown


buildEncodedValueForPorts : SelectId -> Encode.Value
buildEncodedValueForPorts (SelectId id_) =
    let
        ( sizerId, inputId ) =
            ( SelectInput.sizerId id_, SelectInput.inputId id_ )
    in
    Encode.object
        [ ( "sizerId", Encode.string sizerId )
        , ( "inputId", Encode.string inputId )
        , ( "defaultInputWidth", Encode.int SelectInput.defaultWidth )
        ]



-- FILTERS


filterMenuItem : Maybe String -> MenuItem item -> Bool
filterMenuItem maybeQuery item =
    case maybeQuery of
        Nothing ->
            True

        Just "" ->
            True

        Just query ->
            String.contains (String.toLower query) <| String.toLower item.label


filterMultiSelectedItems : List (MenuItem item) -> List (MenuItem item) -> List (MenuItem item)
filterMultiSelectedItems selectedItems currentMenuItems =
    if List.isEmpty selectedItems then
        currentMenuItems

    else
        List.filter (\i -> not (List.member i selectedItems)) currentMenuItems



-- CHECKERS


canBeSpaceToggled : Bool -> Maybe String -> Bool
canBeSpaceToggled menuOpen inputValue =
    not menuOpen && isEmptyInputValue inputValue


isEmptyInputValue : Maybe String -> Bool
isEmptyInputValue inputValue =
    String.isEmpty (Maybe.withDefault "" inputValue)


hasMenuItems : List (MenuItem item) -> Bool
hasMenuItems items =
    0 /= List.length items


menuItemOrientationInViewport : MenuListElement -> MenuItemElement -> MenuItemVisibility
menuItemOrientationInViewport menuListElem menuItemElem =
    let
        ( topBoundary, bottomBoundary ) =
            calculateMenuBoundaries menuListElem
    in
    case ( isMenuItemWithinTopBoundary menuItemElem topBoundary, isMenuItemWithinBottomBoundary menuItemElem bottomBoundary ) of
        ( True, True ) ->
            Within

        ( False, True ) ->
            Above

        ( True, False ) ->
            Below

        ( False, False ) ->
            Both


isMenuItemWithinTopBoundary : MenuItemElement -> Float -> Bool
isMenuItemWithinTopBoundary (MenuItemElement menuItemElement) topBoundary =
    topBoundary <= menuItemElement.element.y


isMenuItemWithinBottomBoundary : MenuItemElement -> Float -> Bool
isMenuItemWithinBottomBoundary (MenuItemElement menuItemElement) bottomBoundary =
    (menuItemElement.element.y + menuItemElement.element.height) <= bottomBoundary


shouldQueryNextTargetElement : Int -> SelectState -> Bool
shouldQueryNextTargetElement nextTargetIndex state_ =
    nextTargetIndex /= state_.activeTargetIndex


isSelected : MenuItem item -> Maybe (MenuItem item) -> Bool
isSelected menuItem maybeSelectedItem =
    case maybeSelectedItem of
        Just item ->
            item == menuItem

        Nothing ->
            False


isMenuItemClickFocused : InitialMousedown -> Int -> Bool
isMenuItemClickFocused initialMousedown i =
    case initialMousedown of
        MenuItemMousedown int ->
            int == i

        _ ->
            -- if menuitem is not focused we dont care about what is at this stage
            False


isTarget : Int -> Int -> Bool
isTarget activeTargetIndex i =
    activeTargetIndex == i



-- CMDS


queryMenuListElement : SelectId -> Task.Task Dom.Error Dom.Element
queryMenuListElement selectId =
    Dom.getElement (menuListId selectId)


queryActiveTargetElement : SelectId -> Int -> Task.Task Dom.Error Dom.Element
queryActiveTargetElement selectId index =
    Dom.getElement (menuItemId selectId index)


queryNodesForViewportFocus : SelectId -> Int -> Cmd (Msg value)
queryNodesForViewportFocus selectId menuItemIndex =
    Task.attempt (FocusMenuViewport selectId) <|
        Task.map2 (\menuListElem menuItemElem -> ( MenuListElement menuListElem, MenuItemElement menuItemElem ))
            (queryMenuListElement selectId)
            (queryActiveTargetElement selectId menuItemIndex)


setMenuViewportPosition : SelectId -> Float -> MenuListElement -> MenuItemElement -> MenuItemVisibility -> ( Cmd (Msg item), Float )
setMenuViewportPosition selectId menuListViewport (MenuListElement menuListElem) (MenuItemElement menuItemElem) menuItemVisibility =
    case menuItemVisibility of
        Within ->
            ( Cmd.none, menuListViewport )

        Above ->
            let
                menuItemDistanceAbove =
                    menuListElem.element.y - menuItemElem.element.y
            in
            ( Task.attempt (\_ -> DoNothing) <| Dom.setViewportOf (menuListId selectId) 0 (menuListViewport - menuItemDistanceAbove), menuListViewport - menuItemDistanceAbove )

        Below ->
            let
                menuItemDistanceBelow =
                    (menuItemElem.element.y + menuItemElem.element.height) - (menuListElem.element.y + menuListElem.element.height)
            in
            ( Task.attempt (\_ -> DoNothing) <| Dom.setViewportOf (menuListId selectId) 0 (menuListViewport + menuItemDistanceBelow), menuListViewport + menuItemDistanceBelow )

        Both ->
            let
                menuItemDistanceAbove =
                    menuListElem.element.y - menuItemElem.element.y
            in
            ( Task.attempt (\_ -> DoNothing) <| Dom.setViewportOf (menuListId selectId) 0 (menuListViewport - menuItemDistanceAbove), menuListViewport - menuItemDistanceAbove )



-- STYLES


menuMarginTop : Float
menuMarginTop =
    8


styles =
    css "@kaizen/component-library/draft/Kaizen/Select/styles.elm.scss"
        { container = "container"
        , control = "control"
        , valueContainer = "valueContainer"
        , singleValue = "singleValue"
        , placeholder = "placeholder"
        , indicators = "indicators"
        , indicatorContainer = "indicatorContainer"
        , iconButton = "iconButton"
        , menuList = "menuList"
        , menu = "menu"
        , option = "option"
        , faded = "faded"
        , bold = "bold"
        , fadedBold = "fadedBold"
        , isSelected = "isSelected"
        , isFocused = "isFocused"
        , isTarget = "isTarget"
        , multiValue = "multiValue"
        , cautionary = "cautionary"
        , error = "error"
        , preventPointer = "preventPointer"
        }

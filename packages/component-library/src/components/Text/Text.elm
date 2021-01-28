module Text.Text exposing
    ( Config
    , TypeStyle(..)
    , div
    , h1
    , h2
    , h3
    , h4
    , h5
    , h6
    , id
    , inheritBaseline
    , inline
    , label
    , p
    , span
    , style
    , view
    )

{--
Create a text element using the correct semantic HTML tag and the appropriate visual style.

    view h1 [text "This is a h1, styled with page-title (the default)"]

You can use "style" to stray from the default styles.

Examples:

    view (h1 |> style PageTitle) [text "This is a h1, styled with page-title"]

    view (h1 |> style Display) [text "This is a h1, styled with display"]

    view (p |> style PageTitle) [text "This is a p, styled with page-title"]

By default, all styles include some relative positioning so that our text sits on a baseline grid.
If you want to inherit the baseline of the parent (no relative positioning), use the "inheritBaseline" modifier:

    view (p |> inheritBaseline True) [text "This text inherits the baseline"]
--}

import CssModules exposing (css)
import Html exposing (Html)
import Html.Attributes as HtmlAttributes



-- VIEW


view : Config msg -> List (Html.Html msg) -> Html.Html msg
view (Config config) children =
    let
        resolveId =
            case config.id of
                Just id_ ->
                    [ HtmlAttributes.id id_ ]

                Nothing ->
                    []
    in
    config.tag ([ className config.tag config.style config.inheritBaseline config.inline ] ++ resolveId) children


className : Element msg -> TypeStyle -> Bool -> Bool -> Html.Attribute msg
className tag typeStyle shouldInheritBaseline shouldInline =
    let
        styleClass =
            case typeStyle of
                DefaultStyle ->
                    .defaultStyle

                PageTitle ->
                    .pageTitle

                Title ->
                    .title

                Display ->
                    .display

                Heading ->
                    .heading

                Paragraph ->
                    .paragraph

                Lede ->
                    .lede

                Body ->
                    .body

                BodyBold ->
                    .bodyBold

                Small ->
                    .small

                SmallBold ->
                    .smallBold

                Notification ->
                    .notification

                Label ->
                    .label

                ControlAction ->
                    .controlAction

                Button ->
                    .button

                ZenDisplay0 ->
                    .zenDisplay0

                ZenHeading1 ->
                    .zenHeading1

                ZenHeading2 ->
                    .zenHeading2

                ZenHeading3 ->
                    .zenHeading3

                ZenDataLarge ->
                    .zenDataLarge

                ZenDataLargeUnits ->
                    .zenDataLargeUnits

                ZenDataMedium ->
                    .zenDataMedium

                ZenDataMediumUnits ->
                    .zenDataMediumUnits

                ZenDataSmall ->
                    .zenDataSmall

                ZenDataSmallUnits ->
                    .zenDataSmallUnits
    in
    styles.classList
        [ ( styleClass, True )
        , ( .inheritBaseline, shouldInheritBaseline )
        , ( .inline, shouldInline )
        ]


styles =
    css "@kaizen/component-library/styles/components/Text.module.scss"
        { defaultStyle = "defaultStyle"
        , pageTitle = "pageTitle"
        , title = "title"
        , display = "display"
        , heading = "heading"
        , paragraph = "paragraph"
        , lede = "lede"
        , body = "body"
        , bodyBold = "bodyBold"
        , small = "small"
        , smallBold = "smallBold"
        , notification = "notification"
        , label = "label"
        , controlAction = "controlAction"
        , button = "button"
        , inheritBaseline = "inheritBaseline"
        , inline = "inline"
        , zenDisplay0 = "zen-display-0"
        , zenHeading1 = "zen-heading-1"
        , zenHeading2 = "zen-heading-2"
        , zenHeading3 = "zen-heading-3"
        , zenDataLarge = "zen-data-large"
        , zenDataLargeUnits = "zen-data-large-units"
        , zenDataMedium = "zen-data-medium"
        , zenDataMediumUnits = "zen-data-medium-units"
        , zenDataSmall = "zen-data-small"
        , zenDataSmallUnits = "zen-data-small-units"
        }



-- VARIANTS


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { tag : Element msg
    , style : TypeStyle
    , inheritBaseline : Bool
    , inline : Bool
    , id : Maybe String
    }


type alias Element msg =
    List (Html.Attribute msg) -> List (Html.Html msg) -> Html.Html msg


type TypeStyle
    = DefaultStyle
    | PageTitle
    | Title
    | Display
    | Heading
    | Paragraph
    | Lede
    | Body
    | BodyBold
    | Small
    | SmallBold
    | Notification
    | Label
    | ControlAction
    | Button
    | ZenDisplay0
    | ZenHeading1
    | ZenHeading2
    | ZenHeading3
    | ZenDataLarge
    | ZenDataLargeUnits
    | ZenDataMedium
    | ZenDataMediumUnits
    | ZenDataSmall
    | ZenDataSmallUnits


defaultConfig : ConfigValue msg
defaultConfig =
    { tag = Html.div
    , style = DefaultStyle
    , inheritBaseline = False
    , inline = False
    , id = Nothing
    }


h1 : Config msg
h1 =
    Config { defaultConfig | tag = Html.h1 }


h2 : Config msg
h2 =
    Config { defaultConfig | tag = Html.h2 }


h3 : Config msg
h3 =
    Config { defaultConfig | tag = Html.h3 }


h4 : Config msg
h4 =
    Config { defaultConfig | tag = Html.h4 }


h5 : Config msg
h5 =
    Config { defaultConfig | tag = Html.h5 }


h6 : Config msg
h6 =
    Config { defaultConfig | tag = Html.h6 }


p : Config msg
p =
    Config { defaultConfig | tag = Html.p }


div : Config msg
div =
    Config { defaultConfig | tag = Html.div }


span : Config msg
span =
    Config { defaultConfig | tag = Html.span }


label : Config msg
label =
    Config { defaultConfig | tag = Html.label }



-- MODIFIERS


inheritBaseline : Bool -> Config msg -> Config msg
inheritBaseline value (Config config) =
    Config { config | inheritBaseline = value }


inline : Bool -> Config msg -> Config msg
inline value (Config config) =
    Config { config | inline = value }


style : TypeStyle -> Config msg -> Config msg
style value (Config config) =
    Config { config | style = value }


id : String -> Config msg -> Config msg
id id_ (Config config) =
    Config { config | id = Just id_ }

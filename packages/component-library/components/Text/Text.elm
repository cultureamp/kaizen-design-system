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



-- VIEW


view : Config msg -> List (Html.Html msg) -> Html.Html msg
view (Config config) children =
    config.tag [ className config.tag config.style config.inheritBaseline config.inline ] children


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
    in
    styles.classList
        [ ( styleClass, True )
        , ( .inheritBaseline, shouldInheritBaseline )
        , ( .inline, shouldInline )
        ]


styles =
    css "@cultureamp/kaizen-component-library/components/Text/Text.module.scss"
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
        }



-- VARIANTS


type Config msg
    = Config (ConfigValue msg)


type alias ConfigValue msg =
    { tag : Element msg
    , style : TypeStyle
    , inheritBaseline : Bool
    , inline : Bool
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


defaultConfig : ConfigValue msg
defaultConfig =
    { tag = Html.div
    , style = DefaultStyle
    , inheritBaseline = False
    , inline = False
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

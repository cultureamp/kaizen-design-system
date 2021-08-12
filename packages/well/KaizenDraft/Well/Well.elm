module KaizenDraft.Well.Well exposing
    ( BorderStyle(..)
    , Config
    , Variant(..)
    , borderStyle
    , default
    , id
    , noMargin
    , variant
    , view
    )

import CssModules exposing (css)
import Html exposing (Html, div, text)
import Html.Attributes exposing (id)



-- CONFIG


type Config msg
    = Config ConfigValue


type Variant
    = Positive
    | Negative
    | Informative
    | Cautionary
    | Default


type BorderStyle
    = Solid
    | Dashed
    | None


type alias ConfigValue =
    { id : Maybe String
    , variant : Variant
    , borderStyle : BorderStyle
    , noMargin : Bool
    }


defaults : ConfigValue
defaults =
    { id = Nothing
    , variant = Default
    , borderStyle = Solid
    , noMargin = False
    }


default : Config msg
default =
    Config defaults



-- MODIFIERS


id : String -> Config msg -> Config msg
id value (Config config) =
    Config { config | id = Just value }


variant : Variant -> Config msg -> Config msg
variant var (Config config) =
    Config { config | variant = var }


borderStyle : BorderStyle -> Config msg -> Config msg
borderStyle bs (Config config) =
    Config { config | borderStyle = bs }


noMargin : Bool -> Config msg -> Config msg
noMargin bool (Config config) =
    Config { config | noMargin = bool }



-- VIEW


view : Config msg -> List (Html msg) -> Html msg
view (Config config) children =
    let
        maybeIdAttr =
            case config.id of
                Just idString ->
                    [ Html.Attributes.id idString ]

                Nothing ->
                    []

        variantClass =
            case config.variant of
                Default ->
                    [ styles.class .default ]

                Positive ->
                    [ styles.class .positive ]

                Negative ->
                    [ styles.class .negative ]

                Informative ->
                    [ styles.class .informative ]

                Cautionary ->
                    [ styles.class .cautionary ]

        borderStyleClass =
            case config.borderStyle of
                Solid ->
                    [ styles.class .solid ]

                Dashed ->
                    [ styles.class .dashed ]

                None ->
                    [ styles.class .none ]

        noMarginClass =
            case config.noMargin of
                True ->
                    [ styles.class .noMargin ]

                False ->
                    []

        attribs =
            maybeIdAttr
                ++ variantClass
                ++ borderStyleClass
                ++ noMarginClass
    in
    div ([ styles.class .container ] ++ attribs) children


styles =
    css "@kaizen/draft-well/styles.scss"
        { container = "container"
        , solid = "solid"
        , dashed = "dashed"
        , none = "none"
        , noMargin = "noMargin"
        , positive = "positive"
        , negative = "negative"
        , informative = "informative"
        , cautionary = "cautionary"
        , default = "default"
        }

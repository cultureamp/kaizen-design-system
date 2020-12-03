module KaizenDraft.Divider.Divider exposing (Variant(..), default, reversed, variant, view)

import CssModules exposing (css)
import Html exposing (Html, hr)


type Config msg
    = Config Configuration


type alias Configuration =
    { variant : Variant
    , reversed : Bool
    }


defaults : Configuration
defaults =
    { variant = Canvas, reversed = False }



-- VARIANTS


type Variant
    = Content
    | Canvas


default : Config msg
default =
    Config defaults


variant : Variant -> Config msg
variant variantType =
    Config { defaults | variant = variantType }



-- MODIFIERS


reversed : Bool -> Config msg -> Config msg
reversed isReversed (Config config) =
    Config { config | reversed = isReversed }


view : Config msg -> Html msg
view (Config config) =
    let
        variantClass =
            case config.variant of
                Content ->
                    .content

                Canvas ->
                    .canvas
    in
    hr
        [ styles.classList
            [ ( .wrapper, True )
            , ( .reversed, config.reversed == True )
            , ( variantClass, True )
            ]
        ]
        []


styles =
    css "@kaizen/draft-divider/styles/styles.module.scss"
        { wrapper = "wrapper"
        , content = "content"
        , canvas = "canvas"
        , reversed = "reversed"
        }

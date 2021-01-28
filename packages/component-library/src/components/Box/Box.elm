module Box.Box exposing (box, classNameAndIHaveSpokenToDST, margin, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY)

import CssModules exposing (css)
import Dict exposing (Dict)
import Html exposing (Attribute, Html, div, span, text)
import Html.Attributes exposing (attribute)
import Spacing.Spacing as Spacing exposing (GridFraction)



-- public


box : List Property -> List (Html msg) -> Html msg
box properties children =
    let
        config : Config
        config =
            toConfig properties

        attributes : List (Attribute msg)
        attributes =
            Spacing.inlineStyles config.spacing
                |> addOptionalAttribute "class"
                    config.classNameAndIHaveSpokenToDST
    in
    div attributes children


padding : Spacing.GridFraction -> Property
padding n =
    Spacing <| Spacing.padding n


paddingTop : Spacing.GridFraction -> Property
paddingTop n =
    Spacing <| Spacing.paddingTop n


paddingRight : Spacing.GridFraction -> Property
paddingRight n =
    Spacing <| Spacing.paddingRight n


paddingBottom : Spacing.GridFraction -> Property
paddingBottom n =
    Spacing <| Spacing.paddingBottom n


paddingLeft : Spacing.GridFraction -> Property
paddingLeft n =
    Spacing <| Spacing.paddingLeft n


paddingX : Spacing.GridFraction -> Property
paddingX n =
    Spacing <| Spacing.paddingX n


paddingY : Spacing.GridFraction -> Property
paddingY n =
    Spacing <| Spacing.paddingY n


margin : Spacing.GridFraction -> Property
margin n =
    Spacing <| Spacing.margin n


marginTop : Spacing.GridFraction -> Property
marginTop n =
    Spacing <| Spacing.marginTop n


marginRight : Spacing.GridFraction -> Property
marginRight n =
    Spacing <| Spacing.marginRight n


marginBottom : Spacing.GridFraction -> Property
marginBottom n =
    Spacing <| Spacing.marginBottom n


marginLeft : Spacing.GridFraction -> Property
marginLeft n =
    Spacing <| Spacing.marginLeft n


marginX : Spacing.GridFraction -> Property
marginX n =
    Spacing <| Spacing.marginX n


marginY : Spacing.GridFraction -> Property
marginY n =
    Spacing <| Spacing.marginY n


classNameAndIHaveSpokenToDST : String -> Property
classNameAndIHaveSpokenToDST s =
    ClassNameAndIHaveSpokenToDST s



-- private


type Property
    = Spacing Spacing.Property
    | ClassNameAndIHaveSpokenToDST String


type alias Config =
    { classNameAndIHaveSpokenToDST : Maybe String
    , spacing : Spacing.Config
    }


defaultConfig : Config
defaultConfig =
    { spacing = Spacing.empty
    , classNameAndIHaveSpokenToDST = Nothing
    }


toConfig : List Property -> Config
toConfig =
    List.foldl setProperty defaultConfig


setProperty : Property -> Config -> Config
setProperty param config =
    case param of
        Spacing spacing ->
            { config | spacing = config.spacing |> Spacing.setProperty spacing }

        ClassNameAndIHaveSpokenToDST s ->
            { config | classNameAndIHaveSpokenToDST = Just s }



-- helpers


addOptionalAttribute :
    String
    -> Maybe String
    -> List (Attribute msg)
    -> List (Attribute msg)
addOptionalAttribute key maybeValue attributes =
    attributes
        ++ (maybeValue
                |> Maybe.map (List.singleton << attribute key)
                |> Maybe.withDefault []
           )

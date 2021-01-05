module Spacing.Spacing exposing (Config, GridFraction, Property, empty, inlineStyles, margin, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, setProperty)

import Dict exposing (Dict)
import Html exposing (Attribute)
import Html.Attributes exposing (style)


type alias GridFraction =
    Float


gridInRem =
    -- TODO: get this from @kaizen/design-tokens when it eventually supports Elm
    1.5



-- config


type alias Config =
    Dict String GridFraction


empty =
    Dict.empty


padding : GridFraction -> Property
padding n =
    Padding n


paddingTop : GridFraction -> Property
paddingTop n =
    PaddingTop n


paddingRight : GridFraction -> Property
paddingRight n =
    PaddingRight n


paddingBottom : GridFraction -> Property
paddingBottom n =
    PaddingBottom n


paddingLeft : GridFraction -> Property
paddingLeft n =
    PaddingLeft n


paddingX : GridFraction -> Property
paddingX n =
    PaddingX n


paddingY : GridFraction -> Property
paddingY n =
    PaddingY n


margin : GridFraction -> Property
margin n =
    Margin n


marginTop : GridFraction -> Property
marginTop n =
    MarginTop n


marginRight : GridFraction -> Property
marginRight n =
    MarginRight n


marginBottom : GridFraction -> Property
marginBottom n =
    MarginBottom n


marginLeft : GridFraction -> Property
marginLeft n =
    MarginLeft n


marginX : GridFraction -> Property
marginX n =
    MarginX n


marginY : GridFraction -> Property
marginY n =
    MarginY n


setProperty : Property -> Config -> Config
setProperty param config =
    case param of
        Padding n ->
            config |> setSpacing "padding" n

        PaddingTop n ->
            config |> setSpacing "padding-top" n

        PaddingRight n ->
            config |> setSpacing "padding-right" n

        PaddingBottom n ->
            config |> setSpacing "padding-bottom" n

        PaddingLeft n ->
            config |> setSpacing "padding-left" n

        PaddingX n ->
            config |> setSpacing "padding-x" n

        PaddingY n ->
            config |> setSpacing "padding-y" n

        Margin n ->
            config |> setSpacing "margin" n

        MarginTop n ->
            config |> setSpacing "margin-top" n

        MarginRight n ->
            config |> setSpacing "margin-right" n

        MarginBottom n ->
            config |> setSpacing "margin-bottom" n

        MarginLeft n ->
            config |> setSpacing "margin-left" n

        MarginX n ->
            config |> setSpacing "margin-x" n

        MarginY n ->
            config |> setSpacing "margin-y" n


type Property
    = Padding GridFraction
    | PaddingTop GridFraction
    | PaddingRight GridFraction
    | PaddingBottom GridFraction
    | PaddingLeft GridFraction
    | PaddingX GridFraction
    | PaddingY GridFraction
    | Margin GridFraction
    | MarginTop GridFraction
    | MarginRight GridFraction
    | MarginBottom GridFraction
    | MarginLeft GridFraction
    | MarginX GridFraction
    | MarginY GridFraction


setSpacing : String -> GridFraction -> Config -> Config
setSpacing cssProperty value config =
    config |> Dict.insert cssProperty value



-- view


inlineStyles : Config -> List (Attribute msg)
inlineStyles config =
    config
        |> Dict.toList
        |> sortSpacingProperties
        |> List.map
            (\( property, value ) ->
                let
                    cssValue =
                        gridFractionToCssValue value
                in
                if not (isCssProperty property) then
                    case property of
                        "margin-x" ->
                            [ style "margin-left" cssValue
                            , style "margin-right" cssValue
                            ]

                        "margin-y" ->
                            [ style "margin-top" cssValue
                            , style "margin-bottom" cssValue
                            ]

                        "padding-x" ->
                            [ style "padding-left" cssValue
                            , style "padding-right" cssValue
                            ]

                        "padding-y" ->
                            [ style "padding-top" cssValue
                            , style "padding-bottom" cssValue
                            ]

                        _ ->
                            []

                else
                    [ style property cssValue ]
            )
        |> List.concat


isCssProperty : String -> Bool
isCssProperty property =
    not <|
        List.member property
            [ "margin-x", "margin-y", "padding-x", "padding-y" ]


sortSpacingProperties : List ( String, GridFraction ) -> List ( String, GridFraction )
sortSpacingProperties properties =
    -- the made up non css properties such as "padding-x" get converted to
    -- real css properties "padding-left" and "padding-right" - they need
    -- to be ordered before real css properties so that they can be
    -- overridden. The order of the real css properties doesn't matter.
    properties
        |> List.sortWith
            (\( propertyA, _ ) ( propertyB, _ ) ->
                let
                    propertyAIsCss =
                        isCssProperty propertyA

                    propertyBIsCss =
                        isCssProperty propertyB
                in
                if not propertyAIsCss && propertyBIsCss then
                    LT

                else if propertyAIsCss && not propertyBIsCss then
                    GT

                else
                    EQ
            )


gridFractionToCssValue : GridFraction -> String
gridFractionToCssValue gridFraction =
    String.fromFloat (gridFraction * gridInRem) ++ "rem"

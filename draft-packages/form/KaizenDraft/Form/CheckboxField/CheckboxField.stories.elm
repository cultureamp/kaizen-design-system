module Main exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (..)
import KaizenDraft.Form.CheckboxField.CheckboxField as CheckboxField


main =
    storybook
        [ statelessStoryOf "On" <|
            CheckboxField.view
                (CheckboxField.default
                    |> CheckboxField.id "checkbox-2"
                    |> CheckboxField.checkedStatus CheckboxField.On
                    |> CheckboxField.labelText "Label"
                    |> CheckboxField.disabled False
                )
        , statelessStoryOf "Mixed" <|
            CheckboxField.view
                (CheckboxField.default
                    |> CheckboxField.id "checkbox-3"
                    |> CheckboxField.checkedStatus CheckboxField.Mixed
                    |> CheckboxField.labelText "Label"
                    |> CheckboxField.disabled False
                )
        , statelessStoryOf "Off" <|
            CheckboxField.view
                (CheckboxField.default
                    |> CheckboxField.id "checkbox-4"
                    |> CheckboxField.checkedStatus CheckboxField.Off
                    |> CheckboxField.labelText "Label"
                    |> CheckboxField.disabled False
                )
        , statelessStoryOf "Disabled + on" <|
            CheckboxField.view
                (CheckboxField.default
                    |> CheckboxField.id "checkbox-5"
                    |> CheckboxField.checkedStatus CheckboxField.On
                    |> CheckboxField.labelText "Label"
                    |> CheckboxField.disabled True
                )
        , statelessStoryOf "Disabled + mixed" <|
            CheckboxField.view
                (CheckboxField.default
                    |> CheckboxField.id "checkbox-6"
                    |> CheckboxField.checkedStatus CheckboxField.Mixed
                    |> CheckboxField.labelText "Label"
                    |> CheckboxField.disabled True
                )
        , statelessStoryOf "Disabled + off" <|
            CheckboxField.view
                (CheckboxField.default
                    |> CheckboxField.id "checkbox-7"
                    |> CheckboxField.checkedStatus CheckboxField.Off
                    |> CheckboxField.labelText "Label"
                    |> CheckboxField.disabled True
                )
        , statelessStoryOf "with bottom margin" <|
            div []
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                    )
                , CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-2"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                    )
                ]
        , statelessStoryOf "without bottom margin" <|
            div []
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                        |> CheckboxField.inline True
                    )
                , CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-2"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                        |> CheckboxField.inline True
                    )
                ]
        ]

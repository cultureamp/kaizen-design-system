module ElmStories.CheckboxFieldStories exposing (main)

import CssModules exposing (css)
import ElmStorybook exposing (statelessStoryOf, storybook)
import Html exposing (..)
import Html.Attributes exposing (style)
import KaizenDraft.Form.CheckboxField.CheckboxField as CheckboxField
import KaizenDraft.Form.Primitives.Checkbox.Checkbox as Checkbox


styles =
    css "../docs/ElmCheckboxField.stories.scss"
        { reversedBackground = "reversedBackground"
        }


storyContainer : List (Html msg) -> Bool -> Html msg
storyContainer children reversed =
    div [ style "width" "375px", styles.classList [ ( .reversedBackground, reversed ) ] ]
        [ div [ style "padding" "24px" ]
            children
        ]


main =
    storybook
        [ statelessStoryOf "On" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-2"
                        |> CheckboxField.checkedStatus CheckboxField.On
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                    )
                ]
                False
        , statelessStoryOf "Mixed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-3"
                        |> CheckboxField.checkedStatus CheckboxField.Mixed
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                    )
                ]
                False
        , statelessStoryOf "Off" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-4"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                    )
                ]
                False
        , statelessStoryOf "Disabled + on" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-5"
                        |> CheckboxField.checkedStatus CheckboxField.On
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled True
                    )
                ]
                False
        , statelessStoryOf "Disabled + mixed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-6"
                        |> CheckboxField.checkedStatus CheckboxField.Mixed
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled True
                    )
                ]
                False
        , statelessStoryOf "Disabled + off" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-7"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled True
                    )
                ]
                False
        , statelessStoryOf "with bottom margin" <|
            div []
                [ storyContainer
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
                    False
                ]
        , statelessStoryOf "without bottom margin" <|
            div []
                [ storyContainer
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
                    False
                ]
        , statelessStoryOf "Disabled, off + reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.On
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled True
                        |> CheckboxField.reversed True
                    )
                ]
                True
        , statelessStoryOf "Disabled, mixed + reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.Mixed
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled True
                        |> CheckboxField.reversed True
                    )
                ]
                True
        , statelessStoryOf "Disabled, on + reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.On
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled True
                        |> CheckboxField.reversed True
                    )
                ]
                True
        , statelessStoryOf "On + reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.On
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.reversed True
                    )
                ]
                True
        , statelessStoryOf "Off + reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.reversed True
                    )
                ]
                True
        , statelessStoryOf "Mixed + reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.Mixed
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.reversed True
                    )
                ]
                True
        , statelessStoryOf "with description" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.On
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                        |> CheckboxField.description [ text "Your reply will only be seen by you Your reply will only be seen by you Your reply will only be seen by you Your reply will only be seen by you Your reply will only be seen by you" ]
                    )
                ]
                False
        , statelessStoryOf "with description + reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.On
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                        |> CheckboxField.reversed True
                        |> CheckboxField.description [ text "Your reply will only be seen by you Your reply will only be seen by you Your reply will only be seen by you Your reply will only be seen by you Your reply will only be seen by you" ]
                    )
                ]
                True
        , statelessStoryOf "Error" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                        |> CheckboxField.reversed False
                        |> CheckboxField.status Checkbox.Error
                        |> CheckboxField.validationMessage "Please select a value"
                    )
                ]
                False
        , statelessStoryOf "Error, Reversed" <|
            storyContainer
                [ CheckboxField.view
                    (CheckboxField.default
                        |> CheckboxField.id "checkbox-1"
                        |> CheckboxField.checkedStatus CheckboxField.Off
                        |> CheckboxField.labelText "Label"
                        |> CheckboxField.disabled False
                        |> CheckboxField.reversed True
                        |> CheckboxField.status Checkbox.Error
                        |> CheckboxField.validationMessage "Please select a value"
                    )
                ]
                True
        ]

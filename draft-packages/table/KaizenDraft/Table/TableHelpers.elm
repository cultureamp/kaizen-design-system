module KaizenDraft.Table.TableHelpers exposing (ratioToPercent)


ratioToPercent : Float -> String
ratioToPercent widthValue =
    String.fromFloat (widthValue * 100) ++ "%"

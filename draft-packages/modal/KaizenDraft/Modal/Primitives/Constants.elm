module KaizenDraft.Modal.Primitives.Constants exposing
    ( ariaDescribedBy
    , ariaLabelledBy
    , defaultFocusableId
    , firstFocusableId
    , lastFocusableId
    )


ariaDescribedBy : String
ariaDescribedBy =
    "modal-describedBy"


ariaLabelledBy : String
ariaLabelledBy =
    "modal-labelledBy"


firstFocusableId : String
firstFocusableId =
    "modal-first-focusable"


lastFocusableId : String
lastFocusableId =
    "modal-last-focusable"


defaultFocusableId : String
defaultFocusableId =
    "modal-default-control-focusable"

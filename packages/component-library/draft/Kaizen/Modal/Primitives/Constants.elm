module Kaizen.Modal.Primitives.Constants exposing
    ( ariaDescribedBy
    , ariaLabelledBy
    , defaultFocusableControlId
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
    "modal-header-dismiss-id-focusable"


lastFocusableId : String
lastFocusableId =
    "modal-footer-action-id-focusable"


defaultFocusableControlId : String
defaultFocusableControlId =
    "modal-default-control-focusable"

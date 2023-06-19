---
"@kaizen/components": minor
---

Updates steps to object and stepName to currentStepId

- updates the stepName to currentStepId
- updates steps from non-empty array of strings to non-empty array of Steps
  - exports Step and Steps types for convenience in consuming repos
- refactor Workflow to use the new type and id to reference active steps from array
- adds test coverage to ProgressStepper and improve docs

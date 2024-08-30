// Since we can't add a deprecation flag on a * export
import {
  Workflow as WorkflowV2,
  WorkflowProps as WorkflowPropsV2,
} from "./Workflow"

/** * @deprecated upgrade to v3 for the latest release */
export const Workflow = WorkflowV2
/** * @deprecated upgrade to v3 for the latest release */
export type WorkflowProps = WorkflowPropsV2

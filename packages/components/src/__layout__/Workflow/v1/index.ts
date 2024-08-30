// Since we can't add a deprecation flag on a * export
import {
  Workflow as WorkflowV1,
  WorkflowProps as WorkflowPropsV1,
} from "./Workflow"

/** * @deprecated upgrade to v3 for the latest release */
export const Workflow = WorkflowV1
/** * @deprecated upgrade to v3 for the latest release */
export type WorkflowProps = WorkflowPropsV1

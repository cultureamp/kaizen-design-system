import {
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCell,
  TableRowCell,
} from "@kaizen/component-library/draft"
import * as React from "react"
import { memo, useCallback } from "react"
import { InjectedIntl, injectIntl } from "react-intl"
import { Link } from "react-router"
// @ts-ignore
import FadeoutTruncated from "../../../../components/elements/FadeoutTruncated/FadeoutTruncated"
// @ts-ignore
import FormattedCycleRange from "../../../../components/elements/FormattedCycleRange/FormattedCycleRange"
import TableCardRow from "../../../../components/elements/TableCardRow/TableCardRow"
// @ts-ignore
import CompletionCell from "../../../../components/widgets/CompletionCell/CompletionCell"
// @ts-ignore
import ReviewStatus from "../../../../components/widgets/ReviewStatus/ReviewStatus"
import Aid from "../../../../constants/automationId"
import useGetResponsiveValue from "../../../../hooks/useGetResponsiveValue"
import strings from "../../../../locale/strings"
import PerformanceCycleModel from "../../../../models/PerformanceCycle"
import EvaluationCycleActionMenuAndModals from "./EvaluationCycleActionMenuAndModals"
import styles from "./EvaluationCyclesTable.scss"
import {
  getRowHrefIfRequired,
  getRowShouldLinkToSummaryPage,
} from "./evaluationUtils"

type OnFailedCycleClick = (cycle: PerformanceCycleModel) => void
type OnDraftCycleClick = (cycle: PerformanceCycleModel) => void

type Props = {
  cycles: PerformanceCycleModel[]
  onFailedCycleClick: OnFailedCycleClick
  onDraftCycleClick: OnDraftCycleClick
  onEvaluationUsersUpdated: () => void
  intl: InjectedIntl
}

const headerStrings = [
  strings.adminPerformanceReview.tables.headers.evalCycles.status,
  strings.adminPerformanceReview.tables.headers.evalCycles.name,
  strings.adminPerformanceReview.tables.headers.evalCycles.dateRange,
  strings.adminPerformanceReview.tables.headers.evalCycles.completion,
  "",
]

const rawColumnSizes = [
  { 0: "0 0 120px" },
  { 0: "1 1 0" },
  { 0: "0 0 100px", 1280: "0 0 170px" },
  { 0: "0 0 150px", 1100: "0 0 170px", 1280: "0 0 210px" },
  { 0: "0 0 208px" },
]

const Row = ({
  cycle,
  onFailedCycleClick,
  onDraftCycleClick,
  onEvaluationUsersUpdated,
}: {
  cycle: PerformanceCycleModel
  onFailedCycleClick: OnFailedCycleClick
  onDraftCycleClick: OnDraftCycleClick
  onEvaluationUsersUpdated: () => void
}) => {
  const getResponsiveValue = useGetResponsiveValue()
  const columnSizes = rawColumnSizes.map(getResponsiveValue)

  const rowShouldLinkToSummaryPage = getRowShouldLinkToSummaryPage(cycle)
  const rowHref = getRowHrefIfRequired(cycle)

  const handleRowClick = useCallback(
    (event) => {
      event.preventDefault()
      if (cycle.status === "error") {
        onFailedCycleClick(cycle)
      } else if (cycle.status === "draft") {
        onDraftCycleClick(cycle)
      }
    },
    [cycle, onDraftCycleClick, onFailedCycleClick]
  )

  const LinkOrButton = rowShouldLinkToSummaryPage ? Link : "button"

  return (
    <TableCardRow
      forceHoverState
      key={`cycle-${cycle.id}`}
      automationId={Aid.employeeEvaluationCycleItem}
    >
      <LinkOrButton
        to={rowHref}
        onClick={rowShouldLinkToSummaryPage ? undefined : handleRowClick}
        className={styles.anchorRow}
      >
        <TableRowCell flex={columnSizes[0]}>
          {cycle.status && (
            <ReviewStatus
              status={cycle.status}
              statusStrings={strings.cycle.states}
            />
          )}
        </TableRowCell>
        <TableRowCell flex={columnSizes[1]}>
          <FadeoutTruncated>{cycle.name}</FadeoutTruncated>
        </TableRowCell>
        <TableRowCell flex={columnSizes[2]}>
          <FormattedCycleRange
            startDate={cycle.start_date ? new Date(cycle.start_date) : null}
            endDate={cycle.end_date ? new Date(cycle.end_date) : null}
          />
        </TableRowCell>
        <TableRowCell flex={columnSizes[3]}>
          {cycle.completion_stats ? (
            <CompletionCell
              totalUsersCount={cycle.completion_stats["Total Count"].count}
              completedUsersCount={cycle.completion_stats.Completed.count}
              countMessage={
                strings.adminPerformanceReview.tables.completionCountMessage
              }
              className={styles.surveyCompletionCell}
            />
          ) : null}
        </TableRowCell>
      </LinkOrButton>
      <TableRowCell flex={columnSizes[4]}>
        <EvaluationCycleActionMenuAndModals
          cycle={cycle}
          onEvaluationUsersUpdated={onEvaluationUsersUpdated}
          onEditDraftCycleClick={onDraftCycleClick}
        />
      </TableRowCell>
    </TableCardRow>
  )
}

const EvaluationCyclesTable = ({
  cycles,
  onFailedCycleClick,
  onEvaluationUsersUpdated,
  intl,
  onDraftCycleClick,
}: Props) => {
  const getResponsiveValue = useGetResponsiveValue()
  const columnSizes = rawColumnSizes.map(getResponsiveValue)

  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          {headerStrings.map((s, i) => (
            <TableHeaderRowCell
              key={i}
              labelText={typeof s === "string" ? s : intl.formatMessage(s)}
              flex={columnSizes[i]}
            />
          ))}
        </TableHeaderRow>
      </TableHeader>
      {cycles.map((cycle) => (
        <Row
          key={cycle.id}
          cycle={cycle}
          onFailedCycleClick={onFailedCycleClick}
          onDraftCycleClick={onDraftCycleClick}
          onEvaluationUsersUpdated={onEvaluationUsersUpdated}
        />
      ))}
    </TableContainer>
  )
}

export default memo(injectIntl(EvaluationCyclesTable))

import * as React from "react"
import { Paragraph } from "@kaizen/component-library"
import { CATEGORIES } from "../../../storybook/constants"
import { Box } from "../components/Box"

import styles from "./Box.stories.scss"

export default {
  title: `${CATEGORIES.components}/Box`,
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'import { Box } from "@kaizen/component-library"',
      },
    },
  },
}

const Documentation = ({ reversed }: { reversed?: boolean }) => (
  <Box mt={2}>
    <Paragraph variant="body" color={reversed ? "white" : "dark"}>
      <ul>
        <li>
          <code>Box</code> is a utility component that is for creating
          small-scale spacing without the need for CSS.
        </li>
        <li>
          <strong>
            Do not use <code>Box</code> to handle page layout
          </strong>
          .
        </li>
        <li>
          Below is a summary of the props that you can use to quickly achieve
          the spacing you want.
          <br />
          Each prop takes a <code>number</code> as the value that is a multiple
          of <code>$kz-spacing-md</code> (formerly <code>$ca-grid</code>).
          <br />
          For example, <code>ml=&#123;1.5&#125;</code> is equivalent to{" "}
          <code>margin-left: $kz-spacing-md * 1.5;</code>
        </li>
      </ul>
    </Paragraph>

    <table className={styles.boxStoriesTable}>
      <thead>
        <tr>
          <th></th>
          <th>margin</th>
          <th>padding</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.tableLabel}>top</td>
          <td>
            <code>mt</code>
          </td>
          <td>
            <code>pt</code>
          </td>
        </tr>
        <tr>
          <td className={styles.tableLabel}>right</td>
          <td>
            <code>mr</code>
          </td>
          <td>
            <code>pr</code>
          </td>
        </tr>
        <tr>
          <td className={styles.tableLabel}>bottom</td>
          <td>
            <code>mb</code>
          </td>
          <td>
            <code>pb</code>
          </td>
        </tr>
        <tr>
          <td className={styles.tableLabel}>left</td>
          <td>
            <code>ml</code>
          </td>
          <td>
            <code>pl</code>
          </td>
        </tr>
        <tr>
          <td className={styles.tableLabel}>X-axis</td>
          <td>
            <code>mx</code>
          </td>
          <td>
            <code>px</code>
          </td>
        </tr>
        <tr>
          <td className={styles.tableLabel}>Y-axis</td>
          <td>
            <code>py</code>
          </td>
          <td>
            <code>py</code>
          </td>
        </tr>
      </tbody>
    </table>
  </Box>
)

export const BoxDefault = () => (
  <>
    <div className={styles.boxStoriesWrapper}>
      <Box>
        A box with no props has a default margin and padding of 0. The children
        of box are also unstyled.
      </Box>
    </div>
    <Documentation />
  </>
)
BoxDefault.storyName = "Default"

export const BoxWithMargin = () => (
  <>
    <div className={styles.boxStoriesWrapper}>
      <Box ml={1} mr={0.25} mt={0.5} mb={0.5}>
        This is an example Box with margin left, right, and top explicitly
        defined.
      </Box>
    </div>
    <Documentation />
  </>
)
BoxWithMargin.storyName = "Box With Margin"

export const BoxWithPadding = () => (
  <>
    <div className={styles.boxStoriesWrapper}>
      <Box p={4}>
        <span>Box with 4 units of padding</span>
      </Box>
    </div>
    <Documentation />
  </>
)
BoxWithPadding.storyName = "Box With Padding"

export const BoxWithXAndYPadding = () => (
  <>
    <div className={styles.boxStoriesWrapper}>
      <Box px={4} py={1}>
        <span>Box with 4 units of padding</span>
      </Box>
    </div>
    <Documentation />
  </>
)
BoxWithXAndYPadding.storyName = "Box With X And Y Padding"

export const BoxWithRtlSupport = () => (
  <>
    <div className={styles.boxStoriesWrapper}>
      <Box rtl pr={4}>
        <span>
          Box with 4 units of padding on the <strong>left</strong> for RTL
          languages
        </span>
      </Box>
    </div>
    <Documentation />
  </>
)
BoxWithRtlSupport.storyName = "Box With Rtl Support"

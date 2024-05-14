import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button, IconButton } from "~components/Button"
import { ButtonGroup } from "~components/ButtonGroup"
import { FilterButtonBase } from "~components/Filter/FilterButton/subcomponents/FilterButtonBase"
import {
  InformationIcon,
  RemoveLinkIcon,
  QuestionIcon,
  VisibleIcon,
} from "~components/Icon"
import {
  TableContainer,
  TableHeader,
  TableHeaderRowCell,
  TableRow,
} from "~components/Table"
import { Text } from "~components/Text"
import { Tag } from "~components/__future__"
import { Tooltip } from "../index"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    text: "Example tooltip text.",
    animationDuration: 0,
  },
  decorators: [
    Story => (
      <div className="flex mt-[50px] justify-center gap-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: args => (
    <Tooltip {...args}>
      <Button label="Hover or focus me" />
    </Tooltip>
  ),
}

export const OverflowScroll: Story = {
  render: props => (
    <>
      <p>
        Default Placement is &apos;above&apos;. Scroll horizontally or
        vertically to view the Tooltip &quot;flip&quot; and move according to
        the space of the viewport. Ensuring the Tooltip does not get cut off.
      </p>

      <div
        style={{
          display: "flex",
          width: "300px",
          maxHeight: "700px",
          overflow: "scroll",
          border: "solid black 2px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "500px",
            marginLeft: "200px",
            marginTop: "400px",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "200px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Tooltip {...props} display="inline-block" text="Tooltip label">
              <Button label="Default" />
            </Tooltip>
          </div>
        </div>
        <div
          style={{
            width: "500px",
            marginLeft: "200px",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "100px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Tooltip {...props} display="inline" text="Tooltip label">
              <InformationIcon role="img" aria-label="Info" />
            </Tooltip>
          </div>
        </div>
        <div
          style={{
            width: "500px",
            marginLeft: "200px",
            marginBottom: "500px",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "200px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Text tag="div" variant="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              nulla quas corporis? Perspiciatis, ratione voluptas{" "}
              <Tooltip {...props} display="inline-block" text="Tooltip label">
                <Tag>ad veniam sapiente</Tag>
              </Tooltip>{" "}
              Maxime harum, ducimus maiores itaque pariatur quod vel porro
              mollitia. Lorem ipsum dolor sit{" "}
              <Tooltip {...props} display="inline" text="Open in new tab">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">
                  amet consectetur adipisicing elit Itaque obcaecati maxime
                  molestiae blanditiis pariatur
                </a>
              </Tooltip>
              . Magni perspiciatis assumenda in adipisci, eaque commodi quidem
              dolore, tempore provident animi{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  ),
}

export const ButtonsWithTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: args => (
    <>
      <Tooltip {...args} text="Contact customer support.">
        <Button label="Help" icon={<QuestionIcon role="presentation" />} />
      </Tooltip>
      <Tooltip {...args} text="Remove the link from current selection.">
        <IconButton
          label="Remove link"
          icon={<RemoveLinkIcon role="presentation" />}
        />
      </Tooltip>
    </>
  ),
}

export const ButtonGroupWithTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: args => (
    <>
      <ButtonGroup>
        <Tooltip {...args} text="Sort by first" animationDuration={0}>
          <FilterButtonBase>First</FilterButtonBase>
        </Tooltip>
        <Tooltip {...args} text="Sort by last" animationDuration={0}>
          <FilterButtonBase>Last</FilterButtonBase>
        </Tooltip>
      </ButtonGroup>
    </>
  ),
}

export const TableHeadersWithTooltips: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              labelText="Resource name"
              sorting="descending"
              width={3 / 12}
              onClick={(): void => undefined}
              tooltipInfo="Sort column by descending"
            />
            <TableHeaderRowCell
              labelText="Supplementary information"
              width={3 / 12}
              onClick={(): void => undefined}
              sorting="ascending"
              tooltipInfo="Sort column by ascending"
            />
            <TableHeaderRowCell labelText="Date" width={3 / 12} />
            <TableHeaderRowCell labelText="Price" width={3 / 12} />
          </TableRow>
        </TableHeader>
      </TableContainer>
    </>
  ),
}

export const TagWithTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <>
      <Tag>
        <span className="max-w-[50px] overflow-hidden truncate">
          John Jonson Johnington the Third
        </span>
        <Tooltip
          text="Reveal full name John Jonson Johnington the Third"
          animationDuration={0}
        >
          <button
            className="max-h-[26px] m-0"
            type="button"
            aria-label="Reveal full name"
          >
            <VisibleIcon role="presentation" />
          </button>
        </Tooltip>
      </Tag>
    </>
  ),
}

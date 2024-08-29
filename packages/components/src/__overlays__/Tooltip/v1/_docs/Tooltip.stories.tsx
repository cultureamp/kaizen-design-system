import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup } from "~components/ButtonGroup"
import { CheckboxField } from "~components/Checkbox"
import { FilterButtonBase } from "~components/Filter/FilterButton/subcomponents/FilterButtonBase"
import {
  TableContainer,
  TableHeader,
  TableHeaderRowCell,
  TableRow,
} from "~components/Table"
import { Text } from "~components/Text"
import { Button, IconButton } from "~components/__actions__/v2"
import { Tag } from "~components/__future__/Tag"
import {
  InformationIcon,
  RemoveLinkIcon,
  QuestionIcon,
} from "~components/__illustrations__/v1"
import { Tooltip } from "../index"

const meta = {
  title: "Overlays/Tooltip/v1",
  component: Tooltip,
  args: {
    text: "Example tooltip text.",
  },
  decorators: [
    Story => (
      <div className="flex mt-[60px] gap-12">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
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
        <Tooltip {...args} text="Sort by first">
          <FilterButtonBase>First</FilterButtonBase>
        </Tooltip>
        <Tooltip {...args} text="Sort by last">
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
              labelText="Resources"
              sorting="descending"
              width={3 / 12}
              onClick={(): void => undefined}
              tooltipInfo="Sort Resources by descending"
            />
            <TableHeaderRowCell
              labelText="Supplementary"
              width={3 / 12}
              onClick={(): void => undefined}
              sorting="ascending"
              tooltipInfo="Sort Supplementary by ascending"
            />
            <TableHeaderRowCell labelText="Date" width={3 / 12} />
            <TableHeaderRowCell labelText="Price" width={3 / 12} />
          </TableRow>
        </TableHeader>
      </TableContainer>
    </>
  ),
}

export const TagWithHoverOnlyTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <Tooltip text="John Jonson Johnington the Third">
      <Tag>John Jonson Jo...</Tag>
    </Tooltip>
  ),
}

export const TagWithTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <Tag>
      <Tooltip text="Visit John Jonson's profile">
        <a className="text-inherit font no-underline" href="#John">
          John Jonson
        </a>
      </Tooltip>
    </Tag>
  ),
}

export const TagWithCheckboxField: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <>
      <Tooltip text="Select all users">
        <CheckboxField labelText="Users" id="sb-checkbox-tooltip--id" />
      </Tooltip>
    </>
  ),
}

export const CheckboxFieldTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <>
      <Tooltip text="Select all users">
        <CheckboxField labelText="Users" id="sb-checkbox-tooltip--id" />
      </Tooltip>
    </>
  ),
}

export const CheckboxFieldWithDescriptionTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <>
      <Tooltip text="Select all users">
        <CheckboxField
          labelText="Users"
          id="sb-checkbox-tooltip--id"
          aria-describedby="sb-checkbox-description--id"
        />
        <span id="sb-checkbox-description--id" className="sr-only">
          Select all users
        </span>
      </Tooltip>
    </>
  ),
}

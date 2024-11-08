import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import { Icon } from "~components/__future__/Icon"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import {
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "../index"

export default {
  title: "Components/Table",
  parameters: {
    chromatic: { disable: false },
    docs: {
      source: { type: "dynamic" },
    },
    a11y: {
      config: {
        rules: [
          {
            // Fixing this in a rebuild
            id: "nested-interactive",
            enabled: false,
          },
          {
            // Fixing this in a rebuild
            id: "aria-required-children",
            enabled: false,
          },
          {
            // Fixing this in a rebuild
            id: "aria-required-parent",
            enabled: false,
          },
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[60rem] flex flex-col gap-12 mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta

const TableTemplate: StoryObj<StickerSheetStory> = {
  render: ({ isReversed }) => (
    <>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableHeaderRowCell with long titles
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Default"
              width={4 / 12}
              onClick={action("header 1")}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Long title that should convert to ellipsis lorem ipsum thing"
              width={4 / 12}
              onClick={action("header 3")}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Long title that should wrap to a new line lorem ipsum thing"
              width={4 / 12}
              wrapping="wrap"
              align="end"
              onClick={action("header 2")}
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableHeaderRowCell onClick
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Default"
              width={4 / 12}
              sorting="descending"
              onClick={action("header 1")}
              data-sb-pseudo-styles="hover"
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Hover"
              width={4 / 12}
              sorting="ascending"
              onClick={action("header 3")}
              data-sb-pseudo-styles="hover"
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Focus"
              width={4 / 12}
              sorting="ascending"
              onClick={action("header 2")}
              data-sb-pseudo-styles="focus-visible"
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableHeaderRowCell icons with onClick
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Default"
              width={4 / 12}
              sorting="descending"
              onClick={action("header 1")}
              icon={<Icon name="potted_plant" alt="Focus" isFilled />}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Hover"
              width={4 / 12}
              sorting="ascending"
              onClick={action("header 3")}
              data-sb-pseudo-styles="hover"
              icon={<Icon name="potted_plant" alt="Focus" isFilled />}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Focus"
              width={4 / 12}
              sorting="ascending"
              onClick={action("header 2")}
              data-sb-pseudo-styles="focus-visible"
              icon={<Icon name="potted_plant" alt="Focus" isFilled />}
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableHeaderRowCell tooltips
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Default"
              width={4 / 12}
              sorting="descending"
              onClick={action("header 1")}
              tooltipInfo="Default state"
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Hover"
              width={4 / 12}
              sorting="ascending"
              onClick={action("header 3")}
              data-sb-pseudo-styles="hover"
              tooltipInfo="Hover state."
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Focus"
              width={4 / 12}
              sorting="ascending"
              onClick={action("header 2")}
              data-sb-pseudo-styles="focus-visible"
              tooltipInfo="focus state"
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableHeaderRowCell checkable
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Default"
              width={4 / 12}
              checkable
              checkboxLabel="Select all default"
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Hover"
              width={4 / 12}
              data-sb-pseudo-styles="hover"
              checkable
              checkboxLabel="Select all hover"
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Focus"
              width={4 / 12}
              checkable
              checkboxLabel="Select all focus"
              data-sb-pseudo-styles="focus-visible"
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableCard onClick
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="State"
              width={4 / 12}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Second column"
              width={4 / 12}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Third column"
              width={4 / 12}
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard
          data-sb-pseudo-styles="hover"
          onClick={action("TableCard onClick")}
        >
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Hover
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard
          data-sb-pseudo-styles="focus-visible"
          onClick={action("TableCard onClick")}
        >
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Focus
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableCard popout
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="State"
              width={4 / 12}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Second Colum"
              width={4 / 12}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Third column"
              width={4 / 12}
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard
          onClick={action("TableCard onClick")}
          expanded
          expandedStyle="popout"
        >
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default popout
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard
          data-sb-pseudo-styles="hover"
          onClick={action("TableCard onClick")}
          expanded
          expandedStyle="popout"
        >
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Hover
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                None
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard
          data-sb-pseudo-styles="focus-visible"
          onClick={action("TableCard onClick")}
          expanded
          expandedStyle="popout"
        >
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Focus
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                None
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
      <Text
        tag="div"
        variant="intro-lede"
        color={isReversed ? "white" : "dark"}
      >
        TableCard well
      </Text>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="State"
              width={4 / 12}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Second Colum"
              width={4 / 12}
            />
            <TableHeaderRowCell
              reversed={isReversed}
              labelText="Third column"
              width={4 / 12}
            />
          </TableRow>
        </TableHeader>
        <TableCard onClick={action("TableCard onClick")}>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard onClick={action("TableCard onClick")} expanded>
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Default well
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 2
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard
          onClick={action("TableCard onClick")}
          expanded
          expandedStyle="well"
          data-sb-pseudo-styles="hover"
        >
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Hover
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                None
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
        <TableCard
          onClick={action("TableCard onClick")}
          expanded
          expandedStyle="well"
          data-sb-pseudo-styles="focus-visible"
        >
          <TableRow>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Focus
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Well
              </Text>
            </TableRowCell>
            <TableRowCell width={4 / 12}>
              <Text tag="div" variant="body">
                Data 3
              </Text>
            </TableRowCell>
          </TableRow>
        </TableCard>
      </TableContainer>
    </>
  ),
  parameters: {
    pseudo: {
      hover: [
        '[data-sb-pseudo-styles="hover"]',
        '[data-sb-pseudo-styles="hover"] button',
        '[data-sb-pseudo-styles="hover"] input',
      ],
      focus: [
        '[data-sb-pseudo-styles="focus"]',
        '[data-sb-pseudo-styles="focus-visible"] button',
        '[data-sb-pseudo-styles="focus-visible"] input',
      ],
      focusVisible: [
        '[data-sb-pseudo-styles="focus-visible"]',
        '[data-sb-pseudo-styles="focus-visible"] button',
        '[data-sb-pseudo-styles="focus-visible"] input',
      ],
    },
  },
}

export const StickerSheetDefault: StoryObj<StickerSheetStory> = {
  ...TableTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StoryObj<StickerSheetStory> = {
  ...TableTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { ...TableTemplate.parameters, textDirection: "rtl" },
}

export const StickerSheetReversed: StoryObj<StickerSheetStory> = {
  ...TableTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...TableTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: {
    isReversed: true,
  },
}

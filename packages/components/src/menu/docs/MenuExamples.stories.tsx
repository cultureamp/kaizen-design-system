import React, { useState } from "react"
import { Paragraph } from "@components/typography"
import chevronDown from "@icons/chevron-down.icon.svg"
import chevronUp from "@icons/chevron-up.icon.svg"
import duplicateIcon from "@icons/duplicate.icon.svg"
import editIcon from "@icons/edit.icon.svg"
import meatballsIcon from "@icons/meatballs.icon.svg"
import trashIcon from "@icons/trash.icon.svg"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton } from "@kaizen/button"
import { Box } from "@components/Box"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Menu, MenuList, MenuItem, StatelessMenu } from ".."
import { MenuContentExample } from "./components/MenuContentExample"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.menu}/Examples`,
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          'import { Menu, MenuList, MenuItem, StatelessMenu } from "@kaizen/draft-menu";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=6262%3A1233"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory: ComponentStory<typeof Menu> = args => (
  <Menu
    {...args}
    button={
      <Button label={"Edit menu"} icon={chevronDown} iconPosition="end" />
    }
  >
    <MenuList>
      <MenuItem
        onClick={(e: React.MouseEvent): void => {
          e.preventDefault()
          alert("onClick function to duplicate content")
        }}
        icon={duplicateIcon}
        label="Duplicate item"
      />
      <MenuItem
        onClick={(e: React.MouseEvent): void => {
          e.preventDefault()
          alert("onClick function to edit content")
        }}
        icon={editIcon}
        label="Edit Item"
      />
      <MenuItem
        onClick={(e: React.MouseEvent): void => {
          e.preventDefault()
          alert("onClick function to delete content")
        }}
        icon={trashIcon}
        destructive
        label="Delete item"
      />
    </MenuList>
  </Menu>
)
DefaultStory.storyName = "Basic example"

export const IconExample: Story = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Default", "Primary", "Secondary"]} />
    <StoryWrapper.Row rowTitle="Variant">
      <Menu button={<IconButton label={"Edit menu"} icon={meatballsIcon} />}>
        <MenuContentExample />
      </Menu>
      <Menu
        button={<IconButton primary label={"Edit menu"} icon={meatballsIcon} />}
      >
        <MenuContentExample />
      </Menu>
      <Menu
        button={
          <IconButton secondary label={"Edit menu"} icon={meatballsIcon} />
        }
      >
        <MenuContentExample />
      </Menu>
    </StoryWrapper.Row>
  </StoryWrapper>
)
IconExample.storyName = "Icon button menus"

export const AutoHideBehaviours: Story = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Default", "Primary", "Secondary"]} />
    <StoryWrapper.Row rowTitle="Behaviour">
      <div>
        <Menu
          button={
            <Button label="Label" icon={chevronDown} iconPosition="end" />
          }
          dropdownId="dropdown"
          autoHide="on"
        >
          <MenuContentExample />
        </Menu>
        <Box mt={1}>
          <Paragraph variant="body">
            <strong>autoHide="on"</strong> menu will close when clicking inside
            or outside the menu
          </Paragraph>
        </Box>
      </div>
      <div>
        <Menu
          button={
            <Button label="Label" icon={chevronDown} iconPosition="end" />
          }
          dropdownId="dropdown"
          autoHide="outside-click-only"
        >
          <MenuContentExample />
        </Menu>
        <Box mt={1}>
          <Paragraph variant="body">
            <strong>autoHide="outside-click-only"</strong> menu will close when
            clicking outside the menu, but not inside the menu
          </Paragraph>
        </Box>
      </div>
      <div>
        <Menu
          button={
            <Button label="Label" icon={chevronDown} iconPosition="end" />
          }
          dropdownId="dropdown"
          autoHide="off"
        >
          <MenuContentExample />
        </Menu>
        <Box mt={1}>
          <Paragraph variant="body">
            <strong>autoHide="off"</strong> menu will closes only when button is
            pressed
          </Paragraph>
        </Box>
      </div>
    </StoryWrapper.Row>
  </StoryWrapper>
)
AutoHideBehaviours.storyName = "Auto hide behaviors"

export const DefaultStatelessMenu: Story = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = (): void => setIsMenuVisible(!isMenuVisible)

  const hideMenu = (): void => setIsMenuVisible(false)

  return (
    <>
      <Paragraph variant="body">
        Menu status: {isMenuVisible ? "open" : "closed"}
      </Paragraph>
      <Box py={1}>
        <Button secondary={true} onClick={toggleMenu} label="Toggle menu" />
        <Button secondary={true} onClick={hideMenu} label="Hide menu" />
      </Box>
      <StatelessMenu
        isMenuVisible={isMenuVisible}
        toggleMenuDropdown={toggleMenu}
        hideMenuDropdown={hideMenu}
        renderButton={(buttonProps): JSX.Element => (
          <Button
            label="Label"
            icon={isMenuVisible ? chevronUp : chevronDown}
            iconPosition="end"
            {...buttonProps}
          />
        )}
        onClick={(e): void => e.stopPropagation()}
      >
        <MenuContentExample />
      </StatelessMenu>
      <Box pt={1}>
        <Paragraph variant="body">
          Use the StatelessMenu component if you need to{" "}
          <a href="https://reactjs.org/docs/lifting-state-up.html">
            lift state
          </a>{" "}
          from the Menu component. This gives the flexibility to be able to
          control the state of the dropdown however you like and respond to
          state changes, but it requires more work to configure. It can be used
          instead of `Menu` if this level of flexibility is required. This
          component is used in the FilterDrawer component. View the source code{" "}
          <a
            href={
              "https://github.com/cultureamp/kaizen-design-system/blob/main/draft-packages/stories/Menu.stories.tsx"
            }
          >
            here
          </a>
          .
        </Paragraph>
      </Box>
    </>
  )
}
DefaultStatelessMenu.storyName =
  "Exposed menu state with <StatelessMenu/> component"

export const DropdownWidthContain: Story = () => (
  <Menu
    button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
    dropdownWidth="contain"
  >
    <div style={{ width: "500px" }}>
      The dropdown is as wide as specified value in its first container (500px
      in this instance).
    </div>
  </Menu>
)
DropdownWidthContain.storyName =
  "Flexible dropdown container width with dropdownWidth prop"

export const MenuWithActiveItem: Story = () => (
  <>
    <Box mb={1}>
      <Paragraph variant="body">
        Menus don't usually have "active" items, since they are just a
        collection of links or actions, but in non-standard cases like the
        navigation bar, the `isActive` prop provides a way to do this.
      </Paragraph>
    </Box>
    <Menu
      button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
    >
      <MenuList>
        <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
        <MenuItem
          href="https://www.cultureamp.com/"
          label="Menu link"
          isActive
        />
        <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      </MenuList>
    </Menu>
  </>
)
MenuWithActiveItem.storyName = "Displaying active menu items in Menu"

export const OverflowScroll: Story = () => (
  <>
    <div style={{ overflowX: "scroll", width: "200px", height: "100px" }}>
      <div style={{ width: "500px", textAlign: "center" }}>
        <Menu
          button={
            <Button label="Label" icon={chevronDown} iconPosition="end" />
          }
          // Normally, you'd specify a div by ID, but since this is only in storybook,
          // using `body` is fine (I think). DO NOT USE "BODY" AS A VALUE IN PRODUCTION.
          portalSelector="body"
        >
          <MenuContentExample />
        </Menu>
      </div>
    </div>
    <Paragraph variant="body">
      Scroll the panel above, and open the menu. Notice that the dropdown does
      not get cropped.
    </Paragraph>
  </>
)
OverflowScroll.storyName =
  "Menu behavior with overflow: scroll parent container"

export const ContentAndList: Story = () => (
  <>
    <Menu
      button={<Button label="Label" icon={chevronDown} iconPosition="end" />}
      dropdownId="dropdown"
    >
      <div>
        <strong>Custom content</strong>
      </div>
      <ul>
        <li>
          <a href="/">Custom anchor link</a>
        </li>
        <li>
          <a href="/">Custom anchor link</a>
        </li>
        <li>
          <a href="/">Custom anchor link</a>
        </li>
      </ul>
      <MenuList heading="Menu primitives">
        <MenuItem
          href="https://www.cultureamp.com/"
          label="MenuItem primitive link"
        />
        <MenuItem
          href="https://www.cultureamp.com/"
          label="MenuItem primitive link"
        />
        <MenuItem
          href="https://www.cultureamp.com/"
          label="MenuItem primitive link"
        />
      </MenuList>
    </Menu>
    <Box mt={1}>
      <Paragraph variant="body">
        This can be beneficial if you are using the React Router or the Next.js
        Link component or have custom content needed in the menu
      </Paragraph>
    </Box>
  </>
)
ContentAndList.storyName =
  "Using custom content or non-Menu primitives within a Menu"

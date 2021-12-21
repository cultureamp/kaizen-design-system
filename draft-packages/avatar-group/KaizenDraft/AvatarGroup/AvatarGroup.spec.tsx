import * as React from "react"
import { render, screen } from "@testing-library/react"
import { AvatarGroup } from "./AvatarGroup"

const avatarGroupData = [
  {
    fullName: "Adirana Aniseed",
    disableInitials: false,
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
    isCurrentUser: false,
    size: "large",
  },
  {
    fullName: "Adirana Aniseed",
    disableInitials: false,
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
    isCurrentUser: false,
    size: "large",
  },
  {
    fullName: "Adirana Aniseed",
    disableInitials: false,
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
    isCurrentUser: false,
    size: "large",
  },
  {
    fullName: "Adirana Aniseed",
    disableInitials: false,
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
    isCurrentUser: false,
    size: "large",
  },
]

describe("<AvatarGroup />", () => {
  it("renders a list of avatars up to the maxVisible value", () => {
    render(<AvatarGroup avatars={avatarGroupData} maxVisible={4} />)
    expect(screen.getAllByRole("img")).toHaveLength(4)
  })
  it("renders a token with a counter of the remaining avatars is maxVisible is exceeded", () => {
    // render(<AvatarGroup avatars={avatarGroupData} maxVisible={3} />)
  })
  it("sets the size of the avatars and renders them accordingly", () => {
    // render(
    //   <AvatarGroup avatars={avatarGroupData} size="large" maxVisible={3} />
    // )
  })
  it("renders Company Avatars", () => {
    // render(<AvatarGroup avatars={avatarGroupData} maxVisible={3} />)
  })
  it("renders Company Avatars", () => {
    // render(<AvatarGroup avatars={avatarGroupData} maxVisible={3} />)
  })
})

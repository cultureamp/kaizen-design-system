import React from "react"
import { render } from "@testing-library/react"
import { AvatarGroup, AvatarList } from "./AvatarGroup"

const imgAvatars = [
  {
    fullName: "Adirana Aniseed",
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  },
  {
    fullName: "Adirana Aniseed",
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  },
  {
    fullName: "Adirana Aniseed",
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  },
  {
    fullName: "Adirana Aniseed",
    avatarSrc:
      "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  },
] as AvatarList

describe("<AvatarGroup />", () => {
  it("renders a list of avatars up to the maxVisible value", () => {
    const { getAllByRole } = render(
      <AvatarGroup avatars={imgAvatars} maxVisible={4} />
    )

    expect(getAllByRole("img", { name: "Adirana Aniseed" })).toHaveLength(4)
  })

  it("renders a token with a counter of the remaining avatars is maxVisible is exceeded", () => {
    const { getByText } = render(
      <AvatarGroup avatars={imgAvatars} maxVisible={2} />
    )

    expect(getByText("+2")).toBeInTheDocument()
  })
})

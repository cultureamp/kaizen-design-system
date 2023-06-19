import React from "react"
import { render, screen } from "@testing-library/react"
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
    render(<AvatarGroup avatars={imgAvatars} maxVisible={4} />)

    expect(
      screen.getAllByRole("presentation", { name: "Adirana Aniseed" })
    ).toHaveLength(4)
  })

  it("Overides the size of individual Avatars with the size set on AvatarGroup", () => {
    const { container } = render(
      <AvatarGroup
        avatars={[
          {
            fullName: "Adirana Aniseed",
            avatarSrc:
              "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
            // @ts-expect-error
            // Used to ignore the TS error when adding size to data.
            // This would throw a TS error but wouldn't render a large size avatar.
            size: "large",
          },
        ]}
        maxVisible={4}
        size="small"
      />
    )
    const avatarsWithLargeClass = container.querySelectorAll(".large").length
    expect(avatarsWithLargeClass).toBe(0)
  })

  it("renders a token with a counter of the remaining avatars is maxVisible is exceeded", () => {
    render(<AvatarGroup avatars={imgAvatars} maxVisible={2} />)

    expect(screen.getByText("+2")).toBeInTheDocument()
  })
})

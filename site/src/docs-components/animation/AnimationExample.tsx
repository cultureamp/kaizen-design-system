import {
  Dropdown,
  MenuHeader,
  MenuItem,
  MenuList,
  MenuSeparator,
  Text,
} from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"
import Drop from "./Drop"

type AnimationExampleProps = {
  color: string
  render?: any
  name: string
}

class AnimationExample extends React.PureComponent<AnimationExampleProps> {
  state = {
    isAnimating: false,
    duration: 400,
    preset: "slow",
  }
  presets = [
    { preset: "immediate", duration: 100 },
    { preset: "rapid", duration: 200 },
    { preset: "fast", duration: 300 },
    { preset: "slow", duration: 400 },
    { preset: "deliberate", duration: 700 },
  ]

  playAnimation = () => {
    const { duration } = this.state

    this.setState({ isAnimating: true }, () => {
      setTimeout(() => this.setState({ isAnimating: false }), duration)
    })
  }

  getPresetMenu = () => {
    const { duration, preset } = this.state

    return (
      <Dropdown label={`${preset} (${duration}ms)`} controlAction>
        <MenuList>
          <MenuHeader title="Duration Presets" />
          {this.presets.map(item => (
            <MenuItem
              key={item.preset}
              action={() =>
                this.setState(
                  { preset: item.preset, duration: item.duration },
                  this.playAnimation
                )
              }
              active={item.preset === preset}
            >
              {item.preset}
            </MenuItem>
          ))}
        </MenuList>
      </Dropdown>
    )
  }

  render() {
    const { color = "#3E4543", render, name } = this.props
    const { isAnimating, preset } = this.state

    const classes = classnames(`ca-duration-${preset}`, {
      [`ca-animation-${name}`]: isAnimating,
    })

    return (
      <Drop onClick={this.playAnimation} color={color} classes={classes}>
        <Text tag="div" style="label">
          {name}
        </Text>
        <div>{this.getPresetMenu()}</div>
      </Drop>
    )
  }
}

export default AnimationExample

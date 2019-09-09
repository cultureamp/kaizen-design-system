import {
  Dropdown,
  MenuHeader,
  MenuItem,
  MenuList,
  MenuSeparator,
  Text,
} from "@cultureamp/kaizen-component-library"
import classnames from "classnames"
import React from "react"
import Drop from "./Drop"

type TransitionDropProps = {
  name: string
  color: string
}

class TransitionDrop extends React.PureComponent<TransitionDropProps> {
  state = {
    isAnimating: false,
    direction: "out",
    duration: 300,
    preset: "fast",
  }
  presets = [
    { preset: "immediate", duration: 100 },
    { preset: "rapid", duration: 200 },
    { preset: "fast", duration: 300 },
    { preset: "slow", duration: 400 },
    { preset: "deliberate", duration: 700 },
  ]

  updateTransitionDirection = () => {
    const { direction } = this.state
    const newTransitionDirection = direction === "out" ? "in" : "out"

    this.setState({
      isAnimating: false,
      direction: newTransitionDirection,
    })
  }

  playTransition = () => {
    const { duration, preset } = this.state

    this.setState({ isAnimating: true }, () => {
      setTimeout(this.updateTransitionDirection, duration)
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
                  this.playTransition
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
    const { color = "#333", render, name } = this.props
    const { isAnimating, direction, preset } = this.state
    const state = direction === "in" ? "enter" : "exit"

    const classes = classnames(
      `ca-duration-${preset}`,
      `ca-transition-${name}-${direction}`,
      `ca-${state}`,
      {
        [`ca-${state}-active`]: isAnimating,
      }
    )

    return (
      <Drop classes={classes} color={color} onClick={this.playTransition}>
        <Text tag="div" style="label">
          {name}-{direction}
        </Text>
        <div>{this.getPresetMenu()}</div>
      </Drop>
    )
  }
}

export default TransitionDrop

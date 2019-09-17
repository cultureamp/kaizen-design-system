import * as React from "react"
import AnimationExample from "./AnimationExample"
import "./AnimationPresetsExample.scss"
import Grid from "./Grid"

class AnimationPresetsExample extends React.PureComponent {
  render() {
    return (
      <Grid>
        <AnimationExample name="fade-in" color="#78262F" />
        <AnimationExample name="fade-out" color="#902E38" />
        <AnimationExample name="pop" color="#A83541" />
        <AnimationExample name="pulsate" color="#D84454" />
        <AnimationExample name="scale-fade-in" color="#F04C5D" />
        <AnimationExample name="scale-fade-out" color="#F25E6D" />
        <AnimationExample name="slide-fade-in" color="#F5828E" />
        <AnimationExample name="slide-fade-out" color="#F8A6AE" />
      </Grid>
    )
  }
}

export default AnimationPresetsExample

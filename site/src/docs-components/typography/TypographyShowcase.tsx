import * as React from "react"
const styles = require("./TypographyShowcase.scss")

class TypographyItem extends React.Component {
  state = {}

  componentDidMount() {
    const style = window.getComputedStyle(this.paragraph)
    console.log(style)
    this.setState({
      size: `${style.fontSize} / ${style.lineHeight}`,
    })
  }

  render() {
    const { name, sampleText, className, sassCode } = this.props
    const title = this.state.size ? `${name} – ${this.state.size}` : name
    return (
      <div className={styles.typographyShowcaseItem}>
        <p ref={p => (this.paragraph = p)} className={styles[className]}>
          {title}
        </p>
        <pre>{sassCode}</pre>
      </div>
    )
  }
}

const TypographyShowcase = () => (
  <div className={styles.showcase}>
    <TypographyItem
      name="Page Title (H1)"
      sampleText="Have the courage to be vulnerable"
      className="pageTitle"
      sassCode="@include ca-type-ideal-page-title;"
    />
    <TypographyItem
      name="Title (H2)"
      sampleText="Have the courage to be vulnerable"
      className="title"
      sassCode="@include ca-type-ideal-title;"
    />
    <TypographyItem
      name="Display (H3)"
      sampleText="Learn faster through feedback"
      className="display"
      sassCode="@include ca-type-ideal-display;"
    />
    <TypographyItem
      name="Heading (H4)"
      sampleText="Trust people to make decisions"
      className="heading"
      sassCode="@include ca-type-ideal-heading;"
    />
    <TypographyItem
      name="Lede (Intro)"
      sampleText="Values are not what you want to be on a good day. Values are what you are willing to hurt for every day."
      className="lede"
      sassCode="@include ca-type-ideal-lede;"
    />
    <TypographyItem
      name="Body"
      sampleText="Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”"
      className="body"
      sassCode="@include ca-type-ideal-body;"
    />
    <TypographyItem
      name="Body Bold"
      sampleText="Our mission is to make the power of people analytics accessible to everyone."
      className="bodyBold"
      sassCode="@include ca-type-ideal-body-bold;"
    />
    <TypographyItem
      name="Small"
      sampleText="Had I the heaven's embroidered cloths. Enwrought with golden and silver light. The blue and the dim and the dark cloths of night and light and the half-light. I would spread the cloths under your feet. But I, being poor, have only my dreams. I have spread my dreams under your feet. Tread softly because you tread on my dreams."
      className="small"
      sassCode="@include ca-type-ideal-small;"
    />
    <TypographyItem
      name="Small Bold"
      sampleText="Had I the heaven's embroidered cloths. Enwrought with golden and silver light. The blue and the dim and the dark cloths of night and light and the half-light. I would spread the cloths under your feet. But I, being poor, have only my dreams. I have spread my dreams under your feet. Tread softly because you tread on my dreams."
      className="smallBold"
      sassCode="@include ca-type-ideal-small-bold;"
    />
    <TypographyItem
      name="Notifications"
      sampleText={
        <span>
          "Had I the heaven's embroidered cloths.
          <br />
          Enwrought with golden and silver light.
          <br />
          The blue and the dim and the dark cloths of night and light and the
          half-light.
          <br />I would spread the cloths under your feet.
          <br />
          But I, being poor, have only my dreams.
          <br />I have spread my dreams under your feet.
          <br />
          Tread softly because you tread on my dreams."
          <br />
          &mdash; William Butler Yeats
        </span>
      }
      className="notification"
      sassCode="@include ca-type-ideal-notification;"
    />
    <TypographyItem
      name="Labels"
      sampleText="Fact &amp; Truth"
      className="label"
      sassCode="@include ca-type-ideal-label;"
    />
    <TypographyItem
      name="Control Action"
      sampleText="Fact &amp; Truth"
      className="controlAction"
      sassCode="@include ca-type-ideal-control-action;"
    />
    <TypographyItem
      name="Buttons"
      sampleText="Amplify Others"
      className="button"
      sassCode="@include ca-type-ideal-button;"
    />
  </div>
)

export default TypographyShowcase

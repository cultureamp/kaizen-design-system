---
title: Animation
navTitle: Animation
---

<!-- ---
imports:
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  AnimationSequencesExample: ./examples/AnimationSequencesExample.js
  AnimationUsageInputExample: ./examples/AnimationUsageInputExample.js
  AnimationUsageOutputExample: ./examples/AnimationUsageOutputExample.js
  AnimationPresetsExample: ./examples/AnimationPresetsExample.js
  AnimationImportExample: ./examples/AnimationImportExample.js
  DurationPresetsExample: ./examples/DurationPresetsExample.js
  EasingPresetsExample: ./examples/EasingPresetsExample.js
  TransitionPresetsExample: ./examples/TransitionPresetsExample.js
  TransitionUsageInputExample: ./examples/TransitionUsageInputExample.js
  TransitionUsageOutputExample: ./examples/TransitionUsageOutputExample.js
--- -->

# Animation Guide

<div class="introParagraph">

Welcome to the Culture Amp Animation “Getting Started” guide. We hope that the following information will provide you with adequate technical guidelines on how we do animation at Culture Amp. If you believe something is missing or could be improved, please feel free to [contribute](https://github.com/cultureamp/cultureamp-style-guide).

</div>

## Overview

Animation is an integral part of the User Experience we are trying to create within our application. As the Culture Amp product/s mature and grow, we want animation to be an upfront consideration in everything we design and build. This goal brings with it some challenges that we will need to address collaboratively as designers and developers. This animation guide and companion library attempts to reduce the friction of the following challenges.

### Re-usability

**_Developer happiness._**
With the adoption of multiple front-end frameworks, there will be different approaches to doing things. Ideally we need to find a common ground that will enable us to drive the implementation of animations without too much re-work across frameworks.

### Consistency

**_It’s all about the user._**
It is important that we all speak the same language when it comes to animation – for example, agreeing on what kind of animation `pulse` refers to, as opposed to `pop`. Currently there many ways to implement animations with no clear set guidelines to follow. This leads to variations in timings, durations and effects, and an overall inconsistent user experience.

### Performance

**_Smooth as butter._**
This topic can be a little bit controversial and usually involves a comparison between CSS and JS animations. For the purpose of this document, all approaches can be done well and also not so well. We want to ensure the implementation of performant animations is as easy as possible.

To best address the above mentioned goals and challenges, Culture Amp have opted for a “CSS-first” approach to animations. The following guide will show you what tools we have available and how you can get started.

## Animation & Transition Presets

Here are examples of pre-defined CSS transitions and animations that are ready to use. All animations/transitions have accompanying mixins that allow you to define customized behavior in respect to _duration_, _delay_, and _direction_. It is important to make a distinction between animations and transitions as they need to be implemented differently. Although the end result can appear the same, the key difference is that animations are keyframe-driven and will play immediately if not controlled with CSS properties e.g. [`animation-play-state`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state). Transitions, on the other hand, will need to be “triggered”. This is usually activated by a class being added to the element or a user interaction e.g. `hover` (see below for details).

**Animations**

<iframe src="/AnimationPresetsExample" frameborder="0" width="100%" id="foo"></iframe>

<!--- <InlineNotification persistent={true} type="affirmative">**Tip:** If you are doing any kind of prototyping the animation presets are very useful. As they are keyframe-driven, they do not need to be “triggered” like transitions, and will play simply by adding the animation class to the element.</InlineNotification> --->

**Transitions**

<!--- <TransitionPresetsExample /> --->

## Getting Started

Culture Amp have a number of [Sass](https://sass-lang.com/) mixins and animation presets available from [Kaizen](https://github.com/cultureamp/cultureamp-style-guide) for you to use. To start using them, import the animation styles into your Sass file.

<!--- <InlineNotification persistent={true} type="informative">Culture Amp’s animation helpers have been heavily built up [Zurb’s Motion UI](https://github.com/zurb/motion-ui). In fact, most of the mixins are just aliased versions the motion-ui library. This will allow Culture Amp to expand upon and potentially remove this dependency without breaking our animation API.</InlineNotification> --->

<!--- <AnimationImportExample /> --->

### Variables

The Sass animation variables are designed to provide consistency across all Culture Amp animations.

**Easings**

Prefix: `$ca-timing`

<!--- <EasingPresetsExample /> --->

**Durations**

Prefix: `$ca-duration`

<!--- <DurationPresetsExample /> --->

### Mixins

#### Animations

To use any of the animation presets, simply define a class and include the mixin. All preset animation mixins are prefixed with `ca-animation-`.

##### Animation Presets

##### Example

##### SASS Input

<!--- <AnimationUsageInputExample /> --->

##### CSS Output
<!--- <AnimationUsageOutputExample /> --->


| Type       | Mixin                              |
| ---------- | ---------------------------------- |
| Fade       | `@include ca-animation-fade`       |
| Pop        | `@include ca-animation-pop`        |
| Pulsate    | `@include ca-animation-pulsate`    |
| Scale Fade | `@include ca-animation-scale-fade` |
| Slide Fade | `@include ca-animation-slide-fade` |

| Param                   | Description                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| `state` (`in` or `out`) | State to transition to. (Default: `in`)                                          |
| `duration` (Keyword)    | Length (speed) of the transition. (Default: `$ca-duration-slow`)                 |
| `delay` (Duration)      | Delay in seconds or milliseconds before the transition starts. (Default: `null`) |

#### Transitions

To use any of the transition presets, simply define a class and include the mixin. All preset transition mixins are prefixed with `ca-transition-`.

##### Transition Presets

<!--- <InlineNotification persistent={true} type="informative">**Note:** Transitions will need to be “triggered” by adding `.ca-enter-active` or `.ca-exit-active` classes.</InlineNotification> --->

##### SASS Input

<!--- <TransitionUsageInputExample /> --->

##### CSS Output

<!--- <TransitionUsageOutputExample /> --->

| Type       | Mixin                               |
| ---------- | ----------------------------------- |
| Fade       | `@include ca-transition-fade`       |
| Scale Fade | `@include ca-transition-scale-fade` |
| Slide Fade | `@include ca-transition-slide-fade` |

| Param                   | Description                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| `state` (`in` or `out`) | State to transition to. (Default: `in`)                                          |
| `duration` (Keyword)    | Length (speed) of the transition. (Default: `$ca-duration-slow`)                 |
| `delay` (Duration)      | Delay in seconds or milliseconds before the transition starts. (Default: `null`) |

### Sequencing Animations

Sequencing animations with CSS/Sass can be cumbersome. To reduce verbosity and complexity, we have a couple of mixins that will help orchestrate more complex animation sequences.

<!--- <AnimationSequencesExample /> --->

<!--- <InlineNotification persistent={true} type="informative">**Note:** This mixin will only work with animation keyframe functions e.g. `pop` and `pulsate`.</InlineNotification> --->

| Param      | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| `duration` | Length (speed) of the transition                                          |
| `delay`    | Delay in seconds or milliseconds before starting the next transition      |
| `function` | one or more animation keyframe functions e.g. `pulsate`, `pop`, `fade`... |

## Technical considerations

### Rendering performance

For fast 60&nbsp;frames-per-second animations, you can cheaply animate:

* Opacity
* Translate (move the position)
* Scale (pixel scaling)
* Rotate

<!--- <InlineNotification persistent={true} type="informative">**Note:** none of these affect the “box” the item takes up on the page. You can use `transform: scale` or `transform: translate`, but the content will still take up the same space on the page as if no `transform` had been applied.</InlineNotification> --->

For animating other properties, you might use `will-change` so the browser can set up appropriate optimizations ahead of time before the element is actually changed.

### Animate collapsing height

There are trade-offs to the different approaches to expand and collapse animations.

* `transform: scaleY()` - fast, but items below do not move up
* `transform: translateY()` - fast, but items below do not move up
* `height: 0` - the box shrinks height, so content inside is reflowed (can look awkward, or generate scrollbars, etc.)
* `margin-top:` - the box stays the same size, but shifts up and consumes less space, so items below shift up. (This can result in overlapping content above if you are not careful!) Useful if you want to “slide behind” another element or if you time it so the shift up happens in conjunction with a fade out such that it has mostly faded out by the time it would overlap with other content.

## FAQs

**Question:** Will this approach completely remove the need for JavaScript-based animations?

**Answer:** No.
**Better answer:** There will most likely still be a need for programmatically-driven animations. However, whenever possible, a CSS alternative solution should be favoured.

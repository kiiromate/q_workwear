---
name: Q Workwear
description: A quiet, photography-led workwear showroom.
colors:
  primary: "#b73329"
  primary-hover: "#93271f"
  paper: "#fafaf8"
  ink: "#202421"
  muted: "#5c615d"
  line: "#d9dcd6"
  inverse: "#ffffff"
typography:
  display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(48px, 6.4vw, 96px)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 52px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "16px"
    fontWeight: 500
rounded:
  square: "0px"
spacing:
  small: "16px"
  medium: "24px"
  large: "32px"
  section: "clamp(64px, 7vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
---

# Design System: Q Workwear

## Overview

**Creative North Star: "The Workwear Showroom"**

A restrained commercial showcase: the garments carry the image, the typography carries the offer, and the interface stays quiet. The visual system is flat and light so fabric colour, cut and material remain legible on mobile and desktop.

**Key Characteristics:**
- Unobscured imagery and open layouts.
- One sans-serif family with measured scale changes.
- A single red action colour, not scattered decorative accents.
- Concise headings without stacked labels or badges.

## Colors

Primary red anchors quotation actions, active filter rules, selection and the closing quotation band. It is darker than the supplied logo red to support white button text. The logo itself is not recoloured. Paper, ink, muted and line are the neutral surface hierarchy; token values above match the built stylesheet.

**The Visible Product Rule.** Photography is not darkened, tinted or hidden behind text to manufacture atmosphere. Lighting belongs in the image.

## Typography

Barlow Regular, Medium and SemiBold are self-hosted with the SIL license. Display and section headings use medium weight, tight but readable tracking and balanced wrapping. Body copy is sentence case; there is no decorative monospace or artificial uppercase metadata tier.

Catalogue collection headings are larger than product enquiry titles. Most explanatory copy is limited to 31–50 characters per line; FAQ answers allow up to 65ch. Display never exceeds the recorded maximum.

**The One Heading Rule.** A section earns a heading and useful content, not a kicker, heading, subtitle and explanatory footer repeating the same idea.

## Layout

The container caps at 1488px, with fluid horizontal padding from 24px to 72px. Major sections use the recorded fluid section spacing. The homepage collection grid is four columns above 1050px and two below. Collection and story layouts use two columns; secondary pages stack at 640px. The mobile homepage keeps two compact collection windows with short names.

The main navigation changes to a modal menu at 1050px. The mobile header is 76px high; desktop is 88px. Image windows reserve their aspect ratio: portrait collection views use 4:5, catalogue views use 4:3, and the opening image becomes nearly square on phones.

## Elevation & Depth

Flat by default: no card shadows, glow, glass or artificial material textures. Depth comes from the photographs. Dividers and spacing separate content; a red field distinguishes the close of a browsing journey.

## Shapes

Square image frames, square buttons and square form fields. No rounded container stack. Rules are thin and functional. The small-size brand mark is a crop of the supplied asset, not a redrawn symbol.

## Components

### Buttons and links

Buttons are sentence-case, medium-weight, at least 48px high. Primary buttons use red with white text; the red closing band inverts the button to white. Links use clear underlines where a standalone action needs emphasis; product names are enquiry links with a consistent Lucide arrow. Visible focus is a two-pixel red outline offset from the control.

### Collection windows

Images appear without badges or overlays. Hover gently reframes a linked image using a 1.035 scale over 650ms with an ease-out curve. Reduced-motion preference disables this transition. Captions sit below the image, not over it.

### Filters

A wrapping group of native buttons, not a scroll-hidden pill rail. Selection uses `aria-pressed` and a red bottom rule. The URL records selection; Back and Forward restore it.

### Forms and FAQs

Fields have persistent visible labels, square borders and native browser validation. Optional fields are identified. The enquiry action explicitly opens a draft rather than claiming a submission. FAQs use native details/summary controls.

### Navigation

Active desktop links use a red underline. Native modal dialog behaviour contains mobile focus, supports Escape and restores focus on close. A skip link reaches the main content.

## Do's and Don'ts

### Do:
- Do use a few strong images repeatedly rather than commissioning filler for every row.
- Do keep product names short and action wording literal.
- Do preserve visible keyboard focus and reduced-motion behaviour.
- Do keep verification notes in internal documentation.

### Don't:
- Don't add tailoring-ruler stripes, stitch borders, floating labels or ornamental cards.
- Don't obscure the product with gradients or dark overlays.
- Don't use fictional projects, invented quotes or unsupported specifications as proof.
- Don't treat missing final imagery as permission to introduce decorative UI.

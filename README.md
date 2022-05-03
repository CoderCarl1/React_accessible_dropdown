# Accessible Dropdown Menu

[live Example - _external site_](https://dropdown-a11y.netlify.app/)

## Contents

- [Intro](#intro)
- [Installation](#installation)
- [About](#about)
- [Examples](#examples)
- [Variants](#variants)
- [functionality](#functionality)
  - [Keyboard](#keyboard)
- [todo](#todo)

## Intro

There are a lot of dropdowns that are not accessible to screen readers

This can be due to any number of things but commonly will be:

- Incorrect use of Aria
- Keyboard navigation controls that either are non-standard or trap the user.
- Non-visible focus states
- Use of non semantic Elements

Read more about how to make your own custom (and accessible) dropdown menu on this [smashing magazine article - _external link_](https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/) by Heydon Pickering

## Installation

This application is created wih Ruby on Rails. If you would like to setup this Application on your personal machine these are the steps required.

<details>
<summary>Instructions</summary>

- fork and clone the Repo
- navigate into the Dropdown repo
- npm install
- npm run start will open the example component on port 3000: [localhost:3000 ](http://localhost:3000/) _external site_

</details>

## About

The App is a compound component. This means that the component **must** be laid out in the order shown within the [example](#example).

The dropdown menu is styled to dropdown but all other styling is up to you, the developer.

Each component can accept props (classNames, functions, atttributes), and a variant (_*currently only default available*_).

- Written in React & Typescript with Functional Components
- State shared using Context
- Functionality hidden from developer to make easy to implement

## Examples

<details>
<summary> Example Code for menu</summary>

```jsx
<Dropdown>
  <Dropdown.Trigger label="TEST LABEL" variant="default">
    Menu
  </Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item>
      <button>hello</button>
    </Dropdown.Item>
    <Dropdown.Item>
      <a href="/#">world</a>
    </Dropdown.Item>
    <Dropdown.Item>
      <p>hello</p>
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
```

</details>

### Variants

default: basic styling will be added to the component (colours / outlines etc.)

## Functionality

### Keyboards

Each focusable child passed to Dropdown. Item can be programmatically focused using the keyboard once the menu has been opened.
focusable children include:

- `<a>` - must have a href
- `<button>`
- `input`
- `<textarea>`
- `<select>`
- `<details>`
- any other element you have added a tabindex to that is not -1

> **note:** _All elements listed above will have a tabindex={-1} added to it_

## TODO

- Tests
- Add submenu functionality
- Detect menu collision with edge of Window - move appropriately to remain in view
- Add to NPM
- Additional Variants

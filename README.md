# Accessible Dropdown Menu

## intro

There are a lot of dropdowns that are not accesible to screen readers

This can be due to:

- not visible focus states
- keyboard navigation
- incorrect use of Aria
- incorrect use of non semantic Elements

The App is a compound component
Each component can accept props, and a variant

## Example

<details>
<summary> Example Code for menu</summary>

```html
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

### Keyboard functionality

Each focusable child passed to Dropdown. Item can be programmatically focused using the keyboard once the menu has been opened.
focusable children include:

- a tags with a valid href
- button
- input
- textarea
- select
- details
- any element you have added a tabindex to that is not -1

_* All elements listed above will have a tabindex={-1} added to it *_

## TODO

- Tests
- Add submenu functionality
- Detect menu collision with edge of Window - move appropriately to remain in view
- Add to NPM
- Additional Variants

## About

- Written in React & Typescript with Functional Components
- State shared using Context
- Functionality hidden from developer to make easy to implement

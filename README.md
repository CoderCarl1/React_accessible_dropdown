# Accessible Dropdown Menu

## intro

There are a lot of dropdowns that are not accesible to screen readers

This can be due to:

- visible focus states
- keyboard navigation
- incorrect use of Aria

The App is a compound component
Each component can accept props, and a variant

## Example

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

### Keyboard functionality

Each child passed to Dropdown.Item can be focused using the keyboard once the menu has been opened

## TODO

- Tests
- Add submenu functionality
- Detect menu collision with edge of Window - move appropriately to remain in view
- Add to NPM
- Additional Variants

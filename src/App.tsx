import Dropdown from "./Dropdown/DropdownContainer";

export default function App() {
  return (
    <div className="App">
      <Dropdown>
        <Dropdown.Trigger label="TEST LABEL" variant="default">
          Menu 2
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>
            <button>hello test test test</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button>hello</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/#">hello</a>
          </Dropdown.Item>
          {/* <Dropdown.Item>
            <Dropdown>
              <Dropdown.Trigger label="TEST LABEL" variant="default">
                Menu 2
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item>
                  <button>hello</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="/#">hello</a>
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </Dropdown.Item> */}
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}

import { Nav, WindowButtons, WindowButton } from "./Navigation.styles";

function Navigation() {
  return (
    <Nav>
      <WindowButtons>
        <WindowButton color="red" />
        <WindowButton color="yellow" />
        <WindowButton color="green" />
      </WindowButtons>
      <ul>Navigation list</ul>
    </Nav>
  );
}

export default Navigation;

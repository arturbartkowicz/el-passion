import { Nav, WindowButtons, WindowButton } from "./Navigation.styles";

function Navigation() {
  return (
    <Nav>
      <WindowButtons>
        <WindowButton />
        <WindowButton />
        <WindowButton />
      </WindowButtons>
      <ul>Navigation list</ul>
    </Nav>
  );
}

export default Navigation;

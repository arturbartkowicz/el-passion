import { Nav, WindowButtons, WindowButton } from "./Navigation.styles";
import NavigationList from "../../molecules/NavigationList/NavigationList";

function Navigation() {
  return (
    <Nav>
      <WindowButtons>
        <WindowButton color="red" />
        <WindowButton color="yellow" />
        <WindowButton color="green" />
      </WindowButtons>
      <NavigationList />
    </Nav>
  );
}

export default Navigation;

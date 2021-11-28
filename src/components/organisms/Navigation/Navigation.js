import { Nav, WindowButtons, WindowButton } from "./Navigation.styles";
import NavigationList from "../../molecules/NavigationList/NavigationList";

function Navigation({ data }) {
  return (
    <Nav>
      <WindowButtons>
        <WindowButton color="red" />
        <WindowButton color="yellow" />
        <WindowButton color="green" />
      </WindowButtons>
      <NavigationList data={data} />
    </Nav>
  );
}

export default Navigation;

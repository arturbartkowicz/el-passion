import { List } from "./NavigationList.styles";
import NavListItem from "../../atoms/NavListItem/NavListItem";

function NavigationList() {
  return (
    <List>
      <NavListItem icon="github" text="All" />
      <NavListItem icon="open-issue" text="Open" />
      <NavListItem icon="closed-issue" text="Closed" />
    </List>
  );
}

export default NavigationList;

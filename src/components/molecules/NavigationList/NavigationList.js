import { List } from "./NavigationList.styles";
import NavListItem from "../../atoms/NavListItem/NavListItem";

function NavigationList({ data }) {
  return (
    <List>
      <NavListItem icon="github" text="All" counter={data.length} />
      <NavListItem icon="open-issue" text="Open" counter="4" />
      <NavListItem icon="closed-issue" text="Closed" counter="8" />
    </List>
  );
}

export default NavigationList;

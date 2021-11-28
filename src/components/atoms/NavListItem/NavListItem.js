import { ListItem } from "./NavListItem.styles";

function NavListItem({ text, icon }) {
  return (
    <ListItem>
      {icon}
      {text}
    </ListItem>
  );
}

export default NavListItem;

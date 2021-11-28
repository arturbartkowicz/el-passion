import { ListItem } from "./NavListItem.styles";
import openIssue from "../../../assets/icons/icon-open-issue.svg";

function NavListItem({ text, icon }) {
  return (
    <ListItem>
      <img src={openIssue} alt="Girl in a jacket" width="20" height="20" />
      {text}
    </ListItem>
  );
}

export default NavListItem;

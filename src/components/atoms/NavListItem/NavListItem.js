import { ListItem } from "./NavListItem.styles";
import openIssue from "../../../assets/icons/icon-open-issue.svg";
import closedIssue from "../../../assets/icons/icon-closed-issue.svg";
import github from "../../../assets/icons/icon-github.svg";

function NavListItem({ text, icon, counter }) {
  const iconPath = () => {
    switch (icon) {
      case "github":
        return github;
      case "open-issue":
        return openIssue;
      case "closed-issue":
        return closedIssue;
      default:
        console.log("No image");
    }
  };

  return (
    <ListItem>
      <img src={iconPath()} alt="Girl in a jacket" width="20" height="20" />
      {text}
      {counter}
    </ListItem>
  );
}

export default NavListItem;

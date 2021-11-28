import { ListItem, Icon, Counter, Text } from "./NavListItem.styles";
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
      <Icon>
        <img src={iconPath()} alt="Icon" />
      </Icon>
      <Text>{text}</Text>
      <Counter>{counter}</Counter>
    </ListItem>
  );
}

export default NavListItem;

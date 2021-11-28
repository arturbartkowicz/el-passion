import { ListItem } from "./IssuesListItem.styles";

function IssuesListItem({ data }) {
  return (
    <ListItem>
      <p>{data.text}</p>
    </ListItem>
  );
}

export default IssuesListItem;

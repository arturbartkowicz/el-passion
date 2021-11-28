import { List } from "./IssuesList.styles";
import IssuesListItem from "../../atoms/IssuesListItem/IssuesListItem";

function IssuesList({ data }) {
  return (
    <>
      {data.length ? (
        <List>
          {data.map((item) => (
            <IssuesListItem key={item.id} data={item} />
          ))}
        </List>
      ) : (
        <h2>No data to display</h2>
      )}
    </>
  );
}

export default IssuesList;

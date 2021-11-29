import { List, Text } from './IssuesList.styles';
import IssuesListItem from '../../atoms/IssuesListItem/IssuesListItem';
import _ from 'lodash';

function IssuesList({ data }) {
  const groupedData = _.values(_.groupBy(data, (item) => item.date));

  return (
    <>
      {data.length ? (
        <List>
          {groupedData.map((containerByDate) => (
            <>
              <Text>{containerByDate[0].date}</Text>
              {containerByDate.map((item) => (
                <IssuesListItem key={item.id} data={item} />
              ))}
            </>
          ))}
        </List>
      ) : (
        <h2>No data to display</h2>
      )}
    </>
  );
}

export default IssuesList;

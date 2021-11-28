import { Container } from "./GithubWindow.styles";
import Navigation from "../organisms/Navigation/Navigation";
import IssuesList from "../organisms/IssuesList/IssuesList";

function GithubWindow() {
  return (
    <Container>
      <Navigation data={data} />
      <IssuesList data={data} />
    </Container>
  );
}

export default GithubWindow;

const data = [
  {
    id: 1,
    date: "19-07-2016",
    text: "Page changes",
    stateChecked: true,
  },
  {
    id: 2,
    date: "19-07-2016",
    text: "Review of last issues",
    stateChecked: true,
  },
  {
    id: 3,
    date: "18-07-2016",
    text: "Visual UI Update Review",
    stateChecked: false,
  },
  {
    id: 4,
    date: "18-07-2016",
    text: "Sidebar changes",
    stateChecked: false,
  },
  {
    id: 5,
    date: "15-07-2016",
    text: "Crash update",
    stateChecked: false,
  },
  {
    id: 6,
    date: "15-07-2016",
    text: "Page visual UI update Review",
    stateChecked: true,
  },
  {
    id: 7,
    date: "15-07-2016",
    text: "Sidebar update",
    stateChecked: false,
  },
  {
    id: 8,
    date: "14-07-2016",
    text: "Crash issue",
    stateChecked: true,
  },
  {
    id: 9,
    date: "14-07-2016",
    text: "Visual update & Crash resolve",
    stateChecked: true,
  },
  {
    id: 10,
    date: "13-07-2016",
    text: "Lorem",
    stateChecked: false,
  },
  {
    id: 11,
    date: "13-07-2016",
    text: "Lorem 1",
    stateChecked: true,
  },
  {
    id: 12,
    date: "13-07-2016",
    text: "Lorem 2",
    stateChecked: false,
  },
];

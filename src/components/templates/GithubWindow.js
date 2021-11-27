import { Container } from "./GithubWindow.styles";
import Navigation from "../organisms/Navigation/Navigation";
import IssuesList from "../organisms/IssuesList/IssuesList";

function GithubWindow() {
  return (
    <Container>
      <Navigation />
      <IssuesList />
    </Container>
  );
}

export default GithubWindow;

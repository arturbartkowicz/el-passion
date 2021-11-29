import { useState } from "react";
import { Container, Icon } from "./IssuesListItem.styles";
import iconStarSelected from "../../../assets/icons/icon-star-selected.svg";

function IssuesListItem({ data }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container>
      <p>{data.text}</p>
      <Icon>
        <img src={iconStarSelected} alt="Icon" />
      </Icon>
    </Container>
  );
}

export default IssuesListItem;

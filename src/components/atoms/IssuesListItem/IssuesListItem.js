import { useState } from "react";
import { Container, Icon } from "./IssuesListItem.styles";
import iconStarSelected from "../../../assets/icons/icon-star-selected.svg";
import iconStar from "../../../assets/icons/icon-star.svg";

function IssuesListItem({ data }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container>
      <p>{data.text}</p>
      <Icon>
        <img src={isSelected ? iconStarSelected : iconStar} alt="Icon" />
      </Icon>
    </Container>
  );
}

export default IssuesListItem;

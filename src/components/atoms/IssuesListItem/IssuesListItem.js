import { useState } from "react";
import { Container, Icon, Button } from "./IssuesListItem.styles";
import iconStarSelected from "../../../assets/icons/icon-star-selected.svg";
import iconStar from "../../../assets/icons/icon-star.svg";

function IssuesListItem({ data }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container>
      <Button onClick={() => setIsSelected(!isSelected)}>
        <p>{data.text}</p>
        <Icon>
          <img src={isSelected ? iconStarSelected : iconStar} alt="Icon" />
        </Icon>
      </Button>
    </Container>
  );
}

export default IssuesListItem;

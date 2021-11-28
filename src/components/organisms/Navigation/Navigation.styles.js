import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "red":
      return "#FF605C";
    case "yellow":
      return "#FFBD44";
    case "green":
      return "#00CA4E";
    default:
      return "black";
  }
};

export const Nav = styled.nav`
  flex: 3;
  background-color: rgba(-18, 7, 34, 0.9);
`;

export const WindowButtons = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(-18, 7, 34, 0.5);
  height: 45px;
  margin-left: 20px;
`;

export const WindowButton = styled.div`
  background-color: ${({ color }) => handleColorType(color)};
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-right: 10px;
`;

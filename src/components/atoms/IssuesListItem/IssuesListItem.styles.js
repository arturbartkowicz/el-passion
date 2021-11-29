import styled from "styled-components";

export const Container = styled.li``;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  padding: 15px;
  margin-top: 7px;
  margin-bottom: 7px;
  border-radius: 10px;
  border: 1px solid #c0c0c0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: #e5e4e2;
  }
`;

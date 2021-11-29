import styled from 'styled-components';

export const ListItem = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  color: white;

  &:hover {
    background-color: rgba(40, 30, 60);
  }

  &[selected] {
    background-color: rgba(40, 30, 60);
  }
`;

export const Icon = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  margin-right: 10px;
`;

export const Counter = styled.div`
  margin-left: auto;
  margin-right: 20px;
  color: gray;
`;

export const Text = styled.p`
  font-weight: 700;
`;

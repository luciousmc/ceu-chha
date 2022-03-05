import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const DashboardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid red;

  > p {
    color: #777;
    font-size: 0.75rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

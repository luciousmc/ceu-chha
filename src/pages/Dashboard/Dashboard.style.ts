import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const DashboardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;

  > p {
    color: var(--clr-darker);
    font-size: 0.75rem;
  }

  > div > p {
    color: #555;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

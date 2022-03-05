import styled from 'styled-components';

export const DashboardBannerContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    hsl(259 89% 39%),
    hsla(292 33% 50% / 0.86)
  );
  display: flex;
  align-items: center;
  padding: 1.2rem 2.2rem;
  color: white;

  ul {
    columns: 2;
    list-style: none;
    font-size: 0.8rem;
  }
`;

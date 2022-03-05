import styled from 'styled-components';

export const DashboardBannerContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    hsl(259 89% 39%),
    hsla(292 33% 50% / 0.86)
  );
  color: white;

  h2 {
    font-weight: normal;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ul {
    columns: 2;
    list-style: none;
    font-size: 0.8rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.5rem;
`;

export const ImgPlaceholder = styled.div`
  width: 125px;
  height: 125px;
  border: 2px solid white;
  background-color: #777;
`;

export const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ClassInfo = styled.div`
  display: flex;

  div:first-child {
    border-right: 1px solid white;
    padding-right: 0.8rem;
  }

  div:last-child {
    border-left: 1px solid white;
    padding-left: 0.8rem;
  }

  p {
    font-size: 2.5rem;
    text-align: center;
  }

  span {
    font-size: 0.8rem;
  }
`;

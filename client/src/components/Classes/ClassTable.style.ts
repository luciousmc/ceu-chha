import styled from 'styled-components';
import TableRow from '@mui/material/TableRow';

export const ClassTableContainer = styled.section`
  display: grid;
  place-items: center;
  padding: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    > h3 {
      font-weight: normal;
      font-size: 1.4rem;
    }
  }

  table {
    width: 100%;
  }
`;

export const ClassRow = styled(TableRow)`
  margin-bottom: 5px !important;
`;

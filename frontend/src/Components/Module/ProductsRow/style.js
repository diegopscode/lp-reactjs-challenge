import styled from 'styled-components';

import Media from '../../../Styled/Media';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 -5px;
  flex-wrap: wrap;

  @media (min-width: ${Media.mobile}) {
    flex-wrap: no-wrap;
  }
`;

export const RowItem = styled.div`
  margin: 5px;
  flex: 180px;
`;

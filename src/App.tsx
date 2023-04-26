import { css } from '@emotion/react';
import { GlobalStyles } from './styles/global';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <div
        css={css`
          width: 100vw;
          height: 100vh;
        `}
      >
        hello world
      </div>
    </>
  );
};

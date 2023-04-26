import { css } from '@emotion/react';
import { GlobalStyles } from './styles/global';
import { useState } from 'react';
import { Button } from './components/button';

export const App = () => {
  const [lifeA, setLifeA] = useState(8000);
  const [lifeB, setLifeB] = useState(8000);

  const handleReset = () => {
    if (window.confirm('リセットしてOK?')) {
      setLifeA(8000);
      setLifeB(8000);
    }
  };

  return (
    <>
      <GlobalStyles />
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          display: flex;
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          {lifeA}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <Button
            onClick={() => {
              handleReset();
            }}
          >
            reset
          </Button>
        </div>
        <div
          css={css`
            flex: 1;
          `}
        >
          {lifeB}
        </div>
      </div>
    </>
  );
};

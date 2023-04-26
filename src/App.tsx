import { css } from '@emotion/react';
import { GlobalStyles } from './styles/global';
import { useState } from 'react';
import { Button } from './components/button';
import { Life } from './components/life';

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
        <Life life={lifeA} setLife={setLifeA} />
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
        <Life life={lifeB} setLife={setLifeB} />
      </div>
    </>
  );
};

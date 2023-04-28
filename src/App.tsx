import { css } from '@emotion/react';
import { useState } from 'react';
import { GlobalStyles } from './styles/global';
import { Button } from './components/button';
import { Life } from './components/life';

export const App = () => {
  const [lifeA, setLifeA] = useState(8000);
  const [lifeB, setLifeB] = useState(8000);

  const [history, setHistory] = useState([[8000, 8000]]);

  const handleReset = () => {
    if (window.confirm('リセットしてOK?')) {
      setLifeA(8000);
      setLifeB(8000);
      setHistory([[8000, 8000]]);
    }
  };

  const handleUndo = () => {
    setHistory((history) => history.slice(0, -1));
    const life = history[history.length - 1];
    setLifeA(life[0]);
    setLifeB(life[1]);
  };

  const addHistory = () => {
    setHistory((history) => {
      const newHis = [lifeA, lifeB];
      return [...history, newHis];
    });
  };

  return (
    <>
      <GlobalStyles />
      <div
        css={css`
          width: 100vw;
          height: 100dvh;
          display: flex;
        `}
      >
        <Life life={lifeA} setLife={setLifeA} addHistory={addHistory} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 2rem;
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
          <Button
            onClick={() => {
              handleUndo();
            }}
            disabled={history.length <= 1}
          >
            undo
          </Button>
        </div>
        <Life life={lifeB} setLife={setLifeB} addHistory={addHistory} />
      </div>
    </>
  );
};

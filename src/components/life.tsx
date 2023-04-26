import * as React from 'react';
import { css } from '@emotion/react';
import { Button } from './button';
import { Dialog, DialogContent, DialogTrigger } from './dialog';

interface Props {
  life: number;
  setLife: React.Dispatch<React.SetStateAction<number>>;
}

export const Life = ({ life, setLife }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState('');
  const parseValue = (value: string) => {
    const parsed = parseInt(value, 10);
    if (Number.isNaN(parsed)) {
      return '';
    }

    return parsed;
  };

  const plus = () => {
    setLife((l) => {
      const parsed = parseInt(state);
      if (Number.isNaN(parsed)) {
        return l;
      }
      return l + parsed;
    });
    setState('');
    setOpen(false);
  };

  const minus = () => {
    setLife((l) => {
      const parsed = parseInt(state);
      if (Number.isNaN(parsed)) {
        return l;
      }
      const result = l - parsed;
      return result > 0 ? result : 0;
    });
    setState('');
    setOpen(false);
  };

  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div
            css={[
              css`
                width: 90%;
                height: 90%;
                border: 1px solid #aaa;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
              `,
              life <= 500 &&
                life > 0 &&
                css`
                  background-color: #fcc;
                  border-color: #a00;
                `,
            ]}
          >
            <span
              css={[
                css`
                  font-size: 3rem;
                `,
                life <= 500 &&
                  css`
                    color: #f00;
                  `,
              ]}
            >
              {life}
            </span>
            {life <= 500 && life > 0 && <div>エンタメデュエル！！！！</div>}
          </div>
        </DialogTrigger>
        <DialogContent>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 0.2rem;
            `}
          >
            <input
              readOnly
              value={state}
              css={css`
                width: 100%;
                font-size: 2rem;
              `}
            />
            <div
              css={css`
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                justify-items: center;
                align-items: center;
              `}
            >
              {['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '00'].map((item) => (
                <Button
                  onClick={() => {
                    setState((s) => s + item);
                  }}
                  variant='square'
                >
                  {item}
                </Button>
              ))}
              <Button
                onClick={() => {
                  setState((s) => s.slice(0, -1));
                }}
                variant='square'
              >
                del
              </Button>
            </div>
            <div
              css={css`
                display: flex;
                gap: 1rem;
                justify-content: center;
                align-items: center;
              `}
            >
              <Button onClick={plus} variant='square'>
                ＋
              </Button>
              <Button onClick={minus} variant='square'>
                －
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

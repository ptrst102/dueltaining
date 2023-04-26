import * as React from 'react';
import { css } from '@emotion/react';
import { Button } from './button';

interface Props {
  life: number;
  setLife: React.Dispatch<React.SetStateAction<number>>;
}

export const Life = ({ life, setLife }: Props) => {
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 90%;
          height: 90%;
          border: 1px solid #aaa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        `}
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
        {life <= 500 && <div>エンタメデュエル！！！！</div>}
      </div>
    </div>
  );
};

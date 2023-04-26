import * as React from 'react';
import { css } from '@emotion/react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        css={css`
          padding: 0.5rem;
          color: #333;
          background-color: #cccccc;
          border: #999999 solid 1px;
          :hover {
            background-color: #dddddd;
          }
        `}
        {...props}
      >
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

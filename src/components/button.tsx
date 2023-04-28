import * as React from 'react';
import { css } from '@emotion/react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'normal' | 'square';
};
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', variant = 'normal', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        css={[
          css`
            color: #333;
            background-color: #cccccc;
            border: #999999 solid 1px;
            :hover {
              background-color: #dddddd;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            :disabled {
              opacity: 0.5;
              pointer-events: none;
            }
          `,
          variant === 'normal' &&
            css`
              padding: 0.5rem;
            `,
          variant === 'square' &&
            css`
              font-size: 1.2rem;
              width: 4rem;
              height: 2rem;
            `,
        ]}
        {...props}
      >
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

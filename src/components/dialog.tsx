import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { css } from '@emotion/react';

export const DialogContent = React.forwardRef<HTMLDivElement, DialogPrimitive.DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        css={css`
          background-color: #00000011;
          position: fixed;
          inset: 0;
        `}
      />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        css={css`
          background-color: white;
          border-radius: 6px;
          box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90vw;
          max-width: 450px;
          max-height: 85vh;
          padding: 25px;
        `}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

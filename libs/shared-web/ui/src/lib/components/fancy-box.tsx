import { ReactNode } from 'react';

export function FancyBox({ children }: { children: ReactNode }) {
  return (
    <div style={{ border: '1px  solid lightgray', borderRadius: '5px' }}>
      {children}
    </div>
  );
}

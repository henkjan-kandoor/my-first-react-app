// src/components/Title.tsx
import React from 'react';

// export function Title({ content }: { content: string }) {
//     return <h1>{content}</h1>;
//   }

type Props = {
  content: string;
};

export function Title({ content }: Props) {
  return <h1>{content}</h1>;
}

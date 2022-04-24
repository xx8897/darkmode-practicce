import React from 'react';
import { Provider as DarkModeProvider } from '../contexts/DarkMode';

export default function App({ children }) {
  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
}

import React, { createContext, useState } from 'react';

interface ResultContextShape {
  resultDataUrl?: string;
  setResultDataUrl: (url: string) => void;
}

export const ResultContext = createContext<ResultContextShape>({
  setResultDataUrl: () => null,
});

export const ResultContextProvider: React.FC = ({ children }) => {
  const [resultDataUrl, setResultDataUrl] = useState<string>();

  return (
    <ResultContext.Provider value={{ resultDataUrl, setResultDataUrl }}>
      {children}
    </ResultContext.Provider>
  );
};

import React, { createContext, useState } from 'react';

interface DownloadContextShape {
  downloadResult: () => void;
  setDownloadResult: (downloadResult: () => void) => void;
}

export const DownloadContext = createContext<DownloadContextShape>({
  downloadResult: () => null,
  setDownloadResult: () => null,
});

export const DownloadContextProvider: React.FC = ({ children }) => {
  const [downloadResult, setDownloadResult] = useState<() => void>(() => null);

  return (
    <DownloadContext.Provider value={{ downloadResult, setDownloadResult }}>
      {children}
    </DownloadContext.Provider>
  );
};

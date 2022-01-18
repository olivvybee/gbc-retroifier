import React, { createContext, useState } from 'react';

interface FileContextShape {
  file?: File;
  setFile: (file: File) => void;
}

export const FileContext = createContext<FileContextShape>({
  setFile: () => null,
});

export const FileContextProvider: React.FC = ({ children }) => {
  const [file, setFile] = useState<File>();

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
};

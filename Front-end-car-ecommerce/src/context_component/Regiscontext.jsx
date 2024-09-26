import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <FormContext.Provider value={{ isRegistering, setIsRegistering }}>
      {children}
    </FormContext.Provider>
  );
};

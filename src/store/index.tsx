import React, {createContext, useState} from 'react';

interface AppContext {
  isOnboardingComplete: boolean;
  isAuth: boolean;
  onOnboardingComplete: (value: boolean) => void;
  onAuthComplete: (value: boolean) => void;
}

export const AppContext = createContext<AppContext>({
  isAuth: false,
  isOnboardingComplete: false,
  onAuthComplete: () => {},
  onOnboardingComplete: () => {},
});

export default function AppProvider({children}: React.PropsWithChildren<any>) {
  const [isOnboardingComplete, setOnboardingComplete] = useState(false);
  const [isAuth, setAuth] = useState(false);

  const onAuthComplete = (data: boolean) => setAuth(data);

  const onOnboardingComplete = (data: boolean) => setOnboardingComplete(data);

  return (
    <AppContext.Provider
      value={{
        isOnboardingComplete,
        isAuth,
        onAuthComplete,
        onOnboardingComplete,
      }}>
      {children}
    </AppContext.Provider>
  );
}

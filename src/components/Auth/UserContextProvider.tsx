import { useAuth0, User } from '@auth0/auth0-react';
import { createContext, useState } from 'react';

export const UserContext = createContext<{
  nickName: string;
  user: User | undefined;
}>({
  nickName: '',
  user: undefined,
});

// TODO: EL - clean this up.
export const UserContextProvider = ({ children }: { children: any }) => {
  const [nickName, setNickName] = useState('Peter Pan');
  const { user, isAuthenticated, isLoading } = useAuth0();

  const userInfo = { nickName, user };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

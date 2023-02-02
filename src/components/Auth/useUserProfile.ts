import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { UserInfo } from '../../models/userInfo';

export default function useUserProfile() {
  const [nickName] = useState('Peter Pan');
  const { user } = useAuth0();
  const userInfo: UserInfo = {
    nickName,
    user,
  };
  return userInfo;
}

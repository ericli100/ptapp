import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { UserContext } from './UserContextProvider';

function Profile() {
  const { isAuthenticated, isLoading } = useAuth0();
  const { nickName, user } = useContext(UserContext);
  if (isAuthenticated && user) {
    return (
      <>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <p>Nick Name is: {nickName}</p>
        </div>
      </>
    );
  }
  return null;
}

export default Profile;

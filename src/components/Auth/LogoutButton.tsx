import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
}

export default LogoutButton;

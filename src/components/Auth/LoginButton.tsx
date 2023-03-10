import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
}

export default LoginButton;

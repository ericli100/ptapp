import { useRouteError } from 'react-router-dom';

// TODO: EL - do we need a better error page?
export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

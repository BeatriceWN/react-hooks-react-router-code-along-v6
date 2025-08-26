import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main>
      <h1>Oops!</h1>
      <p>Sorry, an error occurred.</p>
      <pre>{error.statusText || error.message}</pre>
    </main>
  );
}

export default ErrorPage;

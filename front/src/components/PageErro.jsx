import { useRouteError } from "react-router-dom";

export default function PageErro() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Pagina não encontrada.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
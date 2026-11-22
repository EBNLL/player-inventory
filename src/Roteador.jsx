import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";
import PaginaVerReview from "./Paginas/PaginaInicial/PaginaVerReview/PaginaVerReview";

const roteador = createBrowserRouter([
  {
    path: "//:id?",
    element: <PaginaInicial />,
  },
  {
    path: "/ver-review",
    element: <PaginaVerReview />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
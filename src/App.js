import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";
import Test from "./pages/Test";

const paths = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/results",
    element: <SearchResults />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];

const router = createBrowserRouter(paths);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

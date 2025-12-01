import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LanguageSelectPage from "./pages/LanguageSelectPage.jsx";
import RecordingPage from "./pages/RecordingPage.jsx";
import SummaryPage from "./pages/SummaryPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LanguageSelectPage />} />
      <Route path="/recording" element={<RecordingPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

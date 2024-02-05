import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeedbackDetailPage from "./pages/feedbackDetailPage";
import FeedbackEditPage from "./pages/feedbackEditPage";
import AddFeedbackPage from "./pages/addFeedbackPage";
import RoadMapPage from "./pages/roadMapPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedbackDetail" element={<FeedbackDetailPage />} />
          <Route path="/feedbackEdit" element={<FeedbackEditPage />} />
          <Route path="/addFeedback" element={<AddFeedbackPage />} />
          <Route path="/roadMap" element={<RoadMapPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

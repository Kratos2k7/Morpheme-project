import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layouts from "./Components/Layout/layout";
import MainPage from "./Components/Pages/MainPage/MainPage";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import SavedWords from "./Components/Pages/SavedWords/SavedWords";
import SearchPage from "./Components/Pages/SearchPage/Search";
import RootFileUpload from "./Components/Pages/UploadRootFiles/RootFileUpload";
import {  DraggableModalProvider } from 'ant-design-draggable-modal'


const App = () => {
  return (
    <DraggableModalProvider>
    <Router>
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <Layouts>
              <MainPage />
            </Layouts>
          }
        />
        <Route path="/*" element={<Navigate to="/Dashboard" />} />
        <Route
          path="/landingpage"
          element={
            <Layouts>
              <LandingPage />
            </Layouts>
          } 
        />
        <Route
          path="/saved-words"
          element={
            <Layouts>
              <SavedWords />
            </Layouts>
          } 
        />
        <Route
          path="/search"
          element={
            <Layouts>
              <SearchPage />
            </Layouts>
          } 
        />
        <Route
          path="/rootUpload"
          element={
            <Layouts>
              <RootFileUpload />
            </Layouts>
          } 
        />
        
      </Routes>
    </Router>
    </DraggableModalProvider>
  );
};

export default App;

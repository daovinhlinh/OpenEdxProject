import { NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from 'screens/HomePage';
import { CourseManagement } from 'screens/CourseManagement';
import MenuAppBar from 'components/MenuAppBar';

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [])

  return (
    <div className="App">
      <MenuAppBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CourseManagement />} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

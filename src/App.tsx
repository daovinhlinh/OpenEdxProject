import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'screens/Admin';
import { CourseManagement } from 'screens/CourseManagement';

function App() {
  useEffect(() => {
    cityApi.getAll().then(res => console.log(res.data));
    studentApi.getAll({ _page: 1 }).then(res => console.log(res.data));
  })

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/" element={<AdminLayout />} />
        <Route path="/course" element={<CourseManagement />} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

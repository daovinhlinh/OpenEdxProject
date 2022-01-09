import { NotFound, PrivateRoute } from 'components/Common';
import { Login } from 'screens/Login';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'screens/HomePage';
import { CourseManagement } from 'screens/CourseManagement';
import MenuAppBar from 'components/MenuAppBar';
import { AddCourse } from 'screens/AddCourse';
import { UserManagement } from 'screens/UserManagement';
import { CourseDetail } from 'screens/CourseDetail';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';
import { Register } from 'screens/Register';
import { CookiesProvider } from 'react-cookie';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B3C5D',
    },
    secondary: {
      main: '#1D2731',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <MenuAppBar />
        <CookiesProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/course' element={<CourseManagement />} />
              <Route path='/user' element={<UserManagement />} />
              <Route path='/add' element={<AddCourse />} />
              <Route path='/course/:id' element={<CourseDetail />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CookiesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

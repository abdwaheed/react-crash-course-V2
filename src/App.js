// import logo from './logo.svg';
import './styles/App.css';
import './styles/global.css';
import MainPage from './pages/main';
import CoursesPage from './pages/courses';
import Onlineverification from './pages/onlineverification';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import SignUp from './pages/signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SignIn from './pages/signin';
import ContactUs from './pages/contactus';
import Pcourses from './pages/popular-courses';
import ForgotPassword from './pages/forgotpassword';
import UserDashboard from './pages/userdashboard'
import UserSelectedCourses from './pages/userselectedcourses';
import UserCompletedCourses from './pages/usercompletedcourses';
import UserNewCourse from './pages/usernewcourse';

function App() {
  return (
    <Router>
      {/* <MainPage title='E-Learning' /> */}
      {/* <CoursesPage title='E-learning' /> */}
      {/* <Onlineverification title='E-Learning' /> */}
      {/* <Aboutus title='E-Learning' /> */}
      {/* <Contactus title='E-Learning' /> */}
      {/* <SignUp title='E-Learning' /> */}
      {/* <SignIn title='E-Learning' /> */}


      {/* USER PORTAL */}

      {/* <UserDashboard /> */}

      {/* <UserSelectedCourses /> */}

      {/* <UserCompletedCourses /> */}


      <UserNewCourse />



      {/* <Route path='/courses' component={CoursesPage} />

      <Route path='/verification' component={Onlineverification} />

      <Route path='/contactus' component={ContactUs} />

      <Route path='/about' component={Aboutus} />

      <Route path='/signin' component={SignIn} />

      <Route path='/signup' component={SignUp} />

      <Route path='/popularcourse' component={Pcourses} />

      <Route path='/forgotpassword' component={ForgotPassword} />

      <Route path='/' exact component={MainPage} /> */}

    </Router>
  );
}

export default App;

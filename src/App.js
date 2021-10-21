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
import UserplayCourse from './pages/userplaycourse';
import UserCourseVideo from './pages/usercoursevideo';
import UserQuiz from './pages/userquiz';
import UserQuizStart from './pages/UserQuizStart';
import UserQuizResult from './pages/UserQuizResult';
import UserDashboardEdit from './pages/UserDashboardEdit';
import TeacherMainPage from './pages/teachermainpage';
import TeacherNewCourseP1 from './pages/teachernewcoursep1';
import TeacherNewCourseP2 from './pages/teachernewcoursep2';
import TeacherIntendedLearners from './pages/teacherintendedlearners';
import TeacherCoursePreview from './pages/teachercoursepreview';
import TeacherCourseLanding from './pages/teachercourselanding';
import TeacherProfile from './pages/teacherprofile';
import TeacherUploadLecture from './pages/teacheruploadlecture';
import TeacherEditLecture from './pages/teachereditlecture';
// import ScrollToTop from './components / ScrollTop';

function App() {
  return (
    <Router>
      {/* <ScrollToTop> */}
      {/* <MainPage title='E-Learning' /> */}
      {/* <CoursesPage title='E-learning' /> */}
      {/* <Onlineverification title='E-Learning' /> */}
      {/* <Aboutus title='E-Learning' /> */}
      {/* <Contactus title='E-Learning' /> */}
      {/* <SignUp title='E-Learning' /> */}
      {/* <SignIn title='E-Learning' /> */}
      {/* <Pcourses /> */}

      {/* <UserplayCourse /> */}

      {/* <UserCourseVideo /> */}

      {/* <UserQuiz /> */}


      {/* <UserQuizStart /> */}


      {/* <UserQuizResult /> */}






      {/* USER PORTAL */}



      {/* <UserDashboard /> */}

      {/* <UserSelectedCourses /> */}

      {/* <UserCompletedCourses /> */}

      {/* <UserNewCourse /> */}


      {/* <UserDashboardEdit /> */}





      {/* TEACHER PORTAL */}

      {/* <TeacherMainPage /> */}

      {/* <TeacherNewCourseP1 /> */}

      {/* <TeacherNewCourseP2 /> */}

      {/* <TeacherIntendedLearners /> */}

      {/* <TeacherCoursePreview /> */}

      {/* <TeacherCourseLanding /> */}

      {/* <TeacherProfile /> */}



      {/* <TeacherUploadLecture /> */}





      {/* GENERAL WEBSITE ROUTES */}


      <Route path='/courses' component={CoursesPage} />

      <Route path='/verification' component={Onlineverification} />

      <Route path='/contactus' component={ContactUs} />

      <Route path='/about' component={Aboutus} />

      <Route path='/signin' component={SignIn} />

      <Route path='/signup' component={SignUp} />

      <Route path='/popularcourse' component={Pcourses} />

      <Route path='/forgotpassword' component={ForgotPassword} />

      <Route path='/marketjobs' component={() => {
        window.location.href = 'https://google.com';
        return null;
      }} />



      {/* USER PORTAL ROTUES */}


      {/* <Route path='/userdashboard' component={UserDashboard} /> */}

      <Route path='/userselectedcourses' component={UserSelectedCourses} />

      <Route path='/userdashboard' component={UserDashboard} />

      <Route path='/usercompletedcourses' component={UserCompletedCourses} />

      <Route path='/usernewcourse' component={UserNewCourse} />

      <Route path='/userplaycourse' component={UserplayCourse} />

      <Route path='/usercoursevideo' component={UserCourseVideo} />

      <Route path='/userquiz' component={UserQuiz} />

      <Route path='/userquizstart' component={UserQuizStart} />

      <Route path='/userquizresult' component={UserQuizResult} />

      <Route path='/userdashboardedit' component={UserDashboardEdit} />







      {/* <Route path='/userdashboard' component={UserDashboard} /> */}

      <Route path='/teachermainpage' component={TeacherMainPage} />

      <Route path='/teachernewcourseP1' component={TeacherNewCourseP1} />

      <Route path='/teachernewcourseP2' component={TeacherNewCourseP2} />

      <Route path='/teacherintendedlearners' component={TeacherIntendedLearners} />

      <Route path='/teacheruploadlecture' component={TeacherUploadLecture} />

      <Route path='/teachereditlecture' component={TeacherEditLecture} />

      <Route path='/teachercoursepreview' component={TeacherCoursePreview} />

      <Route path='/teacherprofile' component={TeacherProfile} />

      <Route path='/teachercourselanding' component={TeacherCourseLanding} />



      <Route path='/' exact component={MainPage} />


      {/* </ScrollToTop>, */}
    </Router >
  );
}

export default App;

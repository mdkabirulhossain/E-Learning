import { Route, Routes } from 'react-router-dom'
import Home from './pages/students/Home'
import CourseList from './pages/students/CoursesList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educators/Educator'
import Dashboard from './pages/educators/Dashboard'
import AddCourse from './pages/educators/AddCourse'
import MyCourses from './pages/educators/MyCourses'
import StudentEnrolled from './pages/educators/StudentEnrolled'

import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={ <Educator/>}>
          <Route path='/educator' element={ <Dashboard /> } />
          <Route path='add-course' element={ <AddCourse />} />
          <Route path='my-courses' element={ <MyCourses /> } />
          <Route path='student-enrolled' element={ <StudentEnrolled /> } />
        </Route>
      
      </Routes>
    </>
  )
}

export default App

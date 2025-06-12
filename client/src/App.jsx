import { Route, Routes } from 'react-router-dom'
import Home from './pages/students/Home'
import CourseList from './pages/students/CoursesList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'

import './App.css'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/course-list' element={ <CourseList /> } />
      <Route path='/course-list/:input' element={ <CourseList /> } />
      <Route path='/course/:id' element={ <CourseDetails /> } />
      <Route path='/my-enrollments' element={ <MyEnrollments /> } />
      <Route path='/player/:courseId' element={ <Player /> } />
      <Route path='/loading/:path' element={ <Loading /> } />
     </Routes>
    </>
  )
}

export default App

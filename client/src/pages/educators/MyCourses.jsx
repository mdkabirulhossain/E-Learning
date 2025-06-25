import React, { useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/students/Loading';

const MyCourses = () => {

    const {currency, allCourses} = useState(AppContext)

    const [courses, setCourses] = useState(null)

    const fechEducatorCourses = async () =>{
        setCourses(allCourses)
    }

    useEffect(()=>{
        fechEducatorCourses()
    }, [])
    return courses ?(
        <div>
           My Courses 
        </div>
    ): <Loading />
};

export default MyCourses;
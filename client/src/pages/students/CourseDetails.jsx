import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/students/Loading';
import { assets } from '../../assets/assets';

const CourseDetails = () => {

    const { id } = useParams()
    const [courseData, setCourseData] = useState(null)
    const { allCourses, calculateRating } = useContext(AppContext)

    const fetchCourseData = async () => {
        const findCourse = allCourses.find(course => course._id === id)
        setCourseData(findCourse);
    }

    useEffect(() => {
        fetchCourseData()
    }, [])

    return allCourses ? (
        <>
            <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left bg-gradient-to-b from-cyan-100/70'>

                {/* gradient color 
           <div className='absolute top-0 left-0 w-full h-1/2 -z-1 bg-gradient-to-b from-cyan-100/70'>
            Hello 
           </div> */}

                {/* Left Column  */}
                <div className='max-w-xl z-10 text-gray-500'>
                    <h1 className='md:text-5xl text-2xl font-semibold text-gray-800'>{courseData?.courseTitle}</h1>
                    <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{ __html: courseData?.courseDescription.slice(0, 200) }} ></p>

                    {/* review and ratings  */}
                    <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
                        <p>{courseData ? calculateRating(courseData) : 0}</p>

                        <div className='flex'>
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={
                                        i < Math.floor(courseData ? calculateRating(courseData) : 0)
                                            ? assets.star
                                            : assets.star_blank
                                    }
                                    alt='star'
                                    className='w-3.5 h-3.5'
                                />
                            ))}
                        </div>

                        <p className='text-blue-600'>({courseData?.courseRatings?.length || 0} {courseData?.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>

                        <p >{courseData?.enrolledStudents?.length || 0} {courseData?.enrolledStudents?.length > 1 ? 'students' : 'student'}</p>

                    </div>
                    <p className='text-sm'>Course by <span className='text-blue-600 underline'> Kabirul </span></p>

                </div>

                {/* Right column  */}
            </div>
        </>
    ) : <Loading></Loading>;
};

export default CourseDetails;
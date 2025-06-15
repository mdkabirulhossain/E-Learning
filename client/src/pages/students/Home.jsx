import React from 'react';
import Hero from '../../components/students/Hero';
import Companies from '../../components/students/companies';
import CourseSection from '../../components/students/CourseSection';

const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-center'>
            {/* Home page  */}
            <Hero />
            <Companies />
            <CourseSection />
        </div>
    );
};

export default Home;
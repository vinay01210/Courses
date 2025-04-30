import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
  const [likedcourses, setLikedCourses] = useState([]);
  const coursess = props.courses;
  let category = props.category;
  // console.log(coursess,"Data");

  function getCourseData() {
    if (category == "All") {
      let allCourse = [];
      // ek single array me convert kiya gya hai!!
      Object.values(coursess).forEach((array) => {
        array.forEach((coursData) => {
          allCourse.push(coursData);
        });
      });
      return allCourse;
    } 
    else {
      return coursess[category]
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourseData().map((course) => (
          <Card key={course.id} courses={course} likedcourses={likedcourses}
            setLikedCourses={setLikedCourses} />
        ))
      }
    </div>
  )
}

export default Cards

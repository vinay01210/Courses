import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
  const courses = props.courses;
  let likedcourses = props.likedcourses;
  let setlikedcourses = props.setLikedCourses;

  function clickHandlier() {
    if (likedcourses.includes(courses.id)) {
      //pahle se liked se pda hua ta!!
      setlikedcourses((prev) => prev.filter((cid) => (cid !== courses.id)));
      toast.warning("removed liked");
    }
    else {
      // pahale se like nhi hua hai ye course!!
      //insert karna h ye course liked me!!
      if (likedcourses.length === 0) {
        setlikedcourses([courses.id]);
      }
      else {
        setlikedcourses((previos) => [...previos, courses.id]);
      }
      toast.success("liked successful");
    }
  }
  return (

    <div className='w-[300px] bg-gray-700  rounded-md overflow-hidden '>

      <div className='relative'>
        <img src={courses.image.url} alt="" />

        <div className='w-[40px] h-[40px] rounded-full bg-amber-50 absolute right-1 bottom-[-12px]
        grid place-items-center'>
          <button onClick={clickHandlier} className='text-3xl cursor-pointer'>
            {
              likedcourses.includes(courses.id) ? (<FcLike />) : (<FcLikePlaceholder />)
            }
          </button>
        </div>

      </div>


      <div className='px-4 py-2'>
        <p className='text-white font-bold leading-6'>{courses.title}</p>
        <p className='mt-2 text-white from-neutral-300'>
          {
            courses.description.length > 100 ? (courses.description.substr(0, 100)) + "..."
              : (courses.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card

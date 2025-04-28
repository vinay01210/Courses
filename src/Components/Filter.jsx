import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;


    function filterHandler(title){
      setCategory(title);
      
    }
  return (
    
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterData.map((data)=>(
            <button className={`text-lg px-4 py-1 rounded-md font-medium
              text-white bg-black border-2 cursor-pointer
              hover:bg-amber-400 duration-initial`}
            key={data.id}
            onClick={()=>filterHandler(data.title)}
            >{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter

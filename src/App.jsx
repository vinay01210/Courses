import './App.css'
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import { filterData, apiUrl } from "./data.js"
import { useEffect, useState } from 'react';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]= useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      console.log("Something went wrong", error);
      setLoading(false);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className='bg-cyan-950 min-h-[1200px]'>
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Filter filterData={filterData} 
          category ={category} setCategory ={setCategory}/>
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center
         min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category ={category} />)
          }
        </div>
      </div>

    </div>

  )
}

export default App;

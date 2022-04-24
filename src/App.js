import React, {useState ,useEffect} from 'react';
import JobBoardComponent from './components/JobBoardComponent';
import data from './assets/data.json';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  
  useEffect(() =>  setJobs(data), [])

  const filterFunc = ({role, level, tools, languages}) => {
    if(filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if(tools) {
      tags.push(...tools);
    }
    if(languages) {
      tags.push(...languages);
    }

    
    // return tags.some((tag) => filters.includes(tag));
    return filters.every(filter => tags.includes(filter));
  }

  const filteredJobs = jobs.filter(filterFunc);
  console.log("the filtered jobs are " + filteredJobs);

  const handleTagClick = (tag) => {
    //avoid readding the tag
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f!== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  // console.log(jobs);



  return (
    <>
      <header className='bg-teal-500 mb-12'>
        <img className='w-full' src="/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="container m-auto"> 
        {filters.length > 0 && (
        <>
        <div className='flex flex-wrap bg-white shadow-md -my-20 mx-10 p-6 rounded mb-16 z-10 relative'>
          {filters.map((filter, index) => (
        <span
         className='cursor-pointer mr-4 mb-4 rounded font-bold'
         key={index}
         onClick={() => handleFilterClick(filter)}>
         <span
            className="cursor-pointer bg-teal-100 p-2 rounded-l text-teal-500">
           {filter}
          </span>
         <span className='bg-teal-500 cursor-pointer text-teal-100 p-2 rounded-r px-3 font-bold'>X</span>
         </span>
         ))}
              <button
               onClick={clearFilters}
               className='font-bold text-gray-700 ml-auto items-center justify-center'>Clear</button>
         </div>
         </>
       )}
      {jobs.length === 0 ? 
      (<p>jobs are fetching ....</p>)
      : (
        filteredJobs.map((job) => <JobBoardComponent
         job={job}
         key={job.id}
         handleTagClick={handleTagClick}
          />)
      )}
      </div>
    </>
  );
}


export default App;

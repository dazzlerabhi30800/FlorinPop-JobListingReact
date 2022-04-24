import React from "react";
// import PropTypes from "prop-types";

function JobBoardComponent({
  job: {
    logo,
    id,
    company,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick
}) {
  const tags = [role, level];

  if(tools) {
    tags.push(...tools)
  }
  if(languages) {
    tags.push(...languages);
  }
  return (
    <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${featured && 'border-l-4 border-teal-500 border-solid'} sm:flex-row sm:my-10`}>
      <div className="flex">
        <img 
        src={logo}
        className="-mt-16 mb-4 w-16 h-16 sm:w-28 sm:h-24 sm:mt-0 sm:my-0 object-contain"
        alt="{job.company}" />
      </div>
      <div className="flex flex-col justify-between ml-6">
        <h3 className="font-bold text-base text-teal-500 mb-1">
          {company}
          {isNew && <span className="ml-2 bg-teal-500 text-sm text-teal-100 p-1 px-2 rounded-full uppercase">New</span>}
          {featured && <span className="ml-2 bg-gray-600 text-sm text-white p-1 pr-2 px-2 rounded-full uppercase">Featured</span>}
          </h3>
        <h2 className="font-bold text-xl my-2 sm:my-0">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 sm:justify-end sm:mt-0 mx-4 pt-4 sm:pt-0 border-t sm:border-0 sm:ml-auto border-gray-300 border-solid">
         { tags ? (tags.map((tag, index) => <span
          key={index}
          onClick={() => handleTagClick(tag)}
          className="bg-teal-100 text-teal-500 font-bold mr-4 mt-2 mb-2 sm:mb-0 sm:mt-0 p-2 rounded cursor-pointer">{tag}</span> )
           ) :  ' '}
          
      </div>
    </div>
  );
}

export default JobBoardComponent;

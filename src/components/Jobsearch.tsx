const Jobsearch = () => {
  return (
    <div className="m-10">
      <div className="ml-8">
        <p className="ml-10 pl-12 mb-4 font-medium text-xl">Search for Jobs</p>
      </div>
      <div className="">
        <form className="grid-cols-4 md:flex md:justify-evenly">
          <div className="">
            <label
              htmlFor="job title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Job Title
            </label>
            <input
              type="text"
              id="job-title"
              className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="">
            <label
              htmlFor="job title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter location
            </label>
            <input
              type="text"
              id="job-title"
              className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="job title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Experience
            </label>
            <input
              type="text"
              id="job-title"
              className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="job title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Department
            </label>
            <input
              type="text"
              id="job-title"
              className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              type="submit"
              className="text-white bg-primary rounded mt-3 p-2 font-large hover:bg-green-500"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex justify-end mr-12 pr-12 "></div>
      </div>
    </div>
  );
};

export default Jobsearch;

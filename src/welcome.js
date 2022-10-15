import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinners from './components/spinners';
import { selectAllJobs } from './redux/search/searchSlice';

const Welcome = () => {
  const { search, jobs, status } = useSelector(selectAllJobs);
  return (
    <>
      <h2 className="text-white text-center text-4xl font-bold">
        Jobs Category
      </h2>
      <p className="text-center capitalize font-thin text-white">
        -- Browse jobs by category --
      </p>
      <div className="flex bg-[#fe5395] justify-center my-4 gap-2 flex-wrap px-6 ">
        {jobs.length > 0 && status === 'idle' ? (
          jobs.map((x) => {
            const {
              title,
              description,
              id,
              location,
              company,
              category,
              salary_is_predicted,
            } = x;
            return (
              <div className="flex justify-center bg-[#ec4c8b]" key={id}>
                <div className="block p-6 rounded-lg shadow-lg even:bg- w-40 lg:w-64 grow">
                  <div className="border-b px-2 py-1 mb-4 flex flex-col">
                    <span className="text-xs font-thin text-white">
                      {location.display_name}
                    </span>
                    <span className="text-xs font-thin text-white">
                      {company.display_name}
                    </span>
                    <span className="text-xs font-thin text-white">
                      {category.label}
                    </span>
                  </div>
                  <Link
                    to={`/category/${id}`}
                    className="text-white text-base leading-tight font-semibold mb-2"
                  >
                    {title}
                  </Link>
                  <p className="text-white text-base mb-4">
                    {description.slice(0, 120)}
                  </p>
                  <p className="text-base font-semibold text-white">
                    Salary:
                    {salary_is_predicted !== '0' ? (
                      `$ ${x.salary_max}`
                    ) : (
                      <span className="font-thin text-sm italic">
                        {' '}
                        Pay not supplied
                      </span>
                    )}
                  </p>
                </div>
              </div>
            );
          })
        ) : status === 'searched' ? (
          search.map((x) => {
            const {
              title,
              description,
              id,
              location,
              company,
              category,
              salary_is_predicted,
            } = x;
            return (
              <div className="flex justify-center" key={id}>
                <div className="block p-6 rounded-lg shadow-lg bg-[#fe5395] w-40 lg:w-64 grow">
                  <div className="border-b px-2 py-1 mb-4 flex flex-col">
                    <span className="text-xs font-thin text-slate-400">
                      {location.display_name}
                    </span>
                    <span className="text-xs font-thin text-slate-400">
                      {company.display_name}
                    </span>
                    <span className="text-xs font-thin text-slate-400">
                      {category.label}
                    </span>
                  </div>
                  <Link
                    to={`/category/${id}`}
                    className="text-gray-900 text-base leading-tight font-semibold mb-2"
                  >
                    {title}
                  </Link>
                  <p className="text-gray-700 text-base mb-4">
                    {description.slice(0, 120)}
                  </p>
                  <p className="text-base font-semibold text-black">
                    Salary: $
                    {salary_is_predicted !== 0
                      ? `${x.salary_max}`
                      : 'Pay not supplied'}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <Spinners />
        )}
      </div>
    </>
  );
};

export default Welcome;

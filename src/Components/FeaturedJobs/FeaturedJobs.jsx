import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="">
        <h2 className="text-7xl text-center">Featured Jobs</h2>
        <p className="text-center">this is freatrued job sectino</p>
      </div>

      <div className="grid grid-cols-2">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={jobs.length === dataLength && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary flex justify-center  "
        >
          show all
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

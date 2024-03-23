import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="md:mx-auto gap-6">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>

          <div>
            <button className="btn bg-none border-white mr-2">
              {remote_or_onsite}
            </button>
            <button className="btn bg-none border-white">{job_type}</button>
          </div>

          <div className="flex gap-6">
            <h2 className="flex items-center">
              <CiLocationOn />
              {location}
            </h2>
            <h2 className="flex items-center">
              <RiMoneyDollarCircleLine /> Salary:{salary}
            </h2>
          </div>
          <div className="card-actions ">
            <Link to={`job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;

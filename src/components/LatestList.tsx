/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';

/* Import SCSS */
import "src/assets/styles/layout/latestList.scss";

/* Import Component */
import {SecTitle} from 'src/components/Guide';
import {BigBtn} from 'src/components/Guide';




const jobList = [
  {
    thumb: imgs.thumb_01,
    postedOn: "26 Aug 2023",
    jobTypes: [ "Part Time", "Full Time" ],
    title: "Fashion Retail Assistant (Part-Time)",
    company: "CENTRE FOR SENIORS",
    location: "Dakota - CC8",
    calendar: "5 Day Week",
    salary: "$3500",
    period: "per month"
  },
  {
    thumb: imgs.thumb_01,
    postedOn: "26 Aug 2023",
    jobTypes: [ "Full Time" ],
    title: "Trolley Service Officer (F/T)",
    company: "CENTRE FOR SENIORS",
    location: "Changi Airport - CG2",
    calendar: "4 Day Week",
    salary: "$1600",
    period: "per month"
  },
  {
    thumb: imgs.thumb_01,
    postedOn: "26 Aug 2023",
    jobTypes: [ "Full Time" ],
    title: "Training For Befrienders (English)",
    company: "CENTRE FOR SENIORS",
    location: "Changi Airport - CG2",
    calendar: "6 Day Week",
    salary: "$1600",
    period: "per month"
  }
];

export const JobItem: React.FC<{ job: typeof jobList[0] }> = ({job}) => (
  <li className="sec_list">
    <a href="#" className="add_links flex">
      <div className="thumb_area shrink-0">
        <img src={job.thumb} alt=""/>
      </div>
      <div className="text_area">
        <div className="row flex justify-between">
          <span className="posted_on">
            <i className="fas fa-pencil-alt"></i>
            &nbsp;&nbsp;Posted on {job.postedOn}
          </span>
          <div className="time_type row flex items-center">
            {job.jobTypes.map(type => (
              <p className={`jobtype_${type.toLowerCase().replace(" ", "_")}`} key={type}>
                <i className="far fa-clock"></i>
                &nbsp;&nbsp;{type}
              </p>
            ))}
          </div>
        </div>
        <div className="row course_desc">
          <h3 className="job_tit pc_ver">{job.title}</h3>
          <div className="job_desc flex justify-between">
            <ul className="flex align-center">
              <li>
                <span className="txt">
                  <i className="fas fa-building"></i>
                  &nbsp;&nbsp;{job.company}
                </span>
              </li>
              <li>
                <span className="txt">
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;&nbsp;{job.location}
                </span>
              </li>
              <li>
                <span className="txt">
                  <i className="fas fa-calendar-alt"></i>
                  &nbsp;&nbsp;{job.calendar}
                </span>
              </li>
            </ul>
            <h3 className="job_tit mo_ver">{job.title}</h3>
            <div className="row salary_area">
              <div className="salary">UP TO <span className="data_salary">{job.salary}</span></div>
              <div className="salperiod">{job.period}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
);

const LatestList: React.FC = () => {
  return (
    <div className="section_inner">
      <SecTitle title="Latest Jobs"/>
      <ul>
        {jobList.map(job => <JobItem job={job} key={job.title}/>)}
      </ul>
      <BigBtn title="View All Jobs"/>
    </div>
  );
};
export default LatestList;
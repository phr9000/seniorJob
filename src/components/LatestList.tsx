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
          <div className="row flex items-center">
            {job.jobTypes.map(type => (
              <p className={`jobtype_${type.toLowerCase().replace(" ", "_")}`} key={type}>
                <i className="far fa-clock"></i>
                &nbsp;&nbsp;{type}
              </p>
            ))}
          </div>
        </div>
        <div className="row course_desc">
          <h3 className="job_tit">{job.title}</h3>
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
            <div className="row">
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
    
    <section className="latestListComp">
      <div className="section_inner">
        <SecTitle title="Latest Jobs"/>
        
        {/* 컴포넌트 분리 및 데이터 구조화 */}
        <ul>
          {jobList.map(job => <JobItem job={job} key={job.title}/>)}
        </ul>
        
        
        {/* 기존 마크업 */}
        {/*<ul>*/}
        {/*  <li className="sec_list">*/}
        {/*    <a href="#" className="add_links flex">*/}
        {/*      <div className="thumb_area shrink-0">*/}
        {/*        <img src={imgs.thumb_01} alt=""/>*/}
        {/*      </div>*/}
        {/*      <div className="text_area">*/}
        {/*        <div className="row flex justify-between">*/}
        {/*        <span className="posted_on">*/}
        {/*          <i className="fas fa-pencil-alt"></i>*/}
        {/*          &nbsp;&nbsp;Posted on 26 Aug 2023*/}
        {/*        </span>*/}
        {/*          <div className="row flex items-center">*/}
        {/*            <p className="jobtype_part">*/}
        {/*              <i className="far fa-clock"></i>*/}
        {/*              &nbsp;&nbsp;Part Time*/}
        {/*            </p>*/}
        {/*            <p className="jobtype_pull">*/}
        {/*              <i className="far fa-clock"></i>*/}
        {/*              &nbsp;&nbsp;Full Time*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="row course_desc">*/}
        {/*          <h3 className="job_tit">Fashion Retail Assistant (Part-Time)</h3>*/}
        {/*          <div className="job_desc flex justify-between">*/}
        {/*            <ul className="flex align-center">*/}
        {/*              <li>*/}
        {/*              <span className="txt">*/}
        {/*                <i className="fas fa-building"></i>*/}
        {/*                &nbsp;&nbsp;CENTRE FOR SENIORS*/}
        {/*              </span>*/}
        {/*              </li>*/}
        {/*              <li>*/}
        {/*              <span className="txt">*/}
        {/*                <i className="fas fa-map-marker-alt"></i>*/}
        {/*                &nbsp;&nbsp;Dakota - CC8*/}
        {/*              </span>*/}
        {/*              </li>*/}
        {/*              <li>*/}
        {/*              <span className="txt">*/}
        {/*                <i className="fas fa-calendar-alt"></i>*/}
        {/*                &nbsp;&nbsp;Shifts*/}
        {/*              </span>*/}
        {/*              </li>*/}
        {/*            </ul>*/}
        {/*            <div className="row">*/}
        {/*              <div className="salary">*/}
        {/*                UP TO*/}
        {/*                <span className="data_salary">$3500</span>*/}
        {/*              </div>*/}
        {/*              <div className="salperiod">per month</div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <li className="sec_list">*/}
        {/*    <a href="#" className="add_links flex">*/}
        {/*      <div className="thumb_area shrink-0">*/}
        {/*        <img src={imgs.thumb_01} alt=""/>*/}
        {/*      </div>*/}
        {/*      <div className="text_area">*/}
        {/*        <div className="row flex justify-between">*/}
        {/*        <span className="posted_on">*/}
        {/*          <i className="fas fa-pencil-alt"></i>*/}
        {/*          &nbsp;&nbsp;Posted on 26 Aug 2023*/}
        {/*        </span>*/}
        {/*          <div className="row flex items-center">*/}
        {/*            <p className="jobtype_pull">*/}
        {/*              <i className="far fa-clock"></i>*/}
        {/*              &nbsp;&nbsp;Full Time*/}
        {/*            </p>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="row course_desc">*/}
        {/*          <h3 className="job_tit">Trolley Service Officer (F/T)</h3>*/}
        {/*          <div className="job_desc flex justify-between">*/}
        {/*            <ul className="flex align-center">*/}
        {/*              <li>*/}
        {/*              <span className="txt">*/}
        {/*                <i className="fas fa-building"></i>*/}
        {/*                &nbsp;&nbsp;CENTRE FOR SENIORS*/}
        {/*              </span>*/}
        {/*              </li>*/}
        {/*              <li>*/}
        {/*              <span className="txt">*/}
        {/*                <i className="fas fa-map-marker-alt"></i>*/}
        {/*                &nbsp;&nbsp;Changi Airport - CG2*/}
        {/*              </span>*/}
        {/*              </li>*/}
        {/*              <li>*/}
        {/*              <span className="txt">*/}
        {/*                <i className="fas fa-calendar-alt"></i>*/}
        {/*                &nbsp;&nbsp;Shifts*/}
        {/*              </span>*/}
        {/*              </li>*/}
        {/*            </ul>*/}
        {/*            <div className="row">*/}
        {/*              <div className="salary">*/}
        {/*                UP TO*/}
        {/*                <span className="data_salary">$1600</span>*/}
        {/*              </div>*/}
        {/*              <div className="salperiod">per month</div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <BigBtn title="View All Jobs"/>
      </div>
    </section>
  );
};
export default LatestList;
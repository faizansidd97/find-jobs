import React from "react";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";
import JobCard from "./JobCard";
import { Job } from "@/src/types";
import teamsIcon from "../assests/icons/teams.svg";

const Dashboard: React.FC = () => {
  const featuredJobs: Job[] = [
    {
      id: "1",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
      isPromoted: true,
    },
    {
      id: "2",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
      isPromoted: true,
    },
    {
      id: "3",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
      isPromoted: true,
    },
    {
      id: "4",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
      isPromoted: true,
    },
  ];

  const recommendedJobs: Job[] = [
    {
      id: "5",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
    {
      id: "6",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
    {
      id: "7",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
    {
      id: "8",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
    {
      id: "9",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
  ];

  const latestJobs: Job[] = [
    {
      id: "10",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
    {
      id: "11",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
    {
      id: "12",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
    {
      id: "13",
      title: "UI/UX Designer",
      company: "Teams",
      logo: teamsIcon,
      location: "Seattle, USA (Remote)",
      type: "Full Time",
      postedAt: "1 day ago",
      applicants: 22,
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Find your Dream Job,{" "}
            <span className="text-primary-700">Albert!</span>
          </h1>
          <p className="text-gray-500 mt-1">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 w-full flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              placeholder="Job Title, Company, or Keywords"
              className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center justify-between rounded-md px-3 py-2 cursor-pointer">
            <select
              className="flex-1 text-sm border-0 text-gray-500 bg-transparent outline-none appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="full-time">Karachi</option>
              <option value="part-time">Lahore</option>
              <option value="contract">Islamabad</option>
              <option value="remote">Peshawar</option>
            </select>

            <ChevronDown
              size={16}
              className="text-gray-400 pointer-events-none"
            />
          </div>
          <div className="flex items-center justify-between rounded-md px-3 py-2 cursor-pointer">
            <select
              className="flex-1 text-sm border-0 text-gray-500 bg-transparent outline-none appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Job Type
              </option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </select>

            <ChevronDown
              size={16}
              className="text-gray-400 pointer-events-none"
            />
          </div>
          <button className="w-full md:w-auto bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>Similar:</span>
          {["Frontend", "Backend", "Graphic Designer"].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:border-gray-400 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Featured Jobs</h2>
          <a
            href="#"
            className="text-sm text-primary-700 font-medium hover:underline"
          >
            See Featured Jobs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Recommended Jobs</h2>
          <a
            href="#"
            className="text-sm text-primary-700 font-medium hover:underline"
          >
            See Recommended Jobs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {recommendedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Latest Jobs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Latest Jobs</h2>
          <a
            href="#"
            className="text-sm text-primary-700 font-medium hover:underline"
          >
            See Latest Jobs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {latestJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { MapPin, Clock, Bookmark } from "lucide-react";
import { Job } from "@/src/types";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
      {job.isPromoted && (
        <span className="text-[10px] pb-4 font-medium text-gray-400">Promoted</span>
      )}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 overflow-hidden">
            {/* Using text as logo placeholder if no image, but ideally an image */}
            <img
              src={job.logo}
              alt={job.company}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{job.title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{job.company}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-gray-500 text-xs">
          <MapPin size={14} className="mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-500 text-xs">
          <Clock size={14} className="mr-2" />
          {job.postedAt} <span className="mx-1 text-gray-300">|</span>{" "}
          <span className="text-blue-600 font-medium">
            {job.applicants} applicants
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex-1 bg-primary-700 hover:bg-primary-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
          Apply Now
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bookmark size={20} />
        </button>
      </div>
    </div>
  );
};

export default JobCard;

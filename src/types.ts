import React from 'react';

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  postedAt: string;
  applicants: number;
  isPromoted?: boolean;
}

export interface UserProfile {
  name: string;
  role: string;
  location: string;
  avatar: string;
  coverImage: string;
  stats: {
    visitors: number;
    viewers: number;
    myJobs: number;
  };
}

export interface StatData {
  label: string;
  value: string | number;
  change: number;
  icon: React.ElementType;
}
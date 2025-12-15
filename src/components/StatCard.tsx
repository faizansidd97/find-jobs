import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { StatData } from '@/src/types';

interface StatCardProps {
  data: StatData;
}

const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const isPositive = data.change >= 0;

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
          <data.icon size={22} />
        </div>
        <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
          {Math.abs(data.change)}%
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{data.label}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{data.value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
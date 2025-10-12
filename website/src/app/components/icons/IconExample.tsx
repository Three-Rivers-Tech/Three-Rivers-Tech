import React from 'react';
import { FaLaptopCode, FaSearch } from './index';
import Icon from './Icon';

export default function IconExample() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Icon Usage Examples</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Using React Icons directly */}
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">React Icons</h3>
          <div className="flex items-center space-x-2">
            <FaLaptopCode className="w-8 h-8 text-primary" />
            <span>Software Development</span>
          </div>
        </div>

        {/* Using the Icon wrapper component */}
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Icon Wrapper</h3>
          <div className="flex items-center space-x-2">
            <Icon icon={FaSearch} />
            <span>IT Consulting</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <p>© 2025 gideondevrel.eth - All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com/" className="hover:text-blue-400">Twitter</a>
          <a href="https://github.com/" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://www.youtube.com/@GideonDevRel" className='hover:text-blue-400'>YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
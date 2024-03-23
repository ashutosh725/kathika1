import React from 'react';

const Map = () => {
  const mapStyle = {
    border: '0',
    width: '100%', // Set width to 100%
    height: '300px',
  };

  return (
    <div className='w-full'> 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4544825737507!2d77.22478917437964!3d28.646107483466118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd66c498ac35%3A0x4a10b8056a424dd6!2sKathika%20Culture%20Centre%2C%20Old%20Delhi!5e0!3m2!1sen!2sin!4v1711163093682!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

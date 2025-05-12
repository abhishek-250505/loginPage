import React from 'react';

const User = ({ userDetails ,handleDelete }) => {
  if (!userDetails || userDetails.length === 0) {
    return <p>No user registered details available.</p>;
  }

  return (
    <div className="w-full max-w-md">
      <h3 className='font-bold'>Registered User Details</h3>
      <ul>
        {userDetails.map((user, index) => (
          <li key={index} className="bg-blue-300 border rounded mb-2 p-4 flex flex-col sm:flex-row sm:justify-between">
            {user.name} - {user.email}
            <button
              onClick={() => handleDelete(index)}
              className='ml-4 text-red-600'
            >
              Delete
            </button>
           
          </li>
          
          
        ))}
      </ul>
    </div>
  );
};

export default User;
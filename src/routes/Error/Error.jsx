import React from 'react';

export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <h2 className="mt-4 text-2xl text-gray-700">Oops! Page not found.</h2>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="mt-6 inline-block px-6 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500">
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

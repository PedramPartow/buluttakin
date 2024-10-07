import { memo } from "react";

const MemoNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">Page not found.</p>
        <a
          href="/dashboard"
          className="mt-4 inline-block px-4 py-2 bg-brand-700 text-white rounded"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

const NotFound = memo(MemoNotFound);

export default NotFound;

import { useState } from 'react';

export default function Signin({ onComplete }) {
  const [authMethod, setAuthMethod] = useState(null);

  const handleAuth = (method) => {
    setAuthMethod(method);
    // Simulate authentication process
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="max-w-sm mx-auto rounded-lg bg-white pt-16 p-6 shadow-md sm:max-w-md lg:max-w-lg">
      <h2 className="mb-4 text-2xl font-semibold text-center">User Registration</h2>
      <p className="mb-4 text-center">Choose your authentication method:</p>
      <div className="space-y-4">
        <button
          onClick={() => handleAuth('nfid')}
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Connect with NFID
        </button>
        <button
          onClick={() => handleAuth('internetIdentity')}
          className="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Connect with Internet Identity
        </button>
      </div>
      {authMethod && (
        <p className="mt-4 text-center text-sm text-gray-600">
          Authenticating with {authMethod === 'nfid' ? 'NFID' : 'Internet Identity'}...
        </p>
      )}
    </div>
  );
}

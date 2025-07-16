// src/components/OtpModal.jsx
import React, { useEffect, useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import '../firebase'; // ensure firebase is initialized

const OtpModal = ({ phone, onSuccess, onClose }) => {
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = getAuth();

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {},
        'expired-callback': () => {}
      });
    }

    const appVerifier = window.recaptchaVerifier;

    setLoading(true);
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to send OTP. Try again.');
        setLoading(false);
        console.error(err);
      });
  }, [phone]);

  const verifyOtp = () => {
    if (!otp || !confirmationResult) return;

    confirmationResult.confirm(otp)
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        setError('Invalid OTP. Please try again.');
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-cyan-400 mb-4">OTP Verification</h2>

        {loading ? (
          <p className="text-white">Sending OTP to {phone}...</p>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 rounded mb-4 bg-gray-800 border border-gray-600 text-white"
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <div className="flex justify-between">
              <button
                onClick={verifyOtp}
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-2 px-4 rounded"
              >
                Verify OTP
              </button>
              <button
                onClick={onClose}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </>
        )}
        <div id="recaptcha-container" className="mt-2" />
      </div>
    </div>
  );
};

export default OtpModal;

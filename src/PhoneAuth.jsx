import React, { useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase config (use your config below or move it to a separate file if needed)
const firebaseConfig = {
  apiKey: "AIzaSyDbb2wMO7VtJq4Vw-uEM9Dzj9jXWMZXnWY",
  authDomain: "gamers-hub-booking.firebaseapp.com",
  projectId: "gamers-hub-booking",
  storageBucket: "gamers-hub-booking.firebasestorage.app",
  messagingSenderId: "761570429502",
  appId: "1:761570429502:web:b08804fc9e6acff5be5f6f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const PhoneAuth = ({ onVerified }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [step, setStep] = useState("enterPhone");

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {},
      });
    }
  };

  const sendOtp = async () => {
    setupRecaptcha();
    try {
      const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setStep("enterOtp");
    } catch (error) {
      alert("Error sending OTP: " + error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      onVerified(phone); // Notify parent on success
    } catch (error) {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="p-4 border rounded shadow w-full max-w-md mx-auto bg-white">
      {step === "enterPhone" ? (
        <>
          <h2 className="text-lg font-semibold mb-2">Phone Verification</h2>
          <input
            type="tel"
            placeholder="+91XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border mb-2"
          />
          <button onClick={sendOtp} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Send OTP
          </button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-2">Enter OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border mb-2"
          />
          <button onClick={verifyOtp} className="bg-green-600 text-white px-4 py-2 rounded w-full">
            Verify OTP
          </button>
        </>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneAuth;

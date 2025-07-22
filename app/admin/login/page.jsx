"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ArrowLeftFromLine } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Store credentials locally for this dummy example
  const [localEmail, setLocalEmail] = useState("admin1x2b@elsalvo.com");
  const [localPassword, setLocalPassword] = useState("Admin@102xc");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === localEmail && password === localPassword) {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/land");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword === "" || confirmNewPassword === "") {
      alert("Please fill in both new password fields.");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
    if (email !== localEmail) {
      alert("Email does not match the registered admin email.");
      return;
    }

    setLocalPassword(newPassword);
    alert("Password changed successfully locally!");
    setIsForgotPassword(false);
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {isForgotPassword ? "Change Password" : "Admin Login"}
        </h2>

        {!isForgotPassword ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-md font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
            >
              Login
            </button>
            {/* <p className="text-center text-gray-600 text-sm mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsForgotPassword(true);
                  setEmail(""); // Clear email when switching to forgot password
                  setPassword(""); // Clear password when switching to forgot password
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Forgot Password?
              </button>
            </p> */}
          </form>
        ) : (
          <form onSubmit={handleChangePassword} className="space-y-5">
            <div>
              <label htmlFor="emailForPwChange" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="emailForPwChange"
                placeholder="Admin Email (for verification)"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="sr-only">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="New Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-900"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmNewPassword" className="sr-only">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                placeholder="Confirm New Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out placeholder-gray-500 text-gray-900"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white p-3 rounded-md font-semibold text-lg hover:from-green-600 hover:to-teal-700 transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
            >
              Change Password
            </button>
            <p className="text-center text-gray-600 text-sm mt-4">
              <button
                type="button"
                onClick={() => setIsForgotPassword(false)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Back to Login
              </button>
            </p>
          </form>
        )}
        <div className="flex items-center mt-4 justify-center">
          <ArrowLeftFromLine className="w-10 " />
          <button onClick={() => router.push("/")} className="text-center ">
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

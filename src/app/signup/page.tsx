"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [userType, setUserType] = useState("individual");

  const handleUserTypeChange = (type: string) => setUserType(type);

  const handleSocialLogin = async (providerName: string) => {
    let provider;
    switch (providerName) {
      case "google":
        provider = new GoogleAuthProvider();
        break;
      case "facebook":
        provider = new FacebookAuthProvider();
        break;
      case "linkedin":
        provider = new OAuthProvider("linkedin.com");
        break;
      case "microsoft":
        provider = new OAuthProvider("microsoft.com");
        break;
      default:
        return;
    }
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendOTP = async () => {
    try {
      const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      if (confirmationResult) {
        await confirmationResult.confirm(otp);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-orange-800 dark:from-orange-900 dark:to-gray-800">
      <div className="w-[90%] max-w-[1200px] h-[80vh] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden flex">
        {/* Left Side (Info Panel) */}
        <div className="w-1/2 bg-primary text-white flex flex-col justify-center items-center p-12">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-6 text-center max-w-sm">
            To keep connected with us please login with your personal info
          </p>
          <Link href="/login">
          <Button
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 dark:bg-gray-800 dark:text-primary-light dark:hover:bg-gray-700"
            >
            SIGN IN
          </Button></Link>
        </div>

        {/* Right Side (Signup Form) */}
        <div className="w-1/2 p-12 flex items-center justify-center">
          <div className="w-full max-w-sm space-y-6">
            <h2 className="text-3xl font-bold text-primary text-center">
              Create Account
            </h2>

            {/* User Type Switcher */}
<div className="flex justify-center items-center space-x-4">
  <Button
    variant="ghost"
    className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors
      ${
        userType === "individual"
          ? "bg-primary text-white border-primary"
          : "border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300"
      }`}
    onClick={() => handleUserTypeChange("individual")}
  >
    Individual
  </Button>

  {/* Vertical Separator Line */}
  <div className="w-px h-6 bg-black dark:bg-gray-400" />

  <Button
    variant="ghost"
    className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors
      ${
        userType === "agency"
          ? "bg-primary text-white border-primary"
          : "border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300"
      }`}
    onClick={() => handleUserTypeChange("agency")}
  >
    Agency
  </Button>
</div>


            {/* Social Buttons */}
            <div className="flex justify-center gap-4">
              <Button variant="ghost" onClick={() => handleSocialLogin("facebook")}>
                <FaFacebookF className="text-[#1877F2]" />
              </Button>
              <Button variant="ghost" onClick={() => handleSocialLogin("google")}>
                <FcGoogle />
              </Button>
              <Button variant="ghost" onClick={() => handleSocialLogin("linkedin")}>
                <FaLinkedinIn className="text-[#0077B5]" />
              </Button>
              <Button variant="ghost" onClick={() => handleSocialLogin("microsoft")}>
                <Image
                  src="/Microsoft.png"
                  alt="Microsoft"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </Button>

            </div>

            <p className="text-center text-sm text-gray-500">
              or use your email for registration:
            </p>

            {/* Email & Password */}
            <div className="space-y-4">
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="bg-gray-100 dark:bg-gray-800 dark:text-white"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 className="bg-gray-100 dark:bg-gray-800 dark:text-white"
              />
              <Button
                className="w-full bg-primary text-white hover:bg-primary/90"
                onClick={handleEmailSignup}
              >
                Sign Up <FaEnvelope className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">
            or use your phone number:
          </p>
              {/* Phone icon only when phone form hidden */}
              {!showPhoneForm && (
                <Button
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  onClick={() => setShowPhoneForm(true)}
                >
                 SignUp with <FaPhoneAlt className="" />
                </Button>
              )}

            {/* Conditional Phone Login */}
            {showPhoneForm && (
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">Sign in with phone</p>
                <Input
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                   className="bg-gray-100 dark:bg-gray-800 dark:text-white"
                />
                {!otpSent ? (
                  <Button
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    onClick={handleSendOTP}
                  >
                    Send OTP <FaPhoneAlt className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <>
                    <Input
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <Button
                      className="w-full bg-primary text-white hover:bg-primary/90"
                      onClick={handleVerifyOTP}
                    >
                      Verify OTP <FaPhoneAlt className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                )}
                <div id="recaptcha-container"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

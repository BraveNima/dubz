"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import OtpForm from "@/components/auth/OtpForm";
import GoBackSection from "@/components/GoBackSection";
import HeaderWithDescription from "@/components/ui/HeaderWithDescription";
import LoginIcon from "@/components/ui/Icons/LoginIcon";

export enum LoginProcessStage {
  InsertPhoneNumber,
  VerifyOtp,
  Success,
}

export default function Login() {
  const [loginState, setLoginState] = useState(
    LoginProcessStage.InsertPhoneNumber
  );
  const router = useRouter();

  const onClickHandler = () => {
    if (loginState === LoginProcessStage.InsertPhoneNumber) {
      router.back();
    } else if (loginState === LoginProcessStage.Success) {
      setLoginState(LoginProcessStage.InsertPhoneNumber);
    }
  };

  return (
    <>
      <GoBackSection onClickHandler={onClickHandler} />
      {loginState === LoginProcessStage.InsertPhoneNumber && (
        <div className="w-full mt-14">
          <HeaderWithDescription
            title="Log in"
            desc="Please confirm your country code and enter your phone number."
          />
          <div className="w-full">
            <LoginForm setLoginState={setLoginState} />
          </div>
        </div>
      )}
      {loginState === LoginProcessStage.VerifyOtp && (
        <div className="mt-14">
          <HeaderWithDescription
            title="Enter code"
            desc="We’ve sent an SMS with an activation code to your phone +98 912 658
          9842"
          />
          <OtpForm setLoginState={setLoginState} />
        </div>
      )}
      {loginState == LoginProcessStage.Success && (
        <div className="flex flex-col items-center gap-5 justify-center mt-14">
          <LoginIcon />
          <p className="text-2xl text-blue-500">You logged in successfully</p>
        </div>
      )}
    </>
  );
}

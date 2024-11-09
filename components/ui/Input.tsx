"use client";

import { ErrorMessage } from "@hookform/error-message";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = {
  placeHolder: string;
  registerProps: RegisterOptions<FieldValues, string>;
  name: string;
};

export default function Input({
  name,
  placeHolder,
  registerProps,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="w-full flex items-center gap-4">
        <span className="leading-5 border-r-[#D8DADC] border-r pr-[14px]">
          +98
        </span>
        <input
          {...register(name, registerProps)}
          placeholder={placeHolder}
          className="w-full placeholder:opacity-50 px-3 outline-none focus:outline-none focus:border-none text-[#00000080]"
        />
      </div>
      <hr className="w-full bg-[#D8DADC] mt-4 mb-5" />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <span className="text-[#F54135] leading-5">{message}</span>
        )}
      />
    </>
  );
}

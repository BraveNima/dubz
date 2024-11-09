import { handleKeyUp } from "@/utils/handlers";
import { useId } from "react";

import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";

export interface OtpInputProps {
  otpSubmit: SubmitHandler<FieldValues>;
}
const editorKeys = ["ArrowLeft", "ArrowRight", "Backspace", "Delete", "Enter"];

export default function OtpInputs({ otpSubmit }: OtpInputProps) {
  const {
    register,
    reset,
    handleSubmit,
    setFocus,
    setValue,
    formState: { isValid },
  } = useFormContext();
  const numberOfInputs = 5;
  const firstId = useId();
  const idsArray = Array.from(
    new Array(numberOfInputs),
    (_, index) => firstId + index
  );

  const handleClipboard = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "v" && e.ctrlKey === true) {
      const text = await navigator.clipboard.readText();
      if (typeof +text === "number" && text.length === 5) {
        reset({
          digit_1: text[0],
          digit_2: text[1],
          digit_3: text[2],
          digit_4: text[3],
          digit_5: text[4],
        });
      }
      if (typeof text === "string" && text.length === 7) {
        reset({
          digit_1: text[1],
          digit_2: text[2],
          digit_3: text[3],
          digit_4: text[4],
          digit_5: text[5],
        });
      }
    }
  };

  return (
    <div className="flex gap-x-3 pt-2 pb-4" dir="ltr">
      {idsArray.map((item, index) => {
        return (
          <input
            key={index}
            id={item}
            type="tel"
            autoComplete="off"
            className="font-semibold px-2 sm:py-2 py-[8px] rounded-2xl w-[64px] h-[72px] text-center sm:text-xl text-base bg-gray-50 border-[1px] border-gray-400/60 focus:ring-gray-200 placeholder:text-gray-400 focus:ring-[1.8px] focus:bg-orange-50/50 focus:outline-none focus:border-none hover:duration-300 hover:bg-gray-200 transition my-1 text-gray-900"
            {...register(`digit_${index + 1}`, {
              required: true,
              pattern: /^[0-9٠-٩۰-۹]/,
              minLength: 1,
            })}
            maxLength={1}
            onInput={(e) =>
              setValue(`digit_${index + 1}`, e.currentTarget.value)
            }
            onKeyDown={handleClipboard}
            onKeyUp={(e) =>
              isValid && !editorKeys.includes(e.key)
                ? handleSubmit(otpSubmit)()
                : handleKeyUp(e, index, setFocus)
            }
            autoFocus={index === 0}
          />
        );
      })}
    </div>
  );
}

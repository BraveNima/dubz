import Button from "../ui/Button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import OtpInputs from "../ui/OtpInputs";
import Timer from "../ui/Timer";
import { LoginProcessStage } from "@/modules/login/Login";
import { Dispatch, SetStateAction } from "react";

type Inputs = {
  example: string;
};

type OtpFormProps = {
  setLoginState: Dispatch<SetStateAction<LoginProcessStage>>;
};

export default function OtpForm({ setLoginState }: OtpFormProps) {
  const methods = useForm<Inputs>({
    mode: "onChange",
  });
  const {
    formState: { isDirty, isValid },
  } = methods;

  const otpSubmit: SubmitHandler<FieldValues> = async (data) => {
    const otpCode = `${
      data?.digit_1 +
      data?.digit_2 +
      data?.digit_3 +
      data?.digit_4 +
      data?.digit_5
    }`;

    if (otpCode) {
      setLoginState(2);
    }
  };
  return (
    <FormProvider {...methods}>
      <form>
        <OtpInputs otpSubmit={otpSubmit} />
        <div className="flex-center flex gap-2 mb-7 mt-[113px]">
          <h3 className="leading-5 ">Send code again</h3>
          <Timer />
        </div>
        <Button
          title="Continue"
          className="w-full bg-black text-white rounded-[10px] disabled:cursor-not-allowed disabled:bg-[#120b0be3]"
          disabled={!isDirty || !isValid}
        />
      </form>
    </FormProvider>
  );
}

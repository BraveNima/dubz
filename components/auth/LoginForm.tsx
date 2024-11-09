import { Dispatch, SetStateAction } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import PhoneNumber from "../fields/PhoneNumber";
import { LoginProcessStage } from "@/modules/login/Login";
import Button from "../ui/Button";
import ToggleButton from "../ui/ToggleButton";

type Inputs = {
  phone_number: string;
};
type LoginFormProps = {
  setLoginState: Dispatch<SetStateAction<LoginProcessStage>>;
};

export default function LoginForm({ setLoginState }: LoginFormProps) {
  const methods = useForm<Inputs>({
    mode: "onChange",
  });
  const {
    formState: { isDirty, isValid },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = () => {
    setLoginState(1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PhoneNumber />
        <div className="flex items-center justify-between mb-7 mt-[113px]">
          <h3 className="leading-5 ">Sync Contacts</h3>
          <ToggleButton />
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

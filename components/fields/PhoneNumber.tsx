import Input from "../ui/Input";
import { maxLengthFunc, minLengthFunc } from "@/utils/validationFunc";

export default function PhoneNumber() {
  return (
    <Input
      placeHolder="000 000 0000"
      name={"phone_number"}
      registerProps={{
        required: "phoneNumber is required",
        maxLength: maxLengthFunc(11),
        minLength: minLengthFunc(11),
        pattern: {
          value: /^(09)\d{9}$/,
          message: "Please enter a valid phone number",
        },
      }}
    />
  );
}

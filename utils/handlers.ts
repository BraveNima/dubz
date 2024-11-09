import { UseFormSetFocus, FieldValues } from "react-hook-form";

export const handleKeyUp = (
  e: React.KeyboardEvent<HTMLInputElement>,
  index: number,
  setFocus: UseFormSetFocus<FieldValues>
) => {
  const input = e.target as HTMLInputElement;
  const inputLength = input.value.length;
  if (inputLength === input.maxLength || e.key === "ArrowRight") {
    setFocus(`digit_${index + 2}`, { shouldSelect: true });
  }
  if (e.key === "ArrowLeft") {
    setFocus(`digit_${index}`, { shouldSelect: true });
  }
};

export const formatTimeToMMSS = (sec: number) => {
  const minutes = Math.floor(sec / 60);
  const remainingSeconds = sec % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};

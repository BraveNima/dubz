import Image from "next/image";
import star from "@/public/Star.png";
import ArrowLeft from "./ui/Icons/ArrowLeft";

type GoBackSectionProps = {
  onClickHandler: () => void;
};

export default function GoBackSection({ onClickHandler }: GoBackSectionProps) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onClickHandler}
        className="flex-center size-10 border border-[#D8DADC] rounded-[10px]"
      >
        <ArrowLeft />
      </button>
      <Image alt="star pic" src={star} />
    </div>
  );
}

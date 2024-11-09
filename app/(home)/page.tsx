import Link from "next/link";
import Image from "next/image";
import homePageimage from "@/public/Illustration.png";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="relative size-full px-4 h-screen mt-[130px] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-16">
        <Image src={homePageimage} alt="home page logo" />
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold text-black leading-10 -tracking-wider">
            Explore the app
          </h1>
          <p className="text-base text-[#000000B2] leading-5 text-center">
            Now your finances are in one place and always under control
          </p>
        </div>
        <div className="flex items-center flex-col gap-4 w-full">
          <Link href="/login" className="w-full">
            <Button title="Log in" className="w-full bg-black text-white " />
          </Link>
          <Button
            title="Create account"
            className="w-full  text-black border border-[#747474]"
          />
        </div>
      </div>
    </div>
  );
}

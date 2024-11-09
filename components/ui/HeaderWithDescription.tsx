type HeaderWithDescriptionProps = {
  title: string;
  desc: string;
};

export default function HeaderWithDescription({
  title,
  desc,
}: HeaderWithDescriptionProps) {
  return (
    <div className="flex flex-col gap-3 mb-11">
      <h1 className="text-3xl font-bold leading-10">{title}</h1>
      <p className="text-base text-[#000000B2] leading-5">{desc}</p>
    </div>
  );
}

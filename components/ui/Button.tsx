type ButtonProps = {
  title: string;
  className?: string;
  disabled?: boolean;
};

export default function Button({ title, className, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} className={`py-4 rounded-[10px] ${className}`}>
      <div
        className={`flex gap-x-2 justify-center items-center max-md:text-sm`}
      >
        <span>{title}</span>
      </div>
    </button>
  );
}

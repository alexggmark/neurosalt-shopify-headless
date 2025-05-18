type ButtonProps = {
  buttonText?: string;
  invert?: Boolean;
  fullWidth?: Boolean;
};

export default function Button({ buttonText, invert, fullWidth }: ButtonProps) {
  return (
    <button className={`
      group relative inline-block h-12 w-40 overflow-hidden rounded-full cursor-pointer
      ${fullWidth && 'w-full'}
      ${invert ? 'bg-black text-white group-hover:bg-slate-800 hover:bg-slate-800' : 'bg-white text-black group-hover:bg-slate-200 hover:bg-slate-200'}
    `}>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-full">
        {buttonText ? buttonText : "No text"}
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-200 group-hover:translate-y-0">
        {buttonText ? buttonText : "No text"}
      </span>
    </button>
  );
}
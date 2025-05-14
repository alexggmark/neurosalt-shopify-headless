type ButtonProps = {
  buttonText?: string;
  invert?: Boolean;
};

export default function Button({ buttonText, invert }: ButtonProps) {
  return (
    <button className={`
      ${invert ? 'bg-black text-white hover:bg-slate-800' : 'bg-white text-black hover:bg-slate-200'}
      rounded-full px-10 py-3 cursor-pointer font-medium text-base
      `}>
      {buttonText ? buttonText : "No text"}
    </button>
  );
}
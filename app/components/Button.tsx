interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  name?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <button
        onClick={props.onClick}
        name={props.name}
        className={`${props.className} rounded-lg cursor-pointer py-2 px-4 `}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;

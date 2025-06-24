interface InputElProps {
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
  icon?: React.ReactNode;
}

function InputEl(props: InputElProps) {
  return (
    <div>
      <label htmlFor={props.id}></label>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        className={`${props.className} `}
      />
    </div>
  );
}

export default InputEl;

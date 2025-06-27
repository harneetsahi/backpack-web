interface InputElProps {
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
  icon?: React.ReactNode;
  label?: string;
  labelClass?: string;
  defaultValue?: string | number;
}

function InputEl(props: InputElProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={props.id}
        className={`text-xs text-gray ${props.labelClass}`}
      >
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        className={`${props.className} `}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}

export default InputEl;

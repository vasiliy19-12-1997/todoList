import { FC, HTMLInputTypeAttribute } from "react";
import "./myInput.scss";

interface MyInputProps {
  value?: string;
  onChange?: (query: React.ChangeEvent<HTMLInputElement> & string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ ...props }) => {
  const { placeholder } = props;
  return (
    <div className="Input">
      <input placeholder={placeholder} className="InputI" {...props} />
    </div>
  );
};

export default MyInput;

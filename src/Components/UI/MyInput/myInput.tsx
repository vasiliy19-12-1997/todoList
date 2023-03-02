import { observer } from "mobx-react";
import { FC } from "react";
import "./myInput.scss";
interface MyInputProps {
  value?: string;
  onChange?: (query: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const MyInput: FC<MyInputProps> = ({ ...props }) => {
  const { placeholder } = props;
  return (
    <div className="Input">
      <input placeholder={placeholder} className="InputI" {...props} />
    </div>
  );
};

export default observer(MyInput);

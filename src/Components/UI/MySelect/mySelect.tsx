import "./mySelect.scss";
interface MySelectProps<T> {
  options: { value: string; name: string }[];
  value: string;
  onChange: (sort: any) => void;
}
const MySelect = <T,>(props: MySelectProps<T>) => {
  const { options, value, onChange } = props;
  return (
    <div className="MySelect">
      <select
        className="MySelectS"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <option disabled>Sort by</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default MySelect;

import { Select } from "antd";
import { customFontList } from "../../Constants/Constant";

const { Option } = Select;

type Props = {
    placeholder : string
    selectedFont : string
    handleChange : (value : any) => void
  };

const FontSelector = (props: Props) => {


  return (
    <div>
      <Select
        value={props.selectedFont}
        style={{ width: '100%' }}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        allowClear
      >
        {customFontList.map((font) => (
          <Option key={font} value={font}>
            {font}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default FontSelector;

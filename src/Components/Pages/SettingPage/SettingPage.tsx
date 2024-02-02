import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Checkbox, Col, ColorPicker, Form, InputNumber, Row, Slider, Switch } from "antd";
import { useDispatch } from "react-redux";
import {
  setColor,
  setDarkMode,
  setFontSize,
  setFonts,
  setLanguage,
  setQuranicWords,
  setWordSwitch,
} from "../../../redux/Reducers/SettingReducer";
import { useAppSelector } from "../../../redux/hook/hook";
import { RootState } from "../../../redux/store";
import FontSelector from "../../../utilities/FontSelector/FontSelector";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const SettingPage = () => {
  const [form] = Form.useForm();
  const { wordSwitch, darkMode, quranicWords, fonts ,fontSize,color,language} =
    useAppSelector((state: RootState) => state.settingReducer);
  const dispatch = useDispatch();
  const handleChange = (value: any) => {
    dispatch(setFonts(value));
  };

  const onChange = (newValue: any) => {
    dispatch(setFontSize(newValue));
  };
  const onCheckChange = (checkedValues: CheckboxValueType[]) => {
    dispatch(setLanguage(checkedValues))
  };
  
  
  const options = [
    { label: 'English', value: 'English' },
    { label: 'Arabic', value: 'Arabic' },
  ];
  return (
    <div>
      <Form form={form} layout="vertical">
        <Row>
          <Col md={24}>
            <Form.Item label="Select Font: ">
              <FontSelector
                selectedFont={fonts}
                handleChange={handleChange}
                placeholder="Select a font"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={18}>
            <Form.Item label="Select Font: ">
              <Slider
                min={10}
                max={30}
                onChange={onChange}
                value={typeof fontSize === "number" ? fontSize : 0}
              />
            </Form.Item>
          </Col>
          <Col md={6}>
            <Form.Item label="Select Font: ">
              <InputNumber
                min={10}
                max={30}
                style={{ margin: "0 16px" }}
                value={fontSize}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Item label="Word template: ">
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={() => dispatch(setWordSwitch(!wordSwitch))}
                checked={wordSwitch}

              />
            </Form.Item>
          </Col>
          <Col md={6}>
            <Form.Item label="Quranic Words: ">
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={() => dispatch(setQuranicWords(!quranicWords))}
                checked={quranicWords}
              />
            </Form.Item>
          </Col>
          <Col md={6}>
            <Form.Item label="Dark Mode: ">
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={() => dispatch(setDarkMode(!darkMode))}
                checked={darkMode}
              />
            </Form.Item>
          </Col>
          <Col md={6}>
            <Form.Item label="Select Color: ">
            <ColorPicker value={color} onChange={(_,hex)=>dispatch(setColor(hex))} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <Form.Item label="Select Heading Language:">
            <Checkbox.Group options={options} defaultValue={['English']} value={language} onChange={onCheckChange} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SettingPage;

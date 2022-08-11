import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {
  UserOutlined,
  SnippetsOutlined,
  UploadOutlined,
  PhoneOutlined,
  MailOutlined,
  AlertOutlined,
  CalendarOutlined,
  AccountBookOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";
import {
  Menu,
  Button,
  DatePicker,
  Radio,
  Modal,
  message,
  Form,
  Input,
  BackTop,
} from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { updateUser } from "../api/user";
import { saveUserData } from "../features/userSlice";
import {  savePurchasePoint } from "../features/purchasePointSlice";
import { useDispatch } from "react-redux";
import { setPurchasePointReq } from "../api/purchasePoint";
import {getUserLevel} from '../api/user'
// import defaultAvatar from '../../public/default/defaultAvatar'

import "./PersonalPage.less";
import PerfectScrollbar from "react-perfect-scrollbar";

const PersonalPage = () => {

    const navigate = useNavigate();
    const items = [
        {
            label: "Personal Information",
            key: "/personal",
            icon: <UserOutlined/>,
        },
        {
            label: "My Order",
            key: "/orderHistory",
            icon: <SnippetsOutlined/>,
        },
    ];

    const handleMenuClick = ({key}) => {
      if(key === '/orderHistory'){
        navigate(`/orderHistory`);
      }
    };
    const location = useLocation();

    const [current, setCurrent] = useState(location.pathname);

  const userInfo = useSelector((state) => state.userInfo);
  const purchasePoint = useSelector((state) => state.purchasePoint.points);

    const [gender, setGender] = useState(userInfo.gender);
    const [birthday, setBirthday] = useState(moment(userInfo.birthday));
    const [level, setLevel] = useState(0)

    useEffect(() => {
        setGender(userInfo.gender);
        setBirthday(moment(userInfo.birthday));
        getUserLevel(userInfo).then(res=>{
          setLevel(res.data.level)
        })
    }, [userInfo]);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);


    const handleDateChanged = (date, dateString) => {
        setBirthday(date);
    };

    const handleGenderChanged = (event) => {
        setGender(event.target.value);
    };

    const dispatch = useDispatch();

  const handleSaveClicked = () => {
    if (
      gender === userInfo.gender &&
      birthday.isSame(moment(userInfo.birthday), "day")
    )
      return;
    updateUser(userInfo.id, { gender, birthday }).then((res) => {
      dispatch(saveUserData(res));
      message.success({
        content: "save successfully!",
        duration: 2,
      });
    });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [redeemCode, setRedeemCode] = useState("");

  const onChargeClicked = () => {
    setIsModalVisible(true);
  };

  const handleRedeemCodeChanged = (event) => {
    console.log(event.target.value);
    setRedeemCode(event.target.value);
  };

  const [form] = Form.useForm();

  const handleOk = async () => {
    if (redeemCode === "") return;
    console.log("redeemCode", redeemCode);

    try {
      const { data } = await setPurchasePointReq(userInfo.id, redeemCode);
      dispatch(savePurchasePoint(data.balance));
      setRedeemCode("");
      form.resetFields();
      message.success({
        content: "Charge account successfully!",
      });
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
      if (error.errorMessage && error.errorMessage === "Code is wrong") {
        message.error("Invalid redeem code");
        return;
      }
    }
  };

  const handleCancel = () => {
    setRedeemCode("");
    setIsModalVisible(false);
  };

    return (
        <PerfectScrollbar id="app-main-scroller-bar">
            <div className="personal">
      <div className="personal-box w">
        <div className="personal-box-left">
          <Menu
            onClick={handleMenuClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </div>
        {/* 右边个人信息 开始 */}
        <div className="personal-box-right">
          <div className="personal-box-right">
            <div className="personal-box-right-info">
              <div className="personal-box-right-info-img">
                <img className="" src={userInfo?.avatar === null?'/default/defaultAvatar.png':userInfo?.avatar} alt="" />
              </div>
              <div className="personal-box-right-info-list">
                <div className="personal-box-right-info-list-item head">
                  <div className="personal-box-right-info-list-item-title">
                    <span className="nickname">Username:</span>
                  </div>
                  <div className="personal-box-right-info-list-item-content">
                    <span className="nickname">
                      <strong>{userInfo?.username}</strong>
                      <span className="level">Level.{level}</span>
                    </span>
                  </div>
                </div>
                <div className="personal-box-right-info-list-item">
                  <div className="personal-box-right-info-list-item-title">
                    <PhoneOutlined />
                    Telephone:
                  </div>
                  <div className="personal-box-right-info-list-item-content">
                    {userInfo?.phoneNumber}
                  </div>
                </div>
                <div className="personal-box-right-info-list-item">
                  <div className="personal-box-right-info-list-item-title">
                    <MailOutlined />
                    E-mail:
                  </div>
                  <div className="personal-box-right-info-list-item-content">
                    {userInfo?.email}
                  </div>
                </div>
                <div className="personal-box-right-info-list-item">
                  <div className="personal-box-right-info-list-item-title">
                    <AlertOutlined />
                    Gender:
                  </div>
                  <div className="personal-box-right-info-list-item-content">
                    <Radio.Group onChange={handleGenderChanged} value={gender}>
                      <Radio value={"male"}>male</Radio>
                      <Radio value={"female"}>female</Radio>
                      <Radio value={"secrecy"}>secrecy</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className="personal-box-right-info-list-item">
                  <div className="personal-box-right-info-list-item-title">
                    <CalendarOutlined />
                    Birthday:
                  </div>
                  <div className="personal-box-right-info-list-item-content">
                    <DatePicker
                      allowClear={false}
                      value={birthday}
                      onChange={handleDateChanged}
                      disabledDate={(date) => date.isAfter(moment().format())}
                      showToday={false}
                    />
                  </div>
                </div>
                <div className="personal-box-right-info-list-item">
                  <div className="personal-box-right-info-list-item-title">
                    <AccountBookOutlined />
                    Account:
                  </div>
                  <div className="personal-box-right-info-list-item-content">
                    ${purchasePoint.toFixed(2)}
                    <Button
                      type="default"
                      onClick={onChargeClicked}
                      className="redeem-btn"
                    >
                      <BarcodeOutlined /> Redeem
                    </Button>
                    <Modal
                      title="Redeem Code"
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        autoComplete="off"
                      >
                        <Form.Item
                          label="Redeem Code"
                          name="redeemCode"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Redeem Code",
                            },
                          ]}
                        >
                          <Input.Password
                            placeholder="Input your redeem code here."
                            onChange={handleRedeemCodeChanged}
                          />
                        </Form.Item>
                      </Form>
                    </Modal>
                  </div>
                </div>
                <div className="personal-box-right-info-list-item">
                  <div className="personal-box-right-info-list-item-title"></div>
                  <div className="personal-box-right-info-list-item-content">
                    <Button
                      type="primary"
                      onClick={handleSaveClicked}
                      disabled={
                        gender === userInfo.gender &&
                        birthday.isSame(moment(userInfo.birthday), "day")
                      }
                    >
                      <UploadOutlined />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 右边个人信息 结束 */}
      </div>
    </div>
            <BackTop
                className="app-back-to-top"
                target={() => document.getElementById("app-main-scroller-bar")}
            />
        </PerfectScrollbar>
    );
};

export default PersonalPage;

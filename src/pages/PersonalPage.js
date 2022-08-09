import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  UserOutlined,
  SnippetsOutlined,
  UploadOutlined,
  PhoneOutlined,
  MailOutlined,
  AlertOutlined,
  CalendarOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";
import { Menu, Button, DatePicker, Radio } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import{updateUser} from '../api/user'
import{saveUserData} from '../features/userSlice'
import {useDispatch} from 'react-redux'

import "./PersonalPage.less";

const PersonalPage = () => {
  const items = [
    {
      label: "Personal Information",
      key: "/personal",
      icon: <UserOutlined />,
    },
    {
      label: "My Order",
      key: "/myOrder",
      icon: <SnippetsOutlined />,
    },
  ];

  const handleMenuClick = () => {};
  const location = useLocation();

  const [current, setCurrent] = useState(location.pathname);

  const userInfo = useSelector((state) => state.userInfo);

  const [gender, setGender] = useState(userInfo.gender);
  const [birthday, setBirthday] = useState(moment(userInfo.birthday));

  useEffect(() => {
    setGender(userInfo.gender);
    setBirthday(moment(userInfo.birthday));
  }, [userInfo]);

  //   setInterval(()=>{
  //       console.log(birthday.isSame(moment(userInfo.birthday),'day'));
  //   },1000)

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const handleDateChanged = (date, dateString) => {
    setBirthday(date);
  };

  const handleGenderChanged = (event) => {
    setGender(event.target.value);
  };

  const dispatch = useDispatch()

  const handleSaveClicked = () => {
    if (
        gender === userInfo.gender &&
        birthday.isSame(moment(userInfo.birthday), "day")
    ) return
    updateUser(userInfo.id, {gender,birthday}).then(res=>{
        dispatch(saveUserData(res))
        console.log(res);
    })
    
  };

  return (
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
                <img className="" src={userInfo?.avatar} alt="" />
              </div>
              <div className="personal-box-right-info-list">
                <div className="personal-box-right-info-list-item head">
                  <div className="personal-box-right-info-list-item-title">
                    <span className="nickname">Username:</span>
                  </div>
                  <div className="personal-box-right-info-list-item-content">
                    <span className="nickname">
                      <strong>{userInfo?.username}</strong>
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
                    $1000000.00
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
  );
};

export default PersonalPage;

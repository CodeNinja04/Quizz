import React from "react";
import Logout from "../Logout";
import { useHistory,Link } from "react-router-dom";
import { Card, Avatar, Row, Col } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useGoogleAuth } from "../googleAuth";
import "antd/dist/antd.css";
import NavBar from "../assets/Navbar-student";
import { createFromIconfontCN } from "@ant-design/icons";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Modal,
  
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import Classrooms from "./Classrooms";

const StudentPage = () => {
  let history = useHistory();
  const { googleUser } = useGoogleAuth();

  function handleClick() {
    history.push("/student-profile");
  }

  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }

  const { Meta } = Card;

  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <>
      <NavBar />
      <div style={{ fontSize: "3rem", margin: "2%" }}> STUDENT DASHBOARD</div>
      <div style={{ fontSize: "1.5rem", margin: "2%" }}>
        welcome {googleUser.profileObj.name}
      </div>
      <div>
        <div>
          <Classrooms />
        </div>{" "}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin:"2%"}}>
          <Col span={8} className="gutter-row">
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  width={50}
                  height={200}
                  src="https://www.nicepng.com/png/detail/235-2359490_google-classroom-icon-icon-google-classroom.png"
                />
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://img.icons8.com/cotton/2x/create-new--v1.png" />
                }
                title="ATTEMPT QUIZZES"
              />
              <p> </p>
              <Button primary>Attempt</Button>
            </Card>
          </Col>
          <Col span={8} className="gutter-row">
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  width={50}
                  height={200}
                  src="https://www.nicepng.com/png/detail/235-2359490_google-classroom-icon-icon-google-classroom.png"
                />
              }
            >
              {" "}
              <Meta
                avatar={
                  <Avatar src="https://th.bing.com/th/id/OIP.qTV5a53Vb32dGTbEa3Hx9wHaFC?pid=Api&rs=1" />
                }
                title="QUIZZ SUMMARY"
              />
              <p></p>
              <Button primary>ENTER</Button>
            </Card>
          </Col>
          <Col span={8} className="gutter-row">
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  width={50}
                  height={200}
                  src="https://www.nicepng.com/png/detail/235-2359490_google-classroom-icon-icon-google-classroom.png"
                />
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://maxcdn.icons8.com/Share/icon/Time_And_Date/timer1600.png" />
                }
                title="SCHEDULED QUIZZES"
              />
              <p></p>
              <Button primary>CHECK</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StudentPage;

// https://lh3.googleusercontent.com/proxy/36pB6dwc6L_EK_HIti4nMwsqILR5Zc-2BQObioopwEMOuZuV2GZsXsqFJWDFlqAY9vP1zHjQ95RjcfiH4LXoAi0CEYhwottr7vvDk7ia6iuidEqC-sU1-vLrmCC5qWxMHXc

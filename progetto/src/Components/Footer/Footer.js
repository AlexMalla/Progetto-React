import React from "react";
import texts from "../../utilities/texts.json";
import { Col, Row } from "react-bootstrap";
import logo from "../../images/egg-fill.svg";
import {Link} from "react-router-dom";

export default function Footer(){
        return (
            <div>
                {texts.map((item) => {
                    return (
                        <div className='bgblack p-3 container-xxl'>
                            <Row className='m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100'>
                                <Col xs={12} md={4} lg={6} xl={7} xxl={8} className="py-2">
                                    <Link to="/" className="d-flex align-items-center">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            style={{ width: "50px", height: "auto" }}
                                        ></img>
                                        <p className="font-secondary link m-0 f1 mt-2">
                                            {item.footer.subtitle}
                                        </p>
                                    </Link>
                                </Col>
                                <Col xs={12} md={8} lg={6} xl={5} xxl={4} className='my-3'>
                                    <Row className="d-flex w-100 p-0 m-0">
                                        {
                                            texts.map((item) => {
                                                return (item.footer.footerLinks.map((element, index) => {
                                                    return (
                                                        <Col key={index} xs={12} sm={4} className="d-flex justify-content-start justify-content-sm-center justify-content-lg-end align-items-center p-0">
                                                            <Link to="/" key={index} hreft="#" className=" my-1 mx-1 link footerlink font-secondary">
                                                                {element}
                                                            </Link>
                                                        </Col >)
                                                }))
                                            })
                                        }
                                    </Row>
                                </Col>
                                <Col xs={12} className='font-secondary my-2'>{item.footer.description}</Col>
                            </Row>
                        </div>
                    );
                })}
            </div>
        );
    }
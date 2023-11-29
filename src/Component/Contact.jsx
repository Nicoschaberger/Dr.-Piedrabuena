import React from "react";
import 'animate.css';
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <>
      <div className="redes" >
        <SocialIcon className="animate__backInDown" url="https://facebook.com" />
        <SocialIcon className="animate__backInDown" url="https://www.instagram.com/od.macarena_piedrabuena/"/>
        <SocialIcon className="animate__backInDown" url="https://wa.me/543492604671" />
        <SocialIcon className="animate__backInDown" url="https://linkedin.com/" />
      </div>
    </>
  );
};

export default Contact;

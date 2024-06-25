import React from "react";
import Topbar from "../components/Topbar";

function ContactUs() {
return (
    <div className="Outer-contactus">
      <Topbar name="Contact Us"/>
      <div className="ContactUs">
      <label>
        First name <br/>
        <input name="fname"/>
      </label>
      <label>
        Last name <br/>
        <input name="lname"/>
      </label>
      <label>
        E-mail<br/>
        <input type="email" name="email"/>
      </label>
      <label>
        Phone Number<br/>
        <input name="mobile"/>
      </label>
      <label>
        Message<br/>
        <textarea name="message" rows={10} cols={55}></textarea>
      </label>
      <button className="sendmsg">
        Send Message
      </button>
    </div>
    </div>
  );
}

export default ContactUs;
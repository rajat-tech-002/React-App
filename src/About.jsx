import React from "react";
import web from "../src/images/me2.png"
import Common from "./Common";

const About = () => {
  return (
<Common name = 'This Web Application is Developed by' 
imgsrc = {web} 
visit = "/contact" 
btnname = "Contact Now" 
text1 = "Rajat"
text2 = "I am currenty a <ML, NLP> researcher at DA-IICT Gandhinagar. "
/> 
   );
};

export default About;

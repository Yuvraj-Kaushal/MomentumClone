import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import {TimeContainer, TimeStamp, Greeting} from "./TimeStyling";

const Time = () => {
  let today = new Date();
  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning, bhai/behen 🌅😇";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon, bhai/behen 🌞";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good Evening, bhai/behen 🤗";
    } else {
      return "Aur bhai/behen aap is samay kya kr rahe hae?";
    }
  };

  return (
    <TimeContainer>
      <TimeStamp>
        <Moment format="LT"></Moment>
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </TimeContainer>
  );
};

export default Time;

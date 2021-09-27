import React from "react";
import Icon from "../../../components/uielements/icon/index.js";
import { Button } from "./button.style";

const ButtonIconLabels = props => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    <div>
      <Button variant="raised" color="secondary">
        Delete
        <Icon className="rightIcon">delete</Icon>
      </Button>
      <Button variant="raised" color="primary">
        Send
        <Icon className="rightIcon">send</Icon>
      </Button>
      <Button variant="raised" color="default">
        Upload
        <Icon className="rightIcon">file_upload</Icon>
      </Button>
    </div>
    <div>
      <Button variant="raised" color="inherit">
        <Icon className="leftIcon">done</Icon>
        Done
      </Button>
      <Button variant="raised" disabled color="secondary">
        <Icon className="leftIcon">keyboard_voice</Icon>
        Talk
      </Button>
      <Button variant="raised" size="small">
        <Icon className="leftIcon">save</Icon>
        Save
      </Button>
    </div>
  </div>
);

export default ButtonIconLabels;

import React from "react";
import Icon from "../../../components/uielements/icon/index.js";
import { Button } from "./button.style";

const FloatingActionButtons = () => (
  <div>
    <Button variant="fab" color="primary" aria-label="add">
      <Icon>add</Icon>
    </Button>
    <Button variant="fab" color="secondary" aria-label="edit">
      <Icon>mode_edit</Icon>
    </Button>
  </div>
);

export default FloatingActionButtons;

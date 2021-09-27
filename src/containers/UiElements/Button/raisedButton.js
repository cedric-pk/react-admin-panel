import React from 'react';
import { Button, Input } from './button.style';

const RaisedButtons = () => (
  <div>
    <Button variant="raised">Default</Button>
    <Button variant="raised" color="primary">
      Primary
    </Button>
    <Button variant="raised" color="secondary">
      Secondary
    </Button>
    <Button variant="raised" color="inherit">
      Inherit
    </Button>
    <Button variant="raised" color="secondary" disabled>
      Disabled
    </Button>
    <Input accept="jpg,jpeg,JPG,JPEG" id="file" multiple type="file" />
    <label htmlFor="file">
      <Button variant="raised" component="span">
        Upload
      </Button>
    </label>
  </div>
);

export default RaisedButtons;

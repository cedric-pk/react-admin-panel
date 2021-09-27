import React from 'react';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';

export default props => (
  <MuiPickersUtilsProvider utils={MomentUtils} {...props} />
);

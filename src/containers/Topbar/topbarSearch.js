import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TopbarSearchModal, {
  IconButtons,
  SearchIcon,
} from './topbarSearchModal.style';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import BasicAutoComplete from '../UiElements/Autocomplete/basicAutoComplete';

const theme = createMuiTheme({
  overrides: {
    MuiPopover: {
      paper: {
        width: 700,
        top: '160px !important',
        left: '50% !important',
        marginLeft: '-350px',
        minHeight: 51,
      },
    },
  },
});

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 'auto',
  },
  suggestionsContainerOpen: {
    // position: 'absolute',
    // marginTop: theme.spacing.unit,
    // marginBottom: theme.spacing.unit * 3,
    // left: 0,
    // right: 0,
    // zIndex: 100000,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});
class TopbarSearch extends Component {
  state = {
    visible: false,
    transition: 'fade',
  };
  hide = () => {
    this.setState({ visible: false });
  };
  handleVisibleChange = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <div>
        <IconButtons onClick={this.handleVisibleChange}>
          <SearchIcon>search</SearchIcon>
        </IconButtons>

        <MuiThemeProvider theme={theme}>
          <TopbarSearchModal open={this.state.visible} onClose={this.hide}>
            <div className="searchContainer">
              {visible ? <BasicAutoComplete {...this.props} /> : ''}
            </div>
          </TopbarSearchModal>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.App,
  customizedTheme: state.ThemeSwitcher.topbarTheme,
}))(withStyles(styles)(TopbarSearch));

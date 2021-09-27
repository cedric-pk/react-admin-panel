import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
// import preset from 'jss-preset-default';
import { jssPreset } from '@material-ui/core/styles';
import rtl from 'jss-rtl';
import themes from './settings/themes';
import { themeConfig } from './settings';
import AppLocale from './languageProvider';
import { store, history } from './redux/store';
import Boot from './redux/boot';
import Router from './router';

const currentAppLocale = AppLocale.en;

if (!global.__INSERTION_POINT__) {
  global.__INSERTION_POINT__ = true;
  const styleNode = document.createComment('insertion-point-jss');

  if (document.head) {
    document.head.insertBefore(styleNode, document.head.firstChild);
  }
}

// const jss = create(preset(), rtl());
const jss = create(jssPreset(), rtl());
jss.options.insertionPoint = 'insertion-point-jss';

const MetaAdmin = () => {
  return (
    <JssProvider jss={jss}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={themes[themeConfig.theme]}>
          <Provider store={store}>
            <Router history={history} />
          </Provider>
        </ThemeProvider>
      </IntlProvider>
    </JssProvider>
  );
};
Boot()
  .then(() => MetaAdmin())
  .catch(error => console.error(error));

export default MetaAdmin;

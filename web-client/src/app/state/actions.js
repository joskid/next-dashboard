import moment from "../../../common/src/moment";
import * as types from "./types";

export const create = data => ({ type: types.CREATE, ...data });

export const start = () => ({ type: types.START });

export const stop = () => ({ type: types.STOP });

export const setStatusCode = ({ code }) => ({
  type: types.SET_STATUS_CODE,
  code
});

export const setLocale = ({ locale }) => {
  moment.locale(locale);
  return {
    type: types.SET_LOCALE,
    locale
  };
};

export const setTheme = ({ theme }) => {
  return {
    type: types.SET_THEME,
    theme
  };
};

export const setUser = ({ user }) => {
  return {
    type: types.SET_USER,
    user
  };
};

export const setConnected = ({ isConnected }) => ({
  type: types.SET_CONNECTED,
  isConnected
});

export const setSubscribed = ({ isSubscribed }) => ({
  type: types.SET_SUBSCRIBED,
  isSubscribed
});

export const showAuthModal = () => ({ type: types.SHOW_AUTH_MODAL });

export const hideAuthModal = () => ({ type: types.HIDE_AUTH_MODAL });

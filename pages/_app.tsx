import App, { AppContext, AppProps } from "next/app";
import axios from "../lib/api";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../store";
import { cookieStringToObject } from "../lib/utils";
import { meAPI } from "../lib/api/auth";
import { userActions } from "../store/user";
import { Provider } from "react-redux";

const app = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </Provider>
  );
};

// app.getInitialProps = async (context) => {
//   const appInitialProps = await App.getInitialProps(context);
//   const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
//   const { store } = context.ctx;
//   try {
//     const { isLogged } = store.getState().all.user;
//     if (!isLogged && cookieObject.access_token) {
//       axios.defaults.headers.cookie = cookieObject.access_token;
//       const { data } = await meAPI();
//       store.dispatch(userActions.setLoggedUser(data));
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
//   return { ...appInitialProps };
// };

export default app;

import App, { AppContext, AppProps } from "next/app";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../store";
import { cookieStringToObject } from "../lib/utils";
import axios from "../lib/api";
import { meAPI } from "../lib/api/auth";
import { userActions } from "../store/user";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

//* 모든 페이지에서 로그인 정보를 불러올 수 있도록 설정
app.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);
  const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
  const { store } = context.ctx;
  const { isLogged } = store.getState().user;
  try {
    if (!isLogged && cookieObject.access_token) {
      axios.defaults.headers.cookie = cookieObject.access_token;
      const { data } = await meAPI();
      store.dispatch(userActions.setLoggedUser(data));
    }
  } catch (e) {
    console.log(e);
  }

  return { ...appInitialProps };
};

export default wrapper.withRedux(app);

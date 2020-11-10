import React from "react";
import App from "next/app";
import Navbar from "../components/Navbar";

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};
//     if (Component.getInitialProps) {
//       pageProps = Component.getInitialProps(ctx);
//     }
//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <div>
//         <h1> Iam from app</h1>
//         <Component {...pageProps} />
//       </div>
//     );
//   }
// }

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <h1>Footer</h1>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// //
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;

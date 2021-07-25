import Head from "next/head";
import Header from "../header";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import PropTypes from "prop-types";

// for typescript:
// import { ReactNode } from "react";
// interface LayoutProps {
//   children: ReactNode;
// }

export default function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      {/* Head */}
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="website next js basic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Content */}
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
};

Layout.defaultProps = {
  children: undefined,
  pageTitle: "Next",
};

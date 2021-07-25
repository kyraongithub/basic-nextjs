import PropTypes from "prop-types";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

export default function Blog(props) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog">
      {dataBlog.map((blog) => {
        return (
          <div className={styles.card} key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}

Blog.propTypes = {
  dataBlog: PropTypes.array,
};

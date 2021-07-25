import Layout from "../../components/Layout";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styles from "../../styles/Users.module.css";

export default function Users(props) {
  const router = useRouter();
  const { dataUser } = props;
  return (
    <Layout pageTitle="Users">
      {dataUser.map((user) => {
        return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`users/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUser = await res.json();
  return {
    props: {
      dataUser: dataUser,
    },
  };
}

Users.propTypes = {
  dataUser: PropTypes.array,
};

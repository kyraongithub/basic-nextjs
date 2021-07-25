import Layout from "../../components/Layout";
import PropTypes from "prop-types";

export default function Users(props) {
  const { dataUser } = props;
  console.log(dataUser);
  return (
    <Layout pageTitle="User">
      {dataUser.map((user) => {
        return (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
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

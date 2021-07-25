import Layout from "../../components/Layout";
import PropTypes from "prop-types";

export default function Detail(props) {
  const { user } = props;
  console.log(user);
  return (
    <Layout pageTitle="User Detail">
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Phone: {user.phone}</h1>
      <h1>Website: {user.website}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUser = await res.json();
  const paths = dataUser.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}

Layout.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    Name: PropTypes.string,
    Email: PropTypes.string,
    Phone: PropTypes.string,
    Website: PropTypes.string,
  }),
};

Layout.defaultProps = {
  user: {},
};

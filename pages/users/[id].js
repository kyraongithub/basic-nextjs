import Layout from "../../components/Layout";
import { useRouter } from "next/router";
export default function detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="User Detail">
      <h1>detail {id}</h1>
    </Layout>
  );
}

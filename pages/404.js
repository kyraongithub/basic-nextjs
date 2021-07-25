import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="title-not-found">
      <h1>Ooops........</h1>
      <h1>Halaman yang anda cari tidak ditemukan</h1>
    </div>
  );
}

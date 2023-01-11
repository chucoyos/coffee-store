import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter()
  console.log("router", router)
  return (
    <div>
      <h1>Coffee Store {router.query.id}</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

export default CoffeeStore
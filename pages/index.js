import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
export default function Home() {
  const { user } = useUser();
  console.log("User", user);
  return (
    <div>
      <h1>Hello</h1>
      <div>
        {user ? (
          <>
            <div>
              <Image src={user.picture} alt={user.name} height={50} width={50}/>
            </div>
            <Link href="/api/auth/logout">Logout </Link>
          </>
        ) : (
          <Link href="/api/auth/login">Login </Link>
        )}
      </div>
    </div>
  );
}

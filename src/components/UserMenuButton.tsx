"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import profilePicPlaceholder from "@/assets/profile-pic-placeholder.png";
import Link from "next/link";

type UserMenuButtonProps = {
  session: Session | null;
};

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        {user ? (
          <Image
            src={user?.image || profilePicPlaceholder}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <Image
            src={profilePicPlaceholder}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-30 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
      >
        {user ? (
          <li>
            <Link href="/profile">Profile</Link>
            <Link href="/orders">My Orders</Link>
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
      </ul>
    </div>
  );
}

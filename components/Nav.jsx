"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [toggleDropdown, settoggleDropdown] = useState(false);

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="w-full p-4 mb-16 flex-between">
      <Link className="flex gap-2 flex-center" href={"/"}>
        <Image
          src={"/assets/images/logo.svg"}
          width={30}
          height={30}
          alt="logo"
          className="object-contain"
        />
        <p className="logo_text">Promptopo</p>
      </Link>


      {/* Desktop Nav*/}
      <div className="hidden sm:flex">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src={"/assets/images/logo.svg"}
                width={37}
                height={37}
                alt="user profile picture"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/*Mobile Nav*/}

      <div className="relative flex sm:hidden">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              alt="user profile picture"
              className="rounded-full"
              onClick={() => settoggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  className="dropdown_link"
                  href={"/profile"}
                  onClick={() => settoggleDropdown(false)}
                >
                  My profile
                </Link>

                <Link
                  className="dropdown_link"
                  href={"/create-prompt"}
                  onClick={() => settoggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  className="w-full mt-5 black_btn"
                  type="button"
                  onClick={() => {
                    toggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;

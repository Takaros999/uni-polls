import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { isUserAuthenticated } from "@/services/profile.service";
import { hasUserVoted } from "@/services/pollEntry.service";

export const metadata: Metadata = {
  title: "DIT Polls",
  description: "Vote for the future of education.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await isUserAuthenticated();
  const hasVoted = await hasUserVoted();

  return (
    <html lang="en">
      <UserProvider>
        <body>
          <div className="navbar bg-base-100 sticky top-0 w-full z-50">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="hover:text-primary">
                    <a href="/">Home</a>
                  </li>
                  <li className="hover:text-primary">
                    {hasVoted ? (
                      <a href="/my-vote">My vote</a>
                    ) : (
                      <a href="/vote">Vote</a>
                    )}
                  </li>
                  <li className="hover:text-primary">
                    <a href="/faq">FAQ</a>
                  </li>
                  <li className="hover:text-primary">
                    <a href="mailto:dit.uoa.polls@gmail.com">Contact</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl" href="/">
                <span className="text-primary">DIT</span> Polls
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li className="hover:text-primary">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-primary">
                  {hasVoted ? (
                    <a href="/my-vote">My vote</a>
                  ) : (
                    <a href="/vote">Vote</a>
                  )}
                </li>
                <li className="hover:text-primary">
                  <a href="/faq">FAQ</a>
                </li>
                <li className="hover:text-primary">
                  <a href="mailto:dit.uoa.polls@gmail.com">Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {isAuthenticated ? (
                <a className="btn btn-error" href="/api/auth/logout">
                  Logout
                </a>
              ) : (
                <a className="btn btn-primary" href="/api/auth/login">
                  Login
                </a>
              )}
            </div>
          </div>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}

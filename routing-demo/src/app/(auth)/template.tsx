"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react';
import "./style.css";
type AuthLayoutProps = {
  children: React.ReactNode;
};

const navLinks = [
  { name: 'Login', href: '/Login' },
  { name: 'Register', href: '/Register' },
  {name:'forgot-password', href:'/forgot-password'},

];

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [input,setInput] = useState("");
  const pathname = usePathname();

  return (
    <div>
      <div>
        <input value={input} onChange={(e)=> setInput(e.target.value)}/>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== '/');

          return (
            <Link
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
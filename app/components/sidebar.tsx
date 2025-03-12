"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; 
import activeHome from "../assets/Icons/active_home.png";
import pots from "../assets/Icons/small_pot.png";
import budget from '../assets/Icons/recurring_bills.svg'
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/Overview", label: "Home" , img: activeHome},
    { href: "/Budget", label: "Budget" , img:budget},
    { href: "/Pots", label: "Pots" , img: pots},
    { href: "/", label: "Contact" , img:activeHome},
  ];

  return (
    <aside className="w-64  h-screen fixed bg-gray-800 text-white p-4">
      <nav>
        <h1 className="mt-3 mb-8 text-center">w-finance</h1>
        <ul>
          {links.map(({ href, label, img}) => (
            <li key={href} className="mb-2 flex items-center">
             
              <Link
                href={href}
                className={clsx(
                  "p-3 rounded-md transition flex items-center w-full",
                  pathname === href ? "bg-white text-black" : "hover:bg-gray-700"
                )}
              >
                 <Image src={img} alt={label} className="mx-4"/>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

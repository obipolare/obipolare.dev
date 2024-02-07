import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="text-white  py-4">
      <nav className="flex flex-col items-center justify-between w-10/12 mx-auto sm:flex-row h-[92px]">
        <div className="flex items-center justify-between w-full h-full">
          <figure className="relative z-50">
            <img src="/assets/svg/clover.svg" alt="This is a clover image" />
          </figure>
          <button className="relative z-50 block sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>

        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row items-center font-semibold text-[18px] sm:static absolute top-0 bg-[#212529] sm:bg-transparent w-full sm:w-auto pt-24 sm:pt-0`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="px-[56px] py-[20px] sm:py-0">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="pb-[16px] sm:pb-0">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

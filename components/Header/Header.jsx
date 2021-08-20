import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white ">
      <nav className="flex items-center justify-between h-[92px] w-10/12 mx-auto">
        <figure>
          <img src="/assets/svg/clover.svg" alt="This is a clover image" />
        </figure>
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <a className="text-[18px]">Home</a>
            </Link>
          </li>
          <li className="px-[56px]">
            <Link href="/blog">
              <a className="text-[18px]">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-[18px]">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

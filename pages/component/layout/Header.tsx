import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);

  const Router = router.pathname;

  // const face_of_creta = Router === '/founders/[founder_id]';
  // const studio = Router === '/studio';
  // const multiverse = Router === '/multiverse';
  // const nft_market =
  //   Router === '/kuf' || Router === '/kuf/[product_id]' || Router === '/world' || Router === '/world/sf' || Router === '/world/sf' || Router === '/tickets' || Router === '/tickets/[id]';

  return (
    <>
      <div className="bg-white fixed z-50 w-full drop-shadow-md">
        <div className="container">
          <div className="flex justify-center lg:justify-between items-center h-[90px]">
            <div className="pl-5 sm:pl-0 mt-2">
              <Link href="/">
                <img src="/images/logo/logo-with_text.png" className="cursor-pointer w-[200px]" />
              </Link>
            </div>
            <div className="header-menu-wrap hidden lg:block">
              <ul className="flex justify-center items-center h-full">
                <li
                  className="h-full"
                  onMouseEnter={() => {
                    setOpenMenu1(true);
                  }}
                  onMouseLeave={() => {
                    setOpenMenu1(false);
                  }}
                >
                  <Link href="/submenu1/1">
                    <a className="flex items-center h-full px-5 py-10 font-bold hover:opacity-50 text-black">Menu1</a>
                  </Link>
                </li>
                <li
                  className="h-full"
                  onMouseEnter={() => {
                    setOpenMenu2(true);
                  }}
                  onMouseLeave={() => {
                    setOpenMenu2(false);
                  }}
                >
                  <Link href="/submenu2/1">
                    <a className="flex items-center h-full px-5 py-10 font-bold hover:opacity-50 text-black">Menu2</a>
                  </Link>
                </li>
                <li
                  className="h-full"
                  onMouseEnter={() => {
                    setOpenMenu3(true);
                  }}
                  onMouseLeave={() => {
                    setOpenMenu3(false);
                  }}
                >
                  <Link href="/submenu3/1">
                    <a className=" flex items-center h-full px-5 py-10 font-bold hover:opacity-50 text-black">Menu3</a>
                  </Link>
                </li>
                <li
                  className="h-full"
                  onMouseEnter={() => {
                    setOpenMenu4(true);
                  }}
                  onMouseLeave={() => {
                    setOpenMenu4(false);
                  }}
                >
                  <Link href="/submenu4/1">
                    <a className=" flex items-center h-full px-5 py-10 font-bold hover:opacity-50 text-black">Menu4</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mypage">
                    <div className="bg-slate-500 w-10 h-10 rounded-full ml-7 cursor-pointer"></div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`flex bg-white absolute left-0 top-0 p-[20px] pt-0 mt-[87px] w-full ${openMenu1 ? '' : 'hidden'}`}
              onMouseEnter={() => {
                setOpenMenu1(true);
              }}
              onMouseLeave={() => {
                setOpenMenu1(false);
              }}
            >
              <div className={`sm:w-[1200px] m-auto flex justify-start text-black`}>
                <ul className={'sm:ml-[681px]'}>
                  <li className="text-left p-3">
                    <Link href={`/submenu1/1`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu1-1</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu1/2`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu1-2</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu1/3`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu1-3</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu1/4`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu1-4</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`flex bg-white absolute left-0 top-0 p-[20px] pt-0 mt-[87px] w-full ${openMenu2 ? '' : 'hidden'}`}
              onMouseEnter={() => {
                setOpenMenu2(true);
              }}
              onMouseLeave={() => {
                setOpenMenu2(false);
              }}
            >
              <div className={`sm:w-[1200px] m-auto flex justify-start`}>
                <ul className="sm:ml-[804px]">
                  <li className="text-left p-3">
                    <Link href={`/submenu2/1`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu2-1</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu2/2`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu2-2</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu2/3`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu2-3</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu2/4`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu2-4</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`flex bg-white absolute left-0 top-0 p-[20px] pt-0 mt-[87px] w-full ${openMenu3 ? '' : 'hidden'}`}
              onMouseEnter={() => {
                setOpenMenu3(true);
              }}
              onMouseLeave={() => {
                setOpenMenu3(false);
              }}
            >
              <div className={`sm:w-[1200px] m-auto flex justify-start`}>
                <ul className="sm:ml-[927px]">
                  <li className="text-left p-3">
                    <Link href={`/submenu3/1`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu3-1</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu3/2`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu3-2</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu3/3`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu3-3</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu3/4`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu3-4</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`flex bg-white absolute left-0 top-0 p-[20px] pt-0 mt-[87px] w-full ${openMenu4 ? '' : 'hidden'}`}
              onMouseEnter={() => {
                setOpenMenu4(true);
              }}
              onMouseLeave={() => {
                setOpenMenu4(false);
              }}
            >
              <div className={`sm:w-[1200px] m-auto flex justify-start`}>
                <ul className="sm:ml-[1050px]">
                  <li className="text-left p-3">
                    <Link href={`/submenu4/1`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu4-1</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu4/2`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu4-2</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu4/3`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu4-3</div>
                    </Link>
                  </li>
                  <li className="text-left p-3">
                    <Link href={`/submenu4/4`}>
                      <div className={`hover:opacity-50 text-base font-bold cursor-pointer`}>SubMenu4-4</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

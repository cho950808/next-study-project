import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img src="/images/logo/logo-with_text.png" className="cursor-pointer w-72" />
      <div className="w-[500px]  flex flex-col items-center justify-center p-10 border border-gray-400 mt-10 mb-5 rounded-lg">
        <div className="w-4/5 border border-gray-400 rounded-t-sm">
          <input type="text" className="w-full py-2 pl-10 bg-white text-black" placeholder="아이디" maxLength={20} />
        </div>
        <div className="w-4/5 border border-gray-400 rounded-b-sm mb-5">
          <input type="password" className="w-full py-2 pl-10 bg-white text-black" placeholder="비밀번호" maxLength={20} />
        </div>
        <Link href="/main">
          <button className="bg-black w-4/5 rounded-md" onClick={() => {}}>
            <div className="px-20 py-2 text-white">로그인</div>
          </button>
        </Link>
      </div>
      <div className="flex w-[500px] justify-evenly">
        <Link href="/">
          <div className="text-gray-400 cursor-pointer">비밀번호 찾기</div>
        </Link>
        <div className="border border-gray-400" />
        <Link href="/">
          <div className="text-gray-400 cursor-pointer">아이디 찾기</div>
        </Link>
        <div className="border border-gray-400" />
        <Link href="/createid">
          <div className="text-gray-400 cursor-pointer">회원가입</div>
        </Link>
      </div>
    </div>
  );
}

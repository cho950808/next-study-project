import Link from 'next/link';
import { useState } from 'react';
import Layout from '../component/layout/Layout';
import { cls } from '../../libs/utils';

export default function WriteScreen() {
  const [selectVisible, setSelectVisible] = useState(false);
  return (
    <Layout>
      <div className="container pt-[150px] text-gray-900 py-2 space-x-4 flex-1 flex flex-col justify-center items-center">
        <div className="text-gray-900 bg-white text-4xl text-left pl-2 font-bold  mb-6 w-full">게시판</div>
        <div className="grid grid-cols-10 grid-rows-12 w-full mb-5">
          <div className="col-start-1 row-start-1 row-span-1 font-bold text-md flex justify-center items-center py-3 border-t border-r border-gray-400 bg-gray-300">제목</div>
          <div className="col-start-2 row-start-1 col-span-9 pl-3 py-3 border-t border-gray-400">
            <input type="text" className="p-1 border border-gray-400 w-full" maxLength={20} />
          </div>
          <div className="col-start-1 row-start-2 row-span-1 font-bold text-md flex justify-center items-center py-3 border-t border-r border-gray-400 bg-gray-300">카테고리</div>
          <div className="col-start-2 row-start-2 col-span-9 pl-3 py-3 border-t border-gray-400">
            <select className="bg-white text-black w-1/2 border border-gray-400 py-1.5 pl-2 col-span-1">
              <option>팀</option>
              <option>사업전략팀</option>
              <option>마케팅팀</option>
              <option>게임개발팀</option>
              <option>서비스개발팀</option>
              <option>테크비즈팀</option>
            </select>
          </div>
          <div className="col-start-1 row-start-3 row-span-2 font-bold text-md flex justify-center items-center py-3 border-t border-r border-gray-400 bg-gray-300">수신대상</div>
          <div className="col-start-2 row-start-3 col-span-9 row-span-2 pl-3 py-3 border-t border-gray-400">
            <div className="w-full">
              <div className="flex w-1/3 gap-2 mb-2">
                <div className="w-1/5 flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    id="all"
                    value="all"
                    name="select"
                    checked
                    onClick={() => {
                      setSelectVisible(false);
                    }}
                  />
                  <label htmlFor="all">전체</label>
                </div>
                <div className="w-1/5 flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    id="notAll"
                    value="notAll"
                    name="select"
                    onClick={() => {
                      setSelectVisible(true);
                    }}
                  />
                  <label htmlFor="notAll">선택(팀)</label>
                </div>
                <div className="w-1/2">
                  <select className={cls('bg-white text-black w-full border border-gray-400 py-1.5 pl-2 col-span-1', selectVisible ? '' : 'hidden')}>
                    <option>팀</option>
                    <option>사업전략팀</option>
                    <option>마케팅팀</option>
                    <option>게임개발팀</option>
                    <option>서비스개발팀</option>
                    <option>테크비즈팀</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <input type="text" className="p-1 border border-gray-400 w-full" maxLength={20} />
              </div>
            </div>
          </div>
          <div className="col-start-1 row-start-5 row-span-4 font-bold text-md flex justify-center items-center py-3 border-t border-r border-gray-400 bg-gray-300">내용</div>
          <div className="col-start-2 row-start-5 col-span-9 row-span-4 pl-3 py-3 border-t border-gray-400">
            <textarea name="thetext" rows={20} className="border border-gray-400 p-1 w-full" maxLength={2000} />
          </div>
          <div className="col-start-1 row-start-8 row-span-1 font-bold text-md flex justify-center items-center py-3 border-y border-r border-gray-400 bg-gray-300">파일</div>
          <div className="col-start-2 row-start-8 col-span-9 row-span-4 pl-3 py-2 border-y border-gray-400">
            <input type="file" className=" w-full h-full" maxLength={10} multiple />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link href="/main">
            <input type="submit" value="취소" className="px-10 py-2 bg-white text-gray-900 rounded-md cursor-pointer  border border-gray-900" />
          </Link>
          <input type="submit" value="등록" className="px-10 py-2 bg-gray-900 text-white rounded-md cursor-pointer  border border-gray-900" />
        </div>
      </div>
    </Layout>
  );
}

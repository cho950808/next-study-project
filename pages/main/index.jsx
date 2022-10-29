import Layout from '../component/layout/Layout';
import Link from 'next/link';
import notice_data from '../../tmp/notice-data';
import React, { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PostLink from './postlink';
import Pagination from './pagination';
import { useForm } from 'react-hook-form';

// interface noticeBoardForm {
//   name?: string;
//   title: string;
// }

const main = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="w-full border border-gray-400 py-2 font-bold" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const [currentPage, setCurrentPage] = useState(1); //현재 페이지는 1로 기본설정
  const [postPerPage, setPostPerPage] = useState(20); //한페이지에 10개의 데이터 보여주기

  let indexOfLastPost = currentPage * postPerPage; //보여줄 마지막 데이터의 인덱스
  let indexOfFirstPost = indexOfLastPost - postPerPage; //보여줄 첫번째 데이터의 인덱스
  let currentPosts = notice_data.slice(indexOfFirstPost, indexOfLastPost); //indexOfFirstPost번째부터 indexOfLastPost-1까지
  const paginate = (pageNum) => setCurrentPage(pageNum); //현재 페이지를 변경하는 함수

  const PostList = () => (
    <>
      {currentPosts.map((data, index) => {
        return <PostLink id={data.id} title={data.title} key={index} publisher={data.publisher} date={data.published_at} inquire={data.inquire} team={data.team} />;
      })}
    </>
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <Layout>
      <div className="container w-full pt-[150px] text-gray-900 py-2 space-x-4 flex-1 flex flex-col justify-center items-center">
        <div className="text-gray-900 bg-white text-4xl text-left pl-2 font-bold  mb-6 w-full">게시판</div>
        <div className="grid grid-cols-5 lg:grid-rows-2 grid-rows-1 w-full mb-3 border border-gray-400">
          <div className="lg:col-start-1 lg:row-start-1 lg:col-span-2 text-gray-900 bg-white lg:flex lg:items-center hidden">
            <div className="grid grid-cols-8 w-full h-full border-b border-gray-400">
              <div className="col-start-1 h-full flex justify-center items-center border-r border-gray-400 font-bold bg-gray-200">카테고리</div>
              <div className="px-2 col-span-7 flex justify-center items-center">
                <select className="bg-white border border-gray-400 w-full py-2 font-bold">
                  <option>카테고리</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="lg:col-start-3 md:col-start-1 md:row-start-1 lg:col-span-3 md:col-span-2 text-gray-900 bg-white md:flex md:items-center hidden">
            <div className="grid lg:grid-cols-12 grid-cols-8 h-full w-full lg:border-b border-b-0 border-gray-400">
              <div className="flex items-center justify-center font-bold lg:border-x border-r border-gray-400 h-full bg-gray-200 col-span-1"> 작성일 </div>
              <div className="lg:col-span-10 col-span-7 w-full flex items-center px-2">
                <div className="w-full grid grid-cols-11 ">
                  <div className="col-span-5 flex items-center">
                    <DatePicker
                      customInput={<ExampleCustomInput />}
                      dateFormat="yyyy년 MM월 dd일"
                      renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
                        <div>
                          <button
                            aria-label="Previous Month"
                            className={'react-datepicker__navigation react-datepicker__navigation--previous'}
                            style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
                            onClick={decreaseMonth}
                          >
                            <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'}>{'<'}</span>
                          </button>
                          <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString('ko', {
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                          <button
                            aria-label="Next Month"
                            className={'react-datepicker__navigation react-datepicker__navigation--next'}
                            style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
                            onClick={increaseMonth}
                          >
                            <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'}>{'>'}</span>
                          </button>
                        </div>
                      )}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      monthsShown={2}
                    />
                  </div>
                  <div className="col-span-1 lg:text-3xl text-xl flex justify-center items-center">~</div>
                  <div className="col-span-5 flex items-center">
                    <DatePicker
                      customInput={<ExampleCustomInput />}
                      dateFormat="yyyy년 MM월 dd일"
                      renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
                        <div>
                          <button
                            aria-label="Previous Month"
                            className={'react-datepicker__navigation react-datepicker__navigation--previous'}
                            style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
                            onClick={decreaseMonth}
                          >
                            <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'}>{'<'}</span>
                          </button>
                          <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString('ko', {
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                          <button
                            aria-label="Next Month"
                            className={'react-datepicker__navigation react-datepicker__navigation--next'}
                            style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
                            onClick={increaseMonth}
                          >
                            <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'}>{'>'}</span>
                          </button>
                        </div>
                      )}
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      monthsShown={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-1 lg:row-start-2 lg:col-span-1 text-gray-900 bg-white lg:flex lg:justify-center xl:text-md items-center px-2 gap-5 font-bold hidden">
            <input type="radio" value="1" />
            <label>1</label>
            <input type="radio" value="2" />
            <label>2</label>
            <input type="radio" value="3" />
            <label>3</label>
          </div>
          <div className="lg:col-start-2 lg:row-start-2 md:col-start-3 md:row-start-1 md:col-span-1 md:flex text-gray-900 w-full hidden">
            <div className="grid grid-cols-4 w-full">
              <div className="h-full flex justify-center items-center border-x border-gray-400 font-bold bg-gray-200 col-start-1">작성자</div>
              <div className="flex justify-center items-center col-span-3 border-r border-gray-400 p-2">
                <input type="text" className="bg-white border border-gray-400 p-2 w-full h-full " maxLength={5} />
              </div>
            </div>
          </div>
          <div className="lg:col-start-3 lg:row-start-2 lg:col-span-3 md:col-start-4 col-start-1 row-start-1 md:col-span-2 col-span-5 flex text-gray-900 w-full">
            <div className="grid grid-cols-12 w-full">
              <div className="h-full flex justify-center items-center border-r border-gray-400 font-bold bg-gray-200 col-start-1">제목</div>
              <div className="flex justify-center items-center col-span-11 p-2">
                <input
                  {...register('title', { required: '제목을 입력해주세요.', minLength: { message: '2글자 이상으로 검색해주세요.', value: 2 } })}
                  type="text"
                  className="bg-white border border-gray-400 p-2 w-full h-full "
                  maxLength={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full mb-3">
          <div className=" flex justify-end items-center text-gray-900">
            <select className="bg-white border border-gray-400 px-16 py-2 font-bold">
              <option>리스트 보기</option>
              <option>5개로 보기</option>
              <option>10개로 보기</option>
              <option>15개로 보기</option>
              <option>20개로 보기</option>
            </select>
          </div>
          <div className=" flex justify-end items-center">
            {/* <Link href="/main"> */}
            <input type="submit" value="검색" className="bg-gray-800 text-white px-16 py-3 cursor-pointer" />
            {/* </Link> */}
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-12 border-t-2 border-b border-black font-bold bg-gray-200 py-3 w-full">
            <div className="col-start-1 col-span-1 text-center">번호</div>
            <div className="col-start-2 col-span-6">제목</div>
            <div className="col-start-8 col-span-1 text-center hidden md:block">팀명</div>
            <div className="col-start-9 col-span-1 text-center">작성자</div>
            <div className="col-start-10 col-span-2 text-center">작성일</div>
            <div className="col-start-12 col-span-1 text-center">조회수</div>
          </div>
          <PostList />
          <div className="w-full flex relative mt-5">
            <Pagination postPerPage={postPerPage} totalPosts={notice_data.length} paginate={paginate} currentPage={currentPage} />
            <div className="absolute right-0 flex h-full gap-3">
              <button
                onClick={() => {
                  window.open('/writepopup', '글쓰기', 'top=10,left=10,width=500,height=600,status=no,menubar=no,toolbar=no,resizable=no');
                }}
                className="px-5 bg-white text-gray-900 border border-black h-3/4 rounded-md hidden lg:block"
              >
                글쓰기1
              </button>
              <Link href="/writescreen">
                <button className="px-5 bg-white text-gray-900 border border-black h-3/4 rounded-md hidden lg:block">글쓰기2</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default main;

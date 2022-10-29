export default function WritePopup() {
  return (
    <div className="container w-full text-gray-900 p-12 space-x-4 flex-1 flex flex-col">
      <div className="grid grid-cols-10 grid-rows-12 w-full">
        <div className="col-start-1 row-start-1 row-span-1 font-bold text-md flex justify-center items-center py-3 border-t">작성자</div>
        <div className="col-start-2 row-start-1 col-span-9 pl-3 py-3 border-t">
          <input type="text" className="p-1 border border-gray-300 w-1/3" maxLength={5} />
        </div>
        <div className="col-start-1 row-start-2 row-span-1 font-bold text-md flex justify-center items-center py-3 border-t">팀</div>
        <div className="col-start-2 row-start-2 col-span-9 pl-3 py-3 border-t">
          <select className="bg-white text-black w-1/2 border border-gray-300 py-1.5 pl-2 col-span-1">
            <option>팀</option>
            <option>사업전략팀</option>
            <option>마케팅팀</option>
            <option>게임개발팀</option>
            <option>서비스개발팀</option>
            <option>테크비즈팀</option>
          </select>
        </div>
        <div className="col-start-1 row-start-3 row-span-1 font-bold text-md flex justify-center items-center py-3 border-t">제목</div>
        <div className="col-start-2 row-start-3 col-span-9 pl-3 py-3 border-t">
          <input type="text" className="p-1 border border-gray-300 w-full" maxLength={20} />
        </div>
        <div className="col-start-1 row-start-4 row-span-4 font-bold text-md flex justify-center items-center py-3 border-t">내용</div>
        <div className="col-start-2 row-start-4 col-span-9 row-span-4 pl-3 py-3 border-t ">
          <textarea name="thetext" rows={10} className="border border-gray-300 p-1 w-full" maxLength={2000} />
        </div>
        <div className="col-start-1 row-start-8 row-span-1 font-bold text-md flex justify-center items-center py-3 border-y">파일</div>
        <div className="col-start-2 row-start-8 col-span-9 row-span-4 pl-3 py-2 border-y">
          <input type="file" className=" w-full h-full" maxLength={10} multiple />
        </div>
        <div className="col-start-10 row-start-8 row-span-1 font-bold text-md flex justify-center items-center py-3">
          <input type="submit" value="저장" className="px-7 py-2 bg-black text-white rounded-md w-full cursor-pointer flex justify-center" />
        </div>
      </div>
    </div>
  );
}
// 작성자 제목 팀 내용 파일첨부

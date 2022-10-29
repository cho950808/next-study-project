import Header from '../../component/layout/Header';
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <>
      <Header />
      <div className="container w-full pt-[150px] text-gray-900 py-2 space-x-4 flex-1 flex flex-col justify-center items-center">
        <div className="text-gray-900 bg-white text-4xl text-left pl-2 font-bold  mb-9 w-full">제목 {id}</div>
        <div></div>
      </div>
    </>
  );
}

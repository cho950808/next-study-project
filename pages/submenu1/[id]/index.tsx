import Header from '../../component/layout/Header';
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center">현재 Submenu1-{id}페이지입니다.</div>
    </>
  );
}

import Link from 'next/link';

export default (props) => (
  <div className={`grid grid-cols-12 text-gray-900 py-1.5 even:bg-gray-50 odd:bg-white border-b border-gray-300`}>
    <div className="col-start-1 col-span-1 text-center">{props.id}</div>
    <div className="col-start-2 col-span-6 ">
      <Link href={`/post/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </div>
    <div className="col-start-8 col-span-1 text-center hidden md:block ">{props.team}</div>
    <div className="col-start-9 col-span-1 text-center ">{props.publisher}</div>
    <div className="col-start-10 col-span-2 text-center ">{props.date}</div>
    <div className="col-start-12 col-span-1 text-center ">{props.inquire}</div>
  </div>
);

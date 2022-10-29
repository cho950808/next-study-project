import Link from 'next/link';
import { useState, useEffect } from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

  const getLastPageIndex = function (totalNumberOfItems, pageSize) {
    return Math.floor((totalNumberOfItems + pageSize - 1) / pageSize) - 1;
  };
  const getPageIndexOptions = function (totalNumberOfItems, maxNumberOfOptions, pageSize, pageIndex) {
    const options = [];
    const pivot = Math.ceil(maxNumberOfOptions / 2);
    const lastPageIndex = getLastPageIndex(totalNumberOfItems, pageSize);

    if (lastPageIndex <= maxNumberOfOptions) {
      while (options.length < lastPageIndex) options.push(options.length + 1);
    } else if (pageIndex < pivot) {
      while (options.length < maxNumberOfOptions) options.push(options.length + 1);
    } else if (pageIndex > lastPageIndex - pivot) {
      while (options.length < maxNumberOfOptions) options.unshift(lastPageIndex - options.length + 1);
    } else {
      for (var i = pageIndex - (pivot - 1); options.length < maxNumberOfOptions; i++) {
        options.push(i + 1);
      }
    }

    return options;
  };
  useEffect(() => {
    setPageNumbers(getPageIndexOptions(totalPosts, 5, 20, currentPage));
  }, [currentPage]);
  return (
    <nav className="w-full text-gray-900">
      <ul className="flex justify-center">
        <li>
          <button onClick={() => paginate(1)} className="p-5">
            &laquo;
          </button>
        </li>
        <li>
          <button onClick={() => paginate(currentPage - 1)} className="p-5" disabled={currentPage == 1}>
            &lt;
          </button>
        </li>
        {pageNumbers.map((num) => (
          <li key={num}>
            <button onClick={() => paginate(num)} className={`px-8 py-5 ${currentPage == num ? 'text-white bg-black' : 'text-gray-900 bg-white'}`}>
              {num}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => paginate(currentPage + 1)} className="p-5" disabled={currentPage == Math.ceil(totalPosts / postPerPage)}>
            &gt;
          </button>
        </li>
        <li>
          <button onClick={() => paginate(Math.ceil(totalPosts / postPerPage))} className="p-5">
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;

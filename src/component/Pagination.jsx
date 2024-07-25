import { ChevronLeftIcon, ChevronRightIcon, DivideIcon } from '@heroicons/react/20/solid';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => (e) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <div className=' flex items-center justify-center mt-4'>
      <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
        <a
          href="#"
          className={`relative bg-blue-950 hover:bg-indigo-950 text-white duration-300 inline-flex items-center rounded-l-md px-2 py-2 ${currentPage === 1 ? 'text-gray-400 pointer-events-none' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
            }`}
          onClick={handlePageChange(currentPage - 1)}
        >
          Previous
          <span className="sr-only">Previous</span>
        </a>

        <a
          href="#"
          className={` bg-blue-950 hover:bg-indigo-950 text-white duration-300 relative inline-flex items-center rounded-r-md px-2 py-2 ${currentPage === totalPages ? 'text-gray-400 pointer-events-none' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
            }`}
          onClick={handlePageChange(currentPage + 1)}
        >
          Next
          <span className="sr-only">Next</span>
        </a>
      </nav>
    </div>

  );
};

export default Pagination;

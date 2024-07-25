
import { useState, useEffect } from "react";
import RetreatItemCard from "./RetreatItemCard";
import Loading from "./LoadingIndicator";
import Pagination from "./Pagination";
import Select from "react-select";

const RetreatList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [yearRange, setYearRange] = useState("");
  const [filterByTag, setFilterByTag] = useState("");


  const options = [
    {
      "value": "Filter by Date",
      "label": "Filter by Date"
    },
    {
      "value": "2023-2024",
      "label": "2023-2024"
    },
    {
      "value": "2024-2025",
      "label": "2024-2025"
    },

  ];


  const typeOptions = [
    {
      "value": "Filter by type",
      "label": "Filter by type"
    },
    {
      "value": "yoga",
      "label": "Yoga"
    },
    {
      "value": "meditation",
      "label": "Meditation"
    },
    {
      "value": "detox",
      "label": "Detox"
    }
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

        const response = await fetch(apiUrl);
        const data = await response.json();


        const transformedData = data.map(e => ({
          ...e,
          date: new Date(e.date * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }));

        setProducts(transformedData);

        setFilteredProducts(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset pagination to first page when search query changes
  };

  // Handle  year  change data
  const handleYearRangeChange = (selectedOption) => {
    setYearRange(selectedOption.value);

    if (selectedOption.value === "Filter by Date") {
      setFilteredProducts(products);
    } else {
      const [startYear, endYear] = selectedOption.value.split("-").map(Number);
      const filteredByYearRange = products.filter((product) => {
        const productYear = new Date(product.date).getFullYear();
        return productYear >= startYear && productYear < endYear;
      });

      setFilteredProducts(filteredByYearRange);
    }

    setCurrentPage(1);
  };

  // Handle tag change data
  const handleTagChange = (selectedOption) => {
    setFilterByTag(selectedOption.value);

    if (selectedOption.value === "Filter by type") {
      setFilteredProducts(products);
    } else {
      const filteredByTag = products.filter((product) => {
        return product.tag.includes(selectedOption.value);
      });

      setFilteredProducts(filteredByTag);
    }

    setCurrentPage(1);
  };


  return (
    <div>
      <div className="sm:w-[95%] m-auto flex flex-col sm:flex-row justify-between mt-4">
        <div className="flex flex-col sm:flex-row">

          <Select
            className="m-4 "
            classNamePrefix='react-select'
            options={options}
            onChange={handleYearRangeChange}
            value={options.find(option => option.value === yearRange)}
            placeholder="Filter by Date"
            components={{ IndicatorSeparator: () => null }}
          />
          <Select
            className="m-4"
            classNamePrefix='react-select'
            options={typeOptions}
            onChange={handleTagChange}
            value={typeOptions.find(option => option.value === filterByTag)}
            placeholder="Filter by Type"
            components={{ IndicatorSeparator: () => null }}
          />


        </div>
        {/* Search input */}
        <div className="flex mt-4 sm:mt-0">
          <input
            className=" text-black bg-gray-100 cursor-pointer sm:bg-blue-950 sm:border-none rounded-md w-[93%]  m-auto sm:text-white px-5 py-1.5"
            placeholder="Search Result by Title"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentItems.map((product) => (
              <RetreatItemCard key={product.id} item={product} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
            onPageChange={paginate}
          />
        </>
      )}
    </div>
  );
};

export default RetreatList;

import React, { useState, useEffect } from 'react';
import { Admincard } from './admincard';
import { DataTem } from "../champ/dataTem";

const imagesPerPage = 6;

export const Adminsell = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await DataTem();
        console.log('Products:', products); // Log the products
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {Array.isArray(products) && products.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-8 my-20 md:my-20 md:mx-0 lg:mx-24">
            {products
              .slice(indexOfFirstImage, indexOfLastImage)
              .map((product, index) => (
                <Admincard key={index} product={product} />
              ))}
          </div>
          <div className="flex justify-center">
            <div className="text-2xl mb-12 flex">
              <button
                onClick={() => handleClick(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
              >
                ◀️
              </button>
              <div>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className={currentPage === number ? 'font-bold' : ''}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  handleClick(Math.min(currentPage + 1, pageNumbers.length))
                }
                disabled={currentPage === pageNumbers.length}
              >
                ▶️
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center my-20 text-xl">No Results</div>
      )}
    </>
  );
};

export default Adminsell;

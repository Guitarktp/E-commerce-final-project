import { useRef, useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import leftArrow from "../../assets/Logo/logo_product_card/left_slide.png";
import rightArrow from "../../assets/Logo/logo_product_card/right_slide.png";
import { carNew } from "../API/API_Cars"; //แก้

const scrollContainerStyles = {
  scrollbarWidth: "none",
};

function ScrollNew() {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [products, setProducts] = useState([]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1152, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1152, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const Active = async () => {
    const API = await carNew(); //เปลี่ยนตาม API ที่ใช้ และ เปลี่ยน parameterขึ้นกับว่า inputเป็นแบบไหน // แก้
    if (typeof API !== "string") {
      setProducts(API);
    }
    console.log(API);
  };

  useEffect(() => {
    Active();
  }, []);

  useEffect(() => {
    handleScroll(); // Ensure we check the scroll position when products are loaded
  }, [products]);

  return (
    <section>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-6 mt-8"> รถเข้าใหม่</h1>
        <div className="relative w-[1128px] mx-auto">
          {!isAtStart && (
            <img
              src={leftArrow}
              alt="Scroll Left"
              onClick={scrollLeft}
              className="absolute left-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full shadow-md hover:scale-110 duration-200"
            />
          )}
          <div
            className="flex w-full overflow-x-auto whitespace-nowrap rounded gap-[24px] "
            ref={scrollRef}
            style={scrollContainerStyles}
          >
            {products &&
              products.map((product) => (
                <div key={product.id} className="">
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
          {!isAtEnd && (
            <img
              src={rightArrow}
              alt="Scroll Right"
              onClick={scrollRight}
              className="absolute right-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full shadow-md hover:scale-110 duration-200" 
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ScrollNew;

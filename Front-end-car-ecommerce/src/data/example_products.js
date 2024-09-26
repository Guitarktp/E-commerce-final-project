import { carBuy } from "../components/API/API_Cars";

const example_products = async () => {
  try {
    const API = await carBuy(); // Fetch products from API 
    // const products = API.map(product => ({
    //   ...product,
     
    //   // mile: product.mileage,
    //   // imageMain:product.file1,
    //   // // image1:file1,
    //   // // image2:file2,
    //   // // image3:file3,
    //   // // image4:file4,
    //   // // image5:file5,
    //   // name:product.brand,
    //   // location:product.address,
    //   // id:product._id
    // }));

    return API;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return empty array on error
  }
};

export default example_products;

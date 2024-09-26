import { useState } from 'react';
import { carNew, onSearchCar } from '../components/API/API_Cars';

const TestApi = () => {
  const [Data, setData] = useState([]);
  const carId = '6688dbf25caf2cd3b6c05eee';
  const [searchValue, setSearchValue] = useState("");

  const Active = async () => {
    const API = await getCarById(carId);//เปลี่ยนตาม API ที่ใช้ และ เปลี่ยน parameterขึ้นกับว่า inputเป็นแบบไหน
    setData(API);
  };

  
  const fetchData = async () => {
    try {
      const API = await carNew(); // Assuming this fetches an array
      setData(API);
      console.log(API);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const result = await onSearchCar(searchValue);
        setData(result);
      console.log(result);
    } catch (error) {
      console.error('Error searching for cars:', error);
    }
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setData([]);
  };

  return (
    <div className="h-96">
      <button
        className='border border-indigo-500 rounded-lg p-5 m-5'
        onClick={fetchData}
      >
        Click me
      </button>
      <div style={{ whiteSpace: 'pre-wrap' }} className='bg-lime-200 p-20'>
        {JSON.stringify(data, null, 2)}
      </div>

      <div className='bg-blue-300 p-20'>
        {Array.isArray(data) && data.map((car, index) => (
          <div key={index}>
            {/* <img src={car.file1} alt={`Car ${index}`} /> */}
          </div>
        ))}
        {/* {Data.file1 && (
          <div>
            <img src={Data.file1} alt="Car" />
          </div>
        )} */}
        <div>{Data.headline}</div>
      </div>

      <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="w-full text-xs bg-transparent py-[11px] outline-none"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {searchValue && (
          <span
            className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
            onClick={handleClearSearch}
          >
            🤯
          </span>
        )}

        <span
          className="text-slate-400 cursor-pointer hover:text-black"
          onClick={handleSearch}
        >
          🔍
        </span>
      </div>
    </div>
  );
};


// ใช้เทสใส่ id ใน url

// const TestApi = () => {
//   const { id } = useParams(); // รับ carId จาก URL 
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetchCarData(id);
//     }
//   }, [id]);

//   const fetchCarData = async (carId) => {
//     const carData = await getCarById(carId);
//     setData(carData);
//   };

//   return (
//     <div className="h-96">
//       <div style={{ whiteSpace: 'pre-wrap' }} className="bg-lime-200 p-20">
//         {JSON.stringify(data, null, 2)}
//       </div>
//       {data && (
//         <div className="bg-blue-300 p-20">
          
//           <div>Headline: {data.headline}</div>
//           <div>Brand: {data.brand}</div>
//           <div>Model: {data.model}</div>
//           <div>Type: {data.type}</div>
//           <div>Year: {data.year}</div>
//           <div>Mileage: {data.mileage}</div>
//           <div>Color: {data.color}</div>
//           <div>Fuel: {data.fuel}</div>
//           <div>Engine Capacity: {data.enginecap}</div>
//           <div>Cushion: {data.cushion}</div>
//           <div>Seat: {data.seat}</div>
//           <div>Gear: {data.gear}</div>
//           <div>Price: {data.price}</div>
//           <div>Phone Number: {data.pnumber}</div>
//           <div>Address: {data.address}</div>
//           <div>Additional Info: {data.additionalInfo}</div>
//           {data.file2 && <img src={data.file2} alt="Car" />}
//           {data.file3 && <img src={data.file3} alt="Car" />}
//           {data.file4 && <img src={data.file4} alt="Car" />}
//           {data.file5 && <img src={data.file5} alt="Car" />}
//           {data.file6 && <img src={data.file6} alt="Car" />}
//         </div>
//       )}
//     </div>
//   );
// };

export default TestApi;
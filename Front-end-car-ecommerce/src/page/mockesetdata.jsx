import React from "react";
import SellAdmin from "./sellAdmin";
import { Link } from "react-router-dom";

function mockesetdata() {

  let data = {
    headline: "Tresssssss",
    brand: "Honda",
    model: "Civic",
    type: "Sedan",
    year: 2020,
    mileage: 15000,
    color: "White",
    fuel: "Petrol",
    enginecap: "1.8",
    cushion: "Leather",
    seat: "5",
    gear: "Automatic",
    price: 450000,
    pnumber: "0812345678",
    address: "123 Main St, Bangkok, Thailand",
    additionalInfo: "One owner, full service history, accident-free",
    latitude: "13.7563",
    longitude: "100.5018",
    Seller_User: "66902ce48d6d51e16599f158",
    file1:
      "https://res.cloudinary.com/di8f9idgx/image/upload/v1720244966/ixuhxjluzscejal7v5tb.webp",
    file2:
      "https://res.cloudinary.com/dyrs3bvzj/image/upload/v1720509869/dtmz63wx3azouk9blwu2.jpg",
    file3:
      "https://res.cloudinary.com/dyrs3bvzj/image/upload/v1720508953/mccd8mnzk5qdbo3oldql.jpg",
    file4:
      "https://res.cloudinary.com/dyrs3bvzj/image/upload/v1720508911/y56xqjutspoh7g2uauj4.jpg",
    file5:
      "https://res.cloudinary.com/dyrs3bvzj/image/upload/v1720507943/f0v9ydnqxel035anopfb.jpg",
    file6:
      "https://res.cloudinary.com/dyrs3bvzj/image/upload/v1720494504/cld-sample.jpg",
  };
  return (
    <div>
      Hello world <br />
      <Link to="/adminSell" state={data}>
        <h2>admin sell page</h2> <br />
      </Link>
      <Link to="/Checkout" state={data}>
        <h2>Checkout page</h2> <br />
      </Link>
    </div>
  );
}

export default mockesetdata;

// to={{ pathname: '/other', state: dataToPass }}

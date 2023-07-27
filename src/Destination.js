import React from 'react';
import { Card } from 'react-bootstrap';
import './Destination.css';

const Destination = () => {
  // Data for tourist places
  const touristPlaces = [
    {
      name: "New York City",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      details: "New York City is a major global city and the most populous city in the United States...",
      price: "$2000",
    },
    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      details: "Paris is the capital city of France and is known for its art, fashion, and culture...",
      price: "$1800",
    },
    {
      name: "Tokyo",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      details: "Tokyo is the capital and largest city of Japan, known for its modern technology...",
      price: "$2200",
    },
    {
      name: "Rome",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      details: "Rome is the capital city of Italy and has a rich history and ancient landmarks...",
      price: "$1900",
    },
    {
      name: "Cape Town",
      image: "https://images.unsplash.com/photo-1612860606900-25b4b0bc79ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZSUyMHRvd24lMjBzb3V0aCUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      details: "Cape Town is a coastal city in South Africa known for its stunning landscapes...",
      price: "$2500",
    },
    {
      name: "Sydney",
      image: "https://images.unsplash.com/photo-1590716209211-ea74d5f63573",
      details: "Sydney is the largest city in Australia and is famous for its iconic Sydney Opera House...",
      price: "$2300",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {touristPlaces.map((place, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={place.image} />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>{place.details}</Card.Text>
                <div className="price">Price: {place.price}</div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;

import React from 'react';

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  description: string;
};

export default function ProductCard({ image, name, price, description }: ProductCardProps) {
  return (
    <div className="border rounded shadow p-4 max-w-xs">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-blue-700 font-bold mb-1">{price}</p>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
} 
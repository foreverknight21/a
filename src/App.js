import React from "react";

const menu = [
  { name: "Serpme Kahvaltı", price: "₺960" },
  { name: "Ev Kahvaltısı", price: "₺370" },
  { name: "Mercimek Çorbası", price: "₺155" },
  { name: "Izgara Tavuk", price: "₺395" },
  { name: "Dana Tandır", price: "₺575" },
  { name: "Sufle", price: "₺215" },
  { name: "Cheesecake", price: "₺215" },
  { name: "Filtre Kahve", price: "₺125" },
  { name: "Demleme Çay", price: "₺50" }
];

export default function DigitalMenu() {
  return (
    <div className="min-h-screen bg-white p-6 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8">Lume Menü</h1>
      <ul className="max-w-xl mx-auto space-y-4">
        {menu.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="text-lg font-medium">{item.name}</span>
            <span className="text-lg font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

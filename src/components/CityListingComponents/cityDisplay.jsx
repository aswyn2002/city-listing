function CityDisplay({ cities }) {
  return (
    <ul className="mt-4 space-y-2">
      {cities.map((city, index) => (
        <li key={index} className="flex items-center ml-10 ">
          <span className="mr-2 text-xl">•</span>
          <span className=" bg-[#c8d3de] font-semibold rounded-md p-2 w-full">{city}</span>
        </li>
      ))}
    </ul>
  );
}

export default CityDisplay;

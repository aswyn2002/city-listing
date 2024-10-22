function CityForm({ city, setCity, handleAddCity }) {
  return (
    <form onSubmit={handleAddCity} className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-[#487190] rounded-md w-80 focus:outline-none bg-white placeholder-gray-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#487190] text-white rounded-md hover:bg-light-blue-400 transition-colors"
      >
        Add City
      </button>
    </form>
  );
}

export default CityForm;

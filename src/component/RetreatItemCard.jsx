
const RetreatItemCard = ({ item }) => {

  return (
    <div className="bg-custom-rgb p-5	 hover:bg-gray-200 cursor-pointer rounded overflow-hidden shadow-lg m-4">
      <div className='hover:scale-110 duration-500 '>
        <img className="w-[100%]  h-48 m-auto rounded-sm" src={item.image} alt={item.title} />

      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
        <p className="text-gray-700">Date: {item.date}</p>
        <p className="text-gray-700">Location: {item.location}</p>
        <p className="text-gray-700">Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default RetreatItemCard;

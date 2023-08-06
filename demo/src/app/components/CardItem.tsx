const CardItem = ({ header, type }: any) => {
  const cardItemData = [
    {
      id: 1,
      type: 1,
      title: "15 Coins",
      content: "50% discount for every $100 top-up on your Shell Petrol Card",
      img: "/icons/img11.png",
    },
    {
      id: 2,
      type: 1,
      title: "1,000 Coins",
      content: "70% discount top-up on your Shell Petrol Card",
      img: "/icons/img12.png",
    },
    {
      id: 3,
      type: 2,
      title: "20 Coins",
      content: "Get $20 Rental rebate",
      img: "/icons/img21.png",
    },
    {
      id: 4,
      type: 2,
      title: "15 Coins",
      content: "Get $500 Rental rebate",
      img: "/icons/img22.png",
    },
    {
      id: 5,
      type: 3,
      title: "25 Coins",
      content: "NTUC Fairprice $50 Voucher",
      img: "/icons/img31.png",
    },
    {
      id: 6,
      type: 3,
      title: "5 Coins",
      content: "Free Cold Stone Sundae at any flavour!",
      img: "/icons/img32.png",
    },
  ];
  const filteredCards = cardItemData.filter((card) => card.type === type);
  return (
    <div className="mt-8">
      <p className="text-2xl px-4 text-black font-semibold">{header}</p>

      <div className="mt-3 overflow-x-auto">
        <div className="flex flex-nowrap">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="w-56 bg-white shadow-md rounded-lg my-4 mx-4">
              <div className="bg-white h-40 w-full flex items-center justify-center">
                <img
                  src={card.img}
                  alt="Card Header"
                  className="w-full h-full object-cover rounded-t-lg object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-blue-700">
                  {card.title}
                </h2>
                <p className="text-gray-400">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;

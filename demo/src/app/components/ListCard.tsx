import CardItem from "./CardItem";

const ListCard = () => {
  const cardData = [
    {
      id: 11,
      header: "Petrol",
      type: 1,
    },
    {
      id: 12,
      header: "Rental Rebate",
      type: 2,
    },
    {
      id: 13,
      header: "Food and Beverage",
      type: 3,
    },
  ];

  return (
    <div className="py-2 mb-28 overflow-hidden">
      {cardData.map((card) => (
        <CardItem key={card.id} header={card.header} type={card.type} />
      ))}
    </div>
  );
};

export default ListCard;

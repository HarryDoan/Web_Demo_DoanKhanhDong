const BottomTab = () => {
  const items = [
    {
      id: 1,
      icon: "/icons/home.png",
      title: "Item 1",
    },
    {
      id: 2,
      icon: "/icons/bell.png",
      title: "Item 2",
    },
    {
      id: 3,
      icon: "/icons/wallet.png",
      title: "Item 3",
    },
    {
      id: 4,
      icon: "/icons/profile.png",
      title: "Item 4",
    },
  ];

  return (
    <div className=" border-t-stone-300 border-t-2 fixed bottom-0 w-screen bg-white pt-4 flex justify-around">
      {items.map((item) => (
        <a key={item.id} className="text-white flex flex-col items-center">
          {item?.id === 2 && (
            <span className="absolute ml-4 bg-red-400 w-3 h-3 rounded-full text-red-500 " />
          )}
          <img src={item.icon} alt={item.title} className="w-8 h-8" />

          <span className="mt-1">{item.title}</span>
        </a>
      ))}
    </div>
  );
};

export default BottomTab;

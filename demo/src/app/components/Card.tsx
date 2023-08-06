import LevelBar from "./LevelBar";

const Card = () => {
  const currentLevel = 65;

  return (
    <div className="mt-8 card p-4 py-5 bg-white rounded-lg shadow-md card-background">
      <div className="">
        <p className="text-xs font-semibold mb-2 text-gray-400">
          Available Coin balance
        </p>
        <p className="text-4xl text-black">340</p>
      </div>

      <LevelBar level={currentLevel} />

      <div className="mt-5">
        <p className="text-gray-600 text-base">
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </p>

        <div className="flex mt-4">
          <p className="text-blue-700 text-base">View tier benefits</p>
          <img src="icons/ic_arrow_right.png" alt="View tier benefits" />
        </div>
      </div>

      <button className="w-full p-2 mt-6 flex items-center justify-center rounded-md bg-black text-white border-none outline-none focus:ring-0">
        <span>My Coupons</span>
      </button>

      <p className="mt-4 text-center text-gray-400 text-sm">
        Updated: 02/11/2021
      </p>
    </div>
  );
};

export default Card;

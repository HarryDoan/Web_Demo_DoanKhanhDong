import BottomTab from "./components/BottomTab";
import Card from "./components/Card";
import Header from "./components/Header";
import ListCard from "./components/ListCard";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="p-4 bg-slate-900 flex flex-col">
        <p className="font-semibold leading-10 text-3xl text-white">
          Silver Tier
        </p>
        <p className="mt-2 mb-40 text-gray-300 text-base">
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards
        </p>
      </div>

      <div className="">
        <div className="absolute top-44  sm:left-1/3">
          <div className="p-4">
            <Card />
          </div>
        </div>
        <div className="absolute top-2/3  sm:left-1/3">
          <ListCard />
        </div>
      </div>

      <BottomTab />
    </div>
  );
}

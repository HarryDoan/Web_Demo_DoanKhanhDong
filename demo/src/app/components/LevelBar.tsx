type LevelTypes = {
  level: number;
};
const LevelBar = ({ level }: LevelTypes) => {
  return (
    <div className="mt-4 w-full h-2 bg-gray-300 rounded-lg overflow-hidden">
      <div className="h-full bg-blue-600" style={{ width: `${level}%` }}></div>
    </div>
  );
};

export default LevelBar;

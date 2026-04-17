
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { MyFriendContext } from "./Component/Context";

const Yet = () => {
  const { timelineFriends } = useContext(MyFriendContext);

  // 🔥 Step 1: Handle empty state (important UX)
  if (!timelineFriends || timelineFriends.length === 0) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen flex items-center justify-center text-gray-500">
        No analytics data yet
      </div>
    );
  }

  // 🔥 Step 2: Count actions dynamically
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timelineFriends.forEach((item) => {
    if (counts[item.action] !== undefined) {
      counts[item.action]++;
    }
  });

  // 🔥 Step 3: Convert to chart data
  const data = [
    { name: "Call", value: counts.Call, fill: "#0088FE" },
    { name: "Text", value: counts.Text, fill: "#00C49F" },
    { name: "Video", value: counts.Video, fill: "#FFBB28" },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-10 flex justify-center">
      <div className="w-full max-w-4xl m-auto">
        
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Friendship Analytics
        </h2>

        {/* CARD */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <p className="text-sm text-gray-500 mb-6">
            By Interaction Type
          </p>

          <div className="flex justify-center">
            <PieChart width={320} height={320}>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Yet;
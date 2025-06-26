import Button from "../components/Button";
import SpotTopBar from "../components/SpotTopBar";
import SpotChart from "../components/SpotChart";
import SpotChartSideCard from "../components/SpotChartSideCard";
import BuySellCard from "../components/BuySellCard";

export default function Spot() {
  return (
    <div className="flex overflow-clip mx-4">
      <div className="flex-1 mr-2 flex flex-col gap-2 ">
        <SpotTopBar />

        <div className="flex gap-2">
          <div className="flex-1 bg-darker  rounded-lg pb-2  min-w-190">
            <Button
              type="button"
              text="Chart"
              className={`bg-dark text-white py-2 px-4 m-4`}
            />
            <div className="min-w-190 w-full h-130  overflow-y-clip mb-4 px-4 ">
              <SpotChart />
            </div>
          </div>

          <SpotChartSideCard />
        </div>
      </div>
      <BuySellCard />
    </div>
  );
}

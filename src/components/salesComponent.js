import StaticsCard from "./StaticsCard";

export default function SalesComponent({data, weeklyData, yearlyData}) {
    const weeklyChartData = [];
    const yearlyChartData = [];
    let orders = 0;
    let total = 0;

    if (weeklyData) {
        Object.keys(weeklyData).map((key) => {
            orders += weeklyData[key].orders;
            total += weeklyData[key].total;
            weeklyChartData.push({date: key, total: weeklyData[key].total})
        })
    }
    if (yearlyData) {
        Object.keys(yearlyData).map(function (key) {
            yearlyChartData.push({date: key, total: yearlyData[key].total});
        })
    }

    const salesToday = weeklyData && weeklyData[1].orders;
    const totalSalesToday = weeklyData && weeklyData[1].total;
    const weekSalesNumber = orders;
    const weekSalesTotal = total;
    const monthSalesNumber = data && data.sales_over_time_year[1].orders;
    const monthsSalesTotal = data && data.sales_over_time_year[1].total;


    return (
        <div className="grid grid-cols lg:grid-cols-3 gap-4 pt-8">
            <StaticsCard name="Today" number={salesToday} total={totalSalesToday}/>
            <StaticsCard item name="Last Week" number={weekSalesNumber} total={weekSalesTotal}/>
            <StaticsCard item name="Last Month" number={monthSalesNumber} total={monthsSalesTotal}/>
        </div>
    )
}
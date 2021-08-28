import React from 'react';
import Layout from "../../components/Layout/Layout";
import RevenewCharts from "../../components/RevenewCharts";
import SalesComponent from "../../components/salesComponent";
import BestSellersComponent from "../../components/BestSellersComponent";


export default function DashboardPage({user, data}) {
    const weeklyData = data && data.sales_over_time_week ? data.sales_over_time_week : [];
    const yearlyData = data && data.sales_over_time_year ? data.sales_over_time_year : [];
    const bestSellers = data && data.bestsellers.length > 2 ? data.bestsellers.slice(0, 3) : data.bestsellers;

    return (
        <Layout>
            <h2 className="font-bold pt-6 "> Dashboard</h2>
           <SalesComponent data={data} weeklyData={weeklyData} yearlyData={yearlyData}/>
            <RevenewCharts weeklyData={weeklyData} yearlyData={yearlyData}/>
            <BestSellersComponent topSellers={bestSellers}/>

        </Layout>
    )
}



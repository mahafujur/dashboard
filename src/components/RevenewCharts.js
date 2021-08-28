import * as React from 'react';
import {Bar} from 'react-chartjs-2';
import Toggle from "react-toggle";
import {useEffect, useState} from "react";

const dashboardStyle = {
    chartTitleSection: `flex items-center justify-between py-8 w-full`
}
const barColor1 = 'orange'
const barColor2 = 'purple'
const week = ['today', 'yesterday', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7'];
const month = ['this month', 'last month', 'month 3', 'month  4', 'month  5', 'month  6', 'month  7', 'month  8', 'month  9', 'month 10', 'month  11', 'month  12'];

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};


export default function RevenewCharts({weeklyData: weeklyRevenue, yearlyData: yearlyRevenue}) {

    const [toggle, setToggle] = useState(false)
    const [weeklySell, setWeeklySell] = useState([])
    const [yearlySell, setYearlySell] = useState([])

    useEffect(() => {
        if (weeklyRevenue) {
            let labels = [], weeklySalesData = [], backgroundColor = []
            for (let i = 1; i < 8; i++) {
                backgroundColor.push(barColor1)
                labels.push(i.toString())
                weeklySalesData.push(weeklyRevenue[i.toString()]?.total)
            }
            const data = {
                labels: week,
                datasets: [
                    {
                        label: 'Revenue (last 7 days)',
                        data: weeklySalesData,
                        borderWidth: 1,
                        backgroundColor
                    }
                ]
            }
            setWeeklySell(data)
        }
    }, [weeklyRevenue])

    useEffect(() => {
        if (yearlyRevenue) {
            let labels = [], yearlySellData = [], backgroundColor = [];
            for (let i = 1; i < 13; i++) {
                labels.push(i.toString())
                backgroundColor.push(barColor2)
                yearlySellData.push(yearlyRevenue[i.toString()]?.total)
            }
            const data = {
                labels: month,
                datasets: [
                    {
                        label: 'Revenue (last 12 months)',
                        data: yearlySellData,
                        borderWidth: 1,
                        backgroundColor,
                    }
                ]
            }
            setYearlySell(data)
        }
    }, [yearlyRevenue])

    function handleClick() {
        setToggle(!toggle)
    }

    return (
        <div>
            <div className={`${dashboardStyle.chartTitleSection}`}>
                <h1 className="font-bold"> Revenue ( Last {!toggle ? "7 days" : "12 months"})</h1>
                <label>
                    <Toggle
                        defaultChecked={toggle}
                        icons={false}
                        onChange={handleClick}/>
                </label>
            </div>

            <div >
                <Bar width={100}
                     height={20}
                     type='bar'
                     options={options}
                     data={toggle ? yearlySell : weeklySell}
                />

            </div>
        </div>
    );

}

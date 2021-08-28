import React from 'react';
import {getReadableTime} from "../libs/times";
const tableStyle = {
    tLayout:`-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8`,
    tContainer:`py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8`,
    tBody:`shadow overflow-hidden border-b border-gray-200 sm:rounded-lg`,
    tHead: `px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`,
    tData:`px-6 py-4 whitespace-nowrap`,

}


export default function OrdersTable({orders}) {
    return (
        <div className="flex flex-col h-5/6 ">
            <div className={`${tableStyle.tLayout}`} >
                <div className={`${tableStyle.tContainer}`}>
                    <div className={`${tableStyle.tBody}`}>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className={`${tableStyle.tHead}`}
                                    >
                                    Product Name
                                </th>
                                <th scope="col"
                                    className={`${tableStyle.tHead}`}>
                                    Date
                                </th>
                                <th scope="col"
                                    className={`${tableStyle.tHead}`}>
                                    Price
                                </th>
                                <th scope="col"
                                    className={`${tableStyle.tHead}`}>
                                    Status
                                </th>

                            </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">

                            {orders && orders.length && orders.map((order,index)=>(

                            <tr key={index}>
                                <td   className={`${tableStyle.tData}`}>
                                    <div className="flex items-center">
                                        {order.product.name}
                                    </div>
                                </td>
                                <td className={`${tableStyle.tData}`}>
                                    <div className="text-sm text-gray-900">{ getReadableTime (order.created_at)}</div>
                                </td>
                                <td  className={`${tableStyle.tData}`}>
                                    {order.total}
                                </td>
                                <td  className={`px-6 py-4 whitespace-nowrap text-sm ${order.status === 'delivered' ? 'text-green-400' : (order.status === 'processing' ? 'text-red-600' : 'text-gray-700')}`}
                                   >
                                    {order.status}
                                </td>

                            </tr>

                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
)}
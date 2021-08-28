import React from 'react';
const bestSellerStyle = {
    tLayout: `table-auto border- bg-white shadow `,
    tHead: `border w-1/4 text-left p-1`,
    tData:`p-1.5`,

}
const tableTitles =['Product Name','Price','#Unit Sold','Revenue']

export default function BestSellersComponent({topSellers}) {
    return (
        <div>
            <h2 className="font-semibold text-base my-8"> Best Sellers</h2>
            <table className={`${bestSellerStyle.tLayout}`}>
                <thead>
                <tr className="h-12 ">
                    {tableTitles.map((item,index)=>(
                        <th className={`${bestSellerStyle.tHead}`} key={index}> {item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {topSellers && topSellers.length && topSellers.map((row,index) =>
                    (
                        <tr className="border m-2" key={index}>
                            <td className={`${bestSellerStyle.tData}`} > {row.product.name}</td>
                            <td className={`${bestSellerStyle.tData}`}>${row.revenue / row.units}</td>
                            <td className={`${bestSellerStyle.tData}`}>{row.units}</td>
                            <td className={`${bestSellerStyle.tData}`}>${row.revenue}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

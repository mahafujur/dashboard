import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout/Layout";
import ApiContainer from "../../apis/auth";
import Swal from "sweetalert2";
import Pagination from "react-js-pagination";
import OrdersTable from "../../components/ordersTable";
import CustomLoader from "../../components/Loader/customLoader";

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                        fill="#000000">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
</svg>

export default function OrdersPage({user}) {
    const [orders, setOrders] = useState(undefined)
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const  [defaultOrders,setDefaultOrders]= useState(undefined);
    const  [defaultOrdersTotal,setDefaultOrdersTotal]= useState(undefined);

    useEffect(() => {
        if (orders === undefined) ordersApi(1);
    }, [])

    function ordersApi(page = 1, value = '') {
        let searchQuery = '';
        if (value) searchQuery = '&q=' + value
        setLoading(true)
        let url = 'orders?page=' + page + searchQuery;
        ApiContainer.orders(url)
            .then(response => {
                if (response.ok) {
                    setOrders(response.data.orders)
                    setTotalPages(response.data.total)
                    if(defaultOrders===undefined)setDefaultOrders(response.data.orders);
                    if(defaultOrdersTotal===undefined)setDefaultOrdersTotal(response.data.total);
                } else {
                    setOrders([])
                    Swal.fire({
                        title: " Request Failed",
                        text: response.data.msg,
                        confirmButtonColor: '#ff8c00',
                        confirmButtonText: 'Back',
                    })
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire('Error', "Something is wrong", 'error');
            })
            .finally(() => {
                setLoading(false)
            });
    }

    function handlePageChange(pageNumber) {
        setPageNo(pageNumber);
        ordersApi(pageNumber)
    }

    function handleSubmit(e) {
        e.preventDefault();
        ordersApi(1, searchValue)

    }

    function handleInputChange(e){
        e.preventDefault()
        let term = e.target.value
        if(term) {
            setSearchValue(e.target.value)
        }
        else  {
            setOrders(defaultOrders)
            setTotalPages(defaultOrdersTotal)
        }
    }


    return (
        <Layout>
            {loading && <CustomLoader/>}
            <div className="flex justify-between itesm-center">
                <h2 className="text-2xl font-bold my-8"> Orders</h2>

                <div className="flex items-center">
                    {searchIcon}
                    <form
                        onSubmit={handleSubmit}>
                        <input
                            id="search"
                            placeholder="Search field"
                            type="search"
                            onChange={handleInputChange}
                            className="focus:outline-none ml-4 mr-4 border h-12 px-2 text-gray-800"
                        />
                    </form>
                </div>

            </div>
            <OrdersTable orders={orders}/>
            {orders && orders.length && <div className="flex justify-start p-2 items-center">
                Pages
                <Pagination
                    innerClass="pagination flex flex-row"
                    activeLinkClass="text-black"
                    linkClass="page-link"
                    itemClass="p-2 text-site-theme"
                    activePage={pageNo}
                    itemsCountPerPage={50}
                    totalItemsCount={totalPages}
                    pageRangeDisplayed={6}
                    onChange={handlePageChange}
                />
            </div>}

        </Layout>
    )
}

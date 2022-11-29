import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import Data from '../data.json';
import { BsArrowDownUp } from "react-icons/bs";


const TableThree = () => {

    const [employerData, setEmployerData] = useState(Data)
    console.log(employerData)

    const [order, setOrder] = useState("ASC")

    const sorting = (col) => {
        // console.log('clicked');

        if (order === "ASC") {
            const sorted = [...employerData].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setEmployerData(sorted)
            setOrder("DEC")
        }
        if (order === "DEC") {
            const sorted = [...employerData].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setEmployerData(sorted)
            setOrder("ASC")
        }

    }




    return (
        <div className='mt-20 mx-[86px]'>
            <table className="table border-2 table-zebra w-[570px]">

                <thead>
                    <tr className=''>
                        <th className='border-2 text-sm w-[220px] pl-2.5 py-2' >Email</th>
                        <th className='border-2 text-sm w-[175px] pl-2.5 py-2' onClick={() => sorting("joiningDate")}><span className='flex'><span className='mr-3'>Joining Date</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>
                        <th className='border-2 text-sm w-[175px] pl-2.5 py-2' onClick={() => sorting("role")}><span className='flex'><span className='mr-3'>Role</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>

                    </tr>
                </thead>


                <tbody>

                    {
                        employerData.map((data, i) =>
                            <tr key={i}>
                                <td className='border-2 text-sm pl-2.5 py-2'> <a href={data.email} alt='' className='text-blue-700 underline'>{data.email}</a> </td>
                                <td className='border-2 text-sm pl-2.5 py-2'>{data.joiningDate}</td>
                                <td className='border-2 pl-2.5 py-2'>{data.role}</td>

                            </tr>
                        )
                    }



                </tbody>

            </table>
        </div>
    );
};


export default TableThree;
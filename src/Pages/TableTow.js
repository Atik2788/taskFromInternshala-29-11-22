import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import Data from '../data.json';
import { BsArrowDownUp } from "react-icons/bs";

const TableTwo = () => {
    const [employerData, setEmployerData] = useState(Data)
    console.log(employerData)

    const [order, setOrder] = useState("ASC")


    const nameSorting = (col) => {

        if (order === "ASC") {
            const sorted = [...employerData].sort((a, b) =>
                a[col].name.toLowerCase() > b[col].name.toLowerCase() ? 1 : -1
            );
            setEmployerData(sorted)
            setOrder("DEC")
        }
        if (order === "DEC") {
            const sorted = [...employerData].sort((a, b) =>
                a[col].name.toLowerCase() < b[col].name.toLowerCase() ? 1 : -1
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
                        <th className='border-2 w-[175px] text-sm pl-2.5 py-2' onClick={() => nameSorting("person")}><span className='flex'><span className='mr-3'>Name</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>
                        <th className='border-2 w-[220px] text-sm pl-2.5 py-2'>Email Address</th>
                        <th className='border-2 w-[175px] text-sm pl-2.5 py-2'>Role</th>

                    </tr>
                </thead>


                <tbody>

                    {
                        employerData.map((data, i) =>
                            <tr key={i}>
                                <td className='p-0'>
                                    <div className="flex items-center ">
                                        <div className="avatar pl-2.5 py-2">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.person.avatar} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className='pl-2.5 py-2'>
                                            <div className="font-bold text-sm">{data.person.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className='border-2 text-sm pl-2.5 py-2'> <a href={data.email} alt='' className='text-blue-700 underline'>{data.email}</a> </td>
                                <td className='border-2 text-sm pl-2.5 py-2'>{data.role}</td>

                            </tr>
                        )
                    }



                </tbody>

            </table>
        </div>
    );
};


export default TableTwo;
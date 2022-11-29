import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import Data from '../data.json';
// import { BsArrowDownUp } from 'react-icons/fa';
import { BsArrowDownUp } from "react-icons/bs";

const Table = () => {

    
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
        <div className='mt-28 mx-[86px]'>
            <table className="  border-2 table-zebra w-full">

                <thead>
                    <tr className=''>
                        <th className='border-2 text-sm pl-2.5 py-2' onClick={() => nameSorting("person")}><span className='flex'><span className='mr-3'>Name</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>
                        <th className='border-2 text-sm pl-2.5 py-2' onClick={() => sorting("city")}><span className='flex'><span className='mr-3'>City</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>
                        <th className='border-2 text-sm pl-2.5 py-2' onClick={() => sorting("email")}><span className='flex'><span className='mr-3'>Email Address</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>
                        <th className='border-2 text-sm pl-2.5 py-2' onClick={() => sorting("joiningDate")}><span className='flex'><span className='mr-3'>Joining Date</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>
                        <th className='border-2 text-sm pl-2.5 py-2' onClick={() => sorting("role")}><span className='flex'><span className='mr-3'>Role</span> <span className='text-lg'><BsArrowDownUp/></span></span></th>

                    </tr>
                </thead>


                <tbody>

                    {
                        employerData.map((data, i) =>
                            <tr key={i}>
                                <td className='border-2'>
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

                                <td className='border-2 text-sm pl-2.5 py-2'>{data.city}</td>
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

export default Table;
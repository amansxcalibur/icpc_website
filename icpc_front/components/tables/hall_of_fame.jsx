'use client'

import React from 'react';
import hallOfFameData from '../json/hall_of_fame.json';

export default function HallOfFame() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start px-4 py-8 md:px-6 lg:px-8">
            <div className="w-full max-w-7xl">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-black mt-[70px]">
                    Hall of Fame
                </h1>
                <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl text-black mb-6 md:mb-8 px-4">
                    Celebrating the champions who have made their mark at the ICPC Amritapuri Regionals
                </p>
                
                <div className="w-full overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800">
                    <table className="w-full min-w-full text-xs md:text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs md:text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-3 md:px-6 py-3 min-w-[80px]">
                                    Year
                                </th>
                                <th scope="col" className="px-3 md:px-6 py-3 min-w-[150px]">
                                    Team Name
                                </th>
                                <th scope="col" className="px-3 md:px-6 py-3 min-w-[200px]">
                                    College
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {hallOfFameData.map((entry, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-gray-900 dark:text-white">
                                        {entry.year}
                                    </td>
                                    <td className="px-3 md:px-6 py-3 md:py-4 text-gray-900 dark:text-white">
                                        {entry.team}
                                    </td>
                                    <td className="px-3 md:px-6 py-3 md:py-4 text-gray-900 dark:text-white">
                                        {entry.college}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
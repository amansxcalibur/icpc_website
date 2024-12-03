'use client';

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import MagnifyingGlass from '../svg/magnifying-glass';
import DownlaodIcon from '../svg/download';
import Link from 'next/link';

export default function SelectedTeams() {
    const [teamsData, setTeamsData] = useState([]);
    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showWomenOnly, setShowWomenOnly] = useState(false);
    const teamsPerPage = 100;

    useEffect(() => {
        const fetchCSVData = async () => {
            const response = await fetch('/data/ICPC Selected Teams for Amritapuri Regionals 2024 Total team.csv');
            const csvText = await response.text();
            const parsedData = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
            });
            setTeamsData(parsedData.data.map(row => ({
                ...row,
                isWomenOnly: row.isWomenOnly == 'true',// for converting from string true to boolean true
            })));
        };

        fetchCSVData();
    }, []);

    const filteredTeams = teamsData.filter((row) => {
        const matchesSearch =
            !searchedVal.length ||
            row.teamName?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.teamId?.toString().toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.institution?.toLowerCase().includes(searchedVal.toLowerCase());

        const matchesToggle = !showWomenOnly || row.isWomenOnly;

        return matchesSearch && matchesToggle;
    });

    // Pagination
    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam);

    const totalPages = Math.ceil(filteredTeams.length / teamsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#92133b] pt-[8vw]">
            <div className="flex-1 flex flex-col min-w-[80vw] max-md:min-w-[95vw] max-md:max-w-[95vw]">
                <div className="text-center mb-[4vw]">
                    <h1 className="text-[4vw] font-bold mb-[1vw] max-md:text-[8vw] text-white">
                        Selected Teams
                    </h1>
                    <p className="text-[1.2vw] max-md:text-[3.5vw] text-gray-200">
                        Congratulations to all who have been selected to the ICPC Amritapuri Regionals.
                    </p>
                </div>
                <div className="flex justify-center items-center mb-[2vw]">
                    {/* Search Input */}
                    <div className="flex rounded-l-full min-h-[3vw] min-w-[25vw] px-[.5vw] gap-[.5vw] overflow-hidden bg-white items-center">
                        <p className="text-stone-400 size-[2vw]">
                            <MagnifyingGlass />
                        </p>
                        <input
                            type="text"
                            className="text-[1.1vw] max-md:text-[3vw] text-black flex-1 min-h-[3vw] outline-none"
                            placeholder="Search ID or team name"
                            onChange={(e) => setSearchedVal(e.target.value)}
                        />
                    </div>
                    <div className="relative bg-white rounded-r-full">
                        <select
                            onChange={(e) => setShowWomenOnly(e.target.value === 'womenOnly')}
                            value={showWomenOnly ? 'womenOnly' : 'allTeams'}
                            className="px-[1vw] rounded-full py-[.5vw] min-h-[3vw] bg-gray-800 border border-solid border-gray-800 text-white cursor-pointer"
                        >
                            <option value="allTeams" className="bg-gray-800 text-white">
                                All Teams
                            </option>
                            <option value="womenOnly" className="bg-gray-800 text-white">
                                Women Only
                            </option>
                        </select>
                    </div>
                    <Link href="selected-teams-v1" title='Download the pdf containing selected teams' className='mx-[.5vw] p-[.5vw] hover:bg-gray-800 rounded-full min-h-[3vw] min-w-[3vw] flex justify-center items-center'><DownlaodIcon/></Link>
                </div>

                {/* Table */}
                <div className="flex min-h-[4vw] items-center text-[1.2vw] max-md:text-[3vw] font-semibold text-white border-b border-white/30 pb-[1vw]">
                    <div className="flex-1">Team ID</div>
                    <div className="flex-[2]">Team Name</div>
                    <div className="flex-[2]">Institution</div>
                </div>

                <div className="mt-[2vw] space-y-[2vw]">
                    {currentTeams.map((entry, index) => (
                        <div
                            key={index}
                            className="flex items-center min-h-[4vw] hover:bg-white/5 rounded-lg transition-all duration-300 p-[1vw]"
                        >
                            <div className="flex-1 text-[1.1vw] max-md:text-[3vw] text-gray-300">
                                {entry.teamId}
                            </div>
                            <div className="flex-[2] text-[1.1vw] max-md:text-[3vw]">
                                <span className="font-semibold text-white">{entry.teamName}</span>
                            </div>
                            <div className="flex-[2] text-[1.1vw] max-md:text-[3vw] text-gray-200">
                                {entry.institution}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center my-[2vw] text-white gap-4">
                    <button
                        className={`px-[1vw] py-[.5vw] rounded-[.2vw] ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'}`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        className={`px-[1vw] py-[.5vw] rounded-[.2vw] ${currentPage === totalPages ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

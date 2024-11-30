'use client';

import React, { useState } from 'react';
import selectedTeamsData from '../json/selected_teams.json';
import MagnifyingGlass from '../svg/magnifying-glass';

export default function SelectedTeams() {
    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const teamsPerPage = 20;

    // Filtered teams
    const filteredTeams = selectedTeamsData.filter((row) =>
        !searchedVal.length ||
        row.teamName.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.teamId.toString().toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.institute.toString().toLowerCase().includes(searchedVal.toLowerCase())
    );

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
                {/* Title Section */}
                <div className="text-center mb-[4vw]">
                    <h1 className="text-[4vw] font-bold mb-[1vw] max-md:text-[8vw] text-white">
                        Selected Teams
                    </h1>
                    <p className="text-[1.2vw] max-md:text-[3.5vw] text-gray-200">
                        Congratulations to all who have been selected to the ICPC Amritapuri Regionals
                    </p>
                </div>
                {/* Search */}
                <div className="flex justify-center">
                    <div className="flex rounded-full min-h-[3vw] min-w-[30vw] mb-[2vw] px-[.5vw] gap-[.5vw] overflow-hidden bg-white items-center">
                        <p className="text-stone-400 size-[2vw]">
                            <MagnifyingGlass />
                        </p>
                        <input
                            type="text"
                            className="text-[1.1vw] max-md:text-[3vw] text-black flex-1 h-full"
                            placeholder="Search ID or team name"
                            onChange={(e) => setSearchedVal(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table Header */}
                <div className="flex min-h-[4vw] items-center text-[1.2vw] max-md:text-[3vw] font-semibold text-white border-b border-white/30 pb-[1vw]">
                    <div className="flex-1">Team ID</div>
                    <div className="flex-[2]">Team Name</div>
                    <div className="flex-[2]">Members</div>
                    <div className="flex-[2]">College</div>
                    <div className="flex-1">Score</div>
                </div>

                {/* Table Content */}
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
                                {entry.members.map((member, idx) => (
                                    <span key={idx}>{member}<br /></span>
                                ))}
                            </div>
                            <div className="flex-[2] text-[1.1vw] max-md:text-[3vw] text-gray-200">
                                {entry.institute}
                            </div>
                            <div className="flex-1 text-[1.1vw] max-md:text-[3vw] text-gray-300">
                                {entry.score}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
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

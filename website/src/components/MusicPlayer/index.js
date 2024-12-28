import React, { useState } from 'react';
import { PlayIcon, PauseIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

function MusicPlayer({ data, isPlaying, onTogglePlay, onOpenModal }) {
    return (
        <div
            key={data.id}
            className="group relative bg-gradient-to-r from-white via-gray-100 to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
            <div className="relative rounded-t-xl overflow-hidden">
                <img
                    src={`../images/${data.cover}`}
                    alt={data.term || data.title}
                    className="w-full h-80 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <button
                        onClick={onTogglePlay}
                        className="flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-red-500 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? (
                            <PauseIcon className="h-8 w-8 text-white" />
                        ) : (
                            <PlayIcon className="h-8 w-8 text-white" />
                        )}
                    </button>
                </div>
                <button
                    onClick={onOpenModal}
                    className="absolute top-3 right-3 p-2 rounded-full shadow-md bg-gray-800 bg-opacity-10 hover:bg-red-500 hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                    aria-label="More Info"
                >
                    <InformationCircleIcon className="h-6 w-6 text-white" />
                </button>
            </div>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 truncate">
                    {data.term || data.title}
                </h2>
                <p className="text-gray-700 mt-1 truncate">{data.description}</p>
            </div>
        </div>
    );
}

export default MusicPlayer;
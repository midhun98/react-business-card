import React from "react"

export default function Info({ children }) {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto mt-24 border-black border-2">
            <img className="" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">The Coldest Sunset</div>
                <div className="font-bold text-xl mb-2 text-center text-orange-400">Full stack developer</div>
                <div className="font-bold text-sm mb-2 text-center ">www.midhun98.in</div>
            </div>
            <div className="flex justify-center">
                <button
                    className="inline-block bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                    <img className="inline-block w-6 h-6 mr-2"
                         src="https://img.icons8.com/material-two-tone/24/new-post.png" alt="new-post"/>
                    Email
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    <img className="inline-block w-6 h-6 mr-2" src="https://img.icons8.com/ios/150/linkedin.png"
                         alt="linkedin"/>
                    linkedin
                </button>
            </div>
            {children}
        </div>
    );
}

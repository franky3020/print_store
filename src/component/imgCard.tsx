import React from 'react';


export default function ImgCard() {

    return (
        <div className="w-80 border-double border-4
                        hover:bg-blue-100 rounded-lg
                        drop-shadow-lg
                        py-1
                        bg-white">

            <div className="flex items-center mb-4 ml-1">
                <img
                    className="rounded-full  "
                    src="https://picsum.photos/30/30"
                    alt="Katherine Johnson"
                />
                <p className="ml-4">franky</p>
            </div>

            <div className="flex justify-center">
                <img className="rounded-lg"
                    src="https://picsum.photos/200/200"
                    alt="Katherine Johnson"
                />
            </div>

            <div className="flex justify-center m-4 ">
                <button className="min-w-full rounded-full bg-emerald-200 p-1 drop-shadow-lg hover:bg-emerald-600">購買</button>
            </div>
        </div>
    )

}
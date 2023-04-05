import React, { useState } from 'react'
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // Functions
  const handleChangeTextYes = ()=>{
    setText("I knew it!!! 🤣🤣🤣")
  }
  const handleChangeTextNo = ()=>{
    setText("You surprised me 🧐.")
  }

  // useStates
  const [Text, setText] = useState("Are you DUMB???")

  return (
    <>
      <Head>
        <title>Are You Dumb - Fun Next app</title>
        <meta name="description" content="Are you dumb???" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="rudumb text-center container items-center my-80 sm:my-32 mx-auto text-gray-100">
          <div className="text-center">
            <span className="text-4xl sm:text-9xl sm:ml-16 font-extrabold ">
              {Text}
            </span>
          </div>
          <div className="buttons justify-between flex mx-28 sm:mx-[30rem] my-8 sm:my-20">
            <button onClick={handleChangeTextYes} className="bg-gray-800 text-gray-100 px-5 py-2 text-lg sm:text-6xl rounded-lg font-bold bg-gradient-to-br from-indigo-700 to-blue-900 hover:bg-gradient-to-br hover:from-indigo-900 hover:to-blue-900 ">
              Yes
            </button>
            <button onClick={handleChangeTextNo} className="bg-gray-800 text-gray-100 px-6 py-2 text-lg sm:text-6xl rounded-lg font-bold bg-gradient-to-br from-indigo-700 to-blue-900 hover:translate-y-56 sm:hover:translate-x-96">
              No
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

import React from "react"
import { FaFacebook, FaWhatsappSquare, FaTwitter, FaInstagramSquare } from "react-icons/fa";

function App() {


  return (
    <>
      <div className=" bg-slate-950 text-[white] flex items-center place-content-between py-6">
        <h1 className="text-3xl mx-10 font-bold">TravellO</h1>

        <ul className="flex row-auto mr-20">

          <li className=" duration-500 cursor-pointer bg-slate-800 px-6 py-2 mr-14 rounded-sm hover:bg-white hover:text-[black] font-bold">Home</li>
          <li className=" duration-500 cursor-pointer bg-slate-800 px-6 py-2 mr-14 rounded-sm hover:bg-white hover:text-[black] font-bold">Packages</li>
          <li className=" duration-500 cursor-pointer bg-slate-800 px-6 py-2 mr-14 rounded-sm hover:bg-white hover:text-[black] font-bold">Offices</li>
          <li className=" duration-500 cursor-pointer bg-slate-800 px-6 py-2 mr-14 rounded-sm hover:bg-white hover:text-[black] font-bold">Contact</li>

        </ul>
      </div>

      <div className=" bg-slate-800 w-full h-screen flex items-center place-content-between row-auto text-[white] ">

        <div className=" flex content-center items-center flex-col w-2/4">
          <h1 className="text-5xl text-[white] font-bold ">Travells With Us !</h1>

          <p className="text-center ml-10 mt-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum provident ipsam illum ipsum dolorem, doloribus officia, modi expedita id fugit assumenda perspiciatis quaerat deleniti veritatis tempora, corporis et eos!</p>
          <div className="flex place-content-center ">
            <button className=" duration-300 cursor-pointer bg-slate-400 px-5 py-2 rounded mr-6 mt-8 hover:bg-white hover:text-[black]"> Appointment</button>
            <button className=" duration-300 cursor-pointer bg-slate-400 px-10 py-2 rounded ml-6 mt-8 hover:bg-white hover:text-[black]" >Details</button>
          </div>

        </div>

        <img src="card.jpg" className=" w-2/6 h-3/4 pr-40 rounded-md" />
      </div>

      <div className="bg-slate-600 w-full flex items-center place-content-around row-auto">
        <div className=" py-10 flex ">
          <FaFacebook className="duration-300 text-[white] size-8 mx-4 hover:text-slate-950" />
          <FaTwitter className="duration-300 text-[white] size-8 mx-4 hover:text-slate-950" />
          <FaInstagramSquare className="duration-300 text-[white] size-8 mx-4 hover:text-slate-950" />
          <FaWhatsappSquare className="duration-300 text-[white] size-8 mx-4 hover:text-slate-950" />
        </div>
        <p className="text-[white] font-semibold"> Designed by: Muhammad Arif</p>
      </div>
    </>
  )
}

export default App

"use client";
import Image from "next/image";
import vector from "../public/images/vector.svg";
import pest from "../public/images/pest.svg";
import peco from "../public/images/peco.svg";
import google from "../public/images/google.svg";
import apple from "../public/images/apple.svg";
import fb from "../public/images/fb.svg";
import company from "../public/images/company.svg";

export default function Home() {
  return (
    <main className="content-center font-['Inter']">
      <div className="grid md:grid-cols-2">
        <div className="img-side md:col-span-1 flex mx-20 my-16 bg-rose-100 justify-center items-center rounded-2xl">
          <div className="px-20 py-12 ">
            <div className="flex justify-end">
              <Image src={pest} />
            </div>
            <div className="flex justify-center -mt-20">
              <Image src={vector} />
            </div>
          </div>
        </div>
        <div className="form-side md:col-span-1 flex flex-col my-16 justify-center items-center">
          <div className="title uppercase font-bold text-3xl text-gray-900">
            <h2>pest control</h2>
          </div>
          <div className="peco-logo mt-12">
            <Image src={peco} className="" />
          </div>
          <div className="form flex flex-col mt-10 ">
            <input
              className="w-[400px] h-[50px] bg-white rounded-[10px] border border-neutral-300 placeholder:text-gray-400 text-sm ps-5 font-['Inter']"
              type="email"
              name="email"
              id="email"
              placeholder="User name"
            />
            <input
              className="mt-5 w-[400px] h-[50px] bg-white rounded-[10px] border border-neutral-300 placeholder:text-gray-400  text-sm ps-5 font-['Inter']"
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
            />
          </div>

          <div className="button">
            <button className="mt-10 w-[400px] h-[50px] bg-orange-500 rounded-[10px] border border-neutral-300 text-white text-base font-semibold font-['Inter']">
              Login
            </button>
          </div>
          <div className="seperator flex flex-row items-center gap-3 mt-4">
            <div className="left-sep w-[125px] h-[0px] border border-neutral-300"></div>
            <p className="text-gray-400 text-base font-medium font-['Inter']">
              or continue with
            </p>
            <div className="right-sep w-[125px] border border-neutral-300"></div>
          </div>
          <div className="social-icons flex flex-row gap-5 mt-5">
            <div className="google">
              <Image src={google} className="" />
            </div>
            <div className="apple">
              <Image src={apple} className="" />
            </div>
            <div className="fb">
              <Image src={fb} className="" />
            </div>
          </div>
          <div className="company mt-10">
            <Image src={company} className="" />
          </div>
        </div>
      </div>
    </main>
  );
}

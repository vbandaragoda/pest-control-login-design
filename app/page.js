"use client";
import Image from "next/image";
import img1 from "../public/images/img1.png";
import img2 from "../public/images/img2.png";

export default function Home() {
  return (
    <main className="content-center">
      <div className="grid md:grid-cols-2">
        <div className="img-side md:col-span-1 flex mx-20 my-24 bg-rose-100 justify-center items-center rounded-2xl">
          <div className="px-20 py-12">
            <div className="flex justify-end">
              <Image src={img2} />
            </div>
            <div className="flex justify-center">
              <Image src={img1} />
            </div>
          </div>
        </div>
        <div className="form-side md:col-span-1 md:flex justify-center">
          <h2>This is form side</h2>
        </div>
      </div>
    </main>
  );
}

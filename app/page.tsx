import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full rounded-tl-lg flex flex-col">
      <div className="relative pr-4">
        <div className="bg-gradient-to-tl from-red-900 to-neutral-950 rounded-3xl shadow-xl">
        <div className="bg-neutral-950 absolute py-1 px-4 rounded-lg mt-6 ml-4 shadow-md">
          <div className="flex flex-row justify-between items-center gap-1">
            <div className=" text-lg font-bold ">
              DBD 
            </div>
            <div className="text-sm text-neutral-400">
              Generator
            </div>
          </div>
        </div>
          <div className="flex justify-center">
            <Image 
              width={300}
              height={300}
              src="/images/home.png"
              alt="home"
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

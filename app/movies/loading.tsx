export default function Loading() {
  return (
    <div className=" text-center">
      <div className="grid  grid-cols-1 lg:grid-cols-3 animate-pulse mx-14">
        {Array.from({ length: 20 }, (movie, i) => (
          <div
            className="text-white flex flex-col justify-center items-center "
            key={i}
          >
            <div className="bg-gray-700/50 my-6 px-6 rounded-lg lg:w-[380px] h-[216px]">
              <div   className="invisible" />
            </div>
            <div  className="w-[350px] mb-2 h-2 bg-gray-700/50  rounded-2xl ">
              
            </div>
            <div  className="w-[350px] mb-2 h-2 bg-gray-700/50  rounded-2xl ">
              
            </div>
            <div  className="w-[350px] mb-2 h-2 bg-gray-700/50  rounded-2xl ">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
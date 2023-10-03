export default function Loading() {
  return (
    <div className=" text-center">
      <div className="grid  grid-cols-1 lg:grid-cols-3 animate-pulse">
        {Array.from({ length: 12 }, (movie, i) => (
          <div
            className="text-white flex flex-col justify-center items-center "
            key={i}
          >
            <div className="bg-gray-700/50 my-6 px-6 rounded-lg">
              <img src="" height={300} width={300} className="invisible" />
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
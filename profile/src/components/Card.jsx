export function Card(){
    return (
        <div className="relateive">
            <div className="ml-120 mt-20 w-100 h-100 rounded-lg shadow-xl">
                <div className="w-100 h-40 bg-cyan-500 rounded-t-lg"></div>
                <div className=" absolute ml-35 -mt-14 h-30 w-30 rounded-full shadow-xl"></div>
                <div className="flex justify-center flex-wrap mx-auto w-30 h-16 mt-20">
                    <div className="font-bold mr-2"> Name </div>
                    <span> number </span>
                    <div className="">Location</div> 
                </div>

            </div>
        </div>
    )
}
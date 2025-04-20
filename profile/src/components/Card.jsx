export function Card(props){
    return (
        <div className="relateive">
            <div className="ml-120 mt-20 w-100 h-100 rounded-lg shadow-xl">
                <div className="w-100 h-40 bg-cyan-500 rounded-t-lg"></div>
                <div className=" absolute ml-35 -mt-14">
                    <img className="h-30 w-30 rounded-full shadow-xl" src="profilePic.png" alt="" />
                </div>
                <div className="flex justify-center flex-wrap mx-auto w-40 h-16 mt-20">
                    <div className="font-bold mr-2"> {props.name} </div>
                    <span className="text-gray-400"> {props.no} </span>
                    <div className="text-gray-400"> {props.location} </div> 
                </div>
                <div className="w-100 h-20 mt-4 rounded-b-lg border-t border-gray-300">
                    <div className="flex justify-between p-3">
                        <div className="flex justify-center flex-wrap w-20 h-10 ml-2"> 
                            <span className="font-bold text-lg">80k</span> 
                            <span className="text-gray-400">Followers</span> 
                        </div>
                        <div className="flex justify-center flex-wrap w-10 h-10"> 
                            <span className="font-bold text-lg">803k</span> 
                            <span className="text-gray-400">Likes</span> 
                        </div>
                        <div className="flex justify-center flex-wrap w-15 h-10 mr-2"> 
                            <span className="font-bold text-lg">1.4k</span> 
                            <span className="text-gray-400">Photos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function VideoCard(props: any){
    return (
        <div className="p-3 cursor-pointer">
            <img src={props.photo} alt="thumbnil" className=" rounded-xl"/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 lg:col-span-2">
                    <img className="w-10 h-10 rounded-full" src={props.profile} alt="profile picture" />
                </div>
                <div className="col-span-11 lg:col-span-10 pl-2">
                    <div>
                        {props.title}
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.author}
                    </div>
                    <div className="text-gray-400 text-base">
                        {props.view} | {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    )
}
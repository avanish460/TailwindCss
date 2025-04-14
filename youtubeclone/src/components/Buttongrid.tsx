const BUTTONS = [
    {
        title:"All"
    },
    {
        title:"IPL"
    },
    {
        title:"Music"
    },
    {
        title:"Satsang"
    },
    {
        title:"Coding"
    },
    {
        title:"Live"
    },
    {
        title:"Podcasts"
    },
    {
        title:"Dances"
    },
    {
        title:"Songs"
    },
    {
        title:"Gym"
    }
]

export function Buttongrid(){
    return (
        <div className="sm:ml-67 grid grid-cols-5 lg:grid-cols-10 gap-2">    
           {BUTTONS.map(btn => 
            <button className="p-1 bg-white/9 rounded-lg cursor-pointer item-center">{btn.title}</button>
           )}
        </div>
    )
}
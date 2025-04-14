import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        title:"The BEST CAREER Advice for 2025 That Actually WORKS!",
        author:"Hustle With Harman",
        view:"33K views",
        timestamp:"1 day ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"Comedians Are Switching Careers!",
        author:"Harkirat Singh",
        view:"18,269 views",
        timestamp:"18 hours ago",
        photo:"photo1.png",
        profile:"profile1.png"
    },
    {
        title:"How To Build $1M Products Using AI (Lovable Tutorial)",
        author:"100x Engineers",
        view:"105K views",
        timestamp:"1 month ago",
        photo:"photo2.png",
        profile:"profile2.png"
    },
    {
        title:"Open-Source Contribution Opportunity - CodeForGovTech",
        author:"Piyush Garg",
        view:"21K views",
        timestamp:"1 day ago",
        photo:"photo3.png",
        profile:"profile3.png"
    },
    {
        title:"1% Mindset Hacks: Build Wealth Like a Millionaire",
        author:"Stealth Mode",
        view:"210 views",
        timestamp:"3 days ago",
        photo:"photo4.png",
        profile:"profile4.png"
    },
    {
        title:"Get Hired FAST in 2025: Resume & Interview Calls – Real Strategy to Crack High Paying Job!",
        author:"Technical Suneja",
        view:"29,063 views",
        timestamp:"20 hours ago",
        photo:"photo5.png",
        profile:"profile5.png"
    },
    {
        title:"A Day In The Life Of An Amazon Software Engineer (Vancouver Edition)",
        author:"Sarah Li",
        view:"8,126 views",
        timestamp:"12 hours ago",
        photo:"photo6.png",
        profile:"profile6.png"
    },
    {
        title:"Sam Altman On Miyazaki’s thoughts on art, Design Jobs, Indian AI, Is Prompt Engineering A Job?",
        author:"Varun Mayya",
        view:"323K views",
        timestamp:"6 days ago",
        photo:"photo7.png",
        profile:"profile7.png"
    },
    {
        title:"What India can learn from DeepSeek",
        author:"Varun Mayya",
        view:"227K views",
        timestamp:"2 months ago",
        photo:"photo8.png",
        profile:"profile7.png"
    },
    {
        title:"This is what INDIA will look like in 2030 Ft. NVIDIA (FUTURISTIC VLOG)",
        author:"Varun Mayya",
        view:"122K views",
        timestamp:"2 months ago",
        photo:"photo9.png",
        profile:"profile7.png"
    }
    
    
]

export function VideoGrid(){
    return(
        <div className="sm:ml-64 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 dark:bg-black">
            {VIDEOS.map(video => <div>
                 <VideoCard 
                 title={video.title}
                 author={video.author}
                 view={video.view}
                 timestamp={video.timestamp}
                 photo={video.photo}
                 profile={video.profile}
                 />
                </div>)}
        </div>
    )
}
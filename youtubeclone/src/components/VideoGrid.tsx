import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    },
    {
        title:"अगर इस बात को समझ गए, तो दुनिया की कोई सुंदरता आपको भटका नहीं पाएगी ! Shri Hit Premanand Ji Maharaj",
        author:"Sadhan Path",
        view:"69k views",
        timestamp:"8 days ago",
        photo:"photo.png",
        profile:"profile.png"
    }
]

export function VideoGrid(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
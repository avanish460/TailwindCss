import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";
import { VideoGrid } from "@/components/VideoGrid";


export default function Home() {
  return (
    <div>
      <AppBar />
      <SideBar />
      <VideoGrid />
    </div>
  );
}

import { SearchBar } from "./SearchBar";

export function AppBar(){
    return (
        <div className="flex justify-between p-3">
            <div>
                youtube
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                signin
            </div>
        </div>
    )
}
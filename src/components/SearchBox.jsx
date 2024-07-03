import { useState } from "react"

export function SearchBox(props) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
        setSearchTerm(event.target.value)
        console.log(searchTerm)
    }

    return (
        <div className="search-area">
            <input 
                className="search-box"
                onChange={handleChange}
                placeholder="Search..."
            />
            <p>Displaying {props.listLength} / {props.totalEpisodes} episodes</p>
        </div>
    )
}
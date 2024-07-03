import { useState } from "react"

export function SearchBox() {
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
        setSearchTerm(event.target.value)
        console.log(searchTerm)
    }

    return (
        <div>
            <input 
                className="search-box"
                onChange={handleChange} 
            />
        </div>
    )
}
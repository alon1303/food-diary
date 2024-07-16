import { useState } from "react"
import "./WriteDiary.css"
const WriteDiary = () => {
    const [content, setContent] = useState<string>()
    function handleEnterPress(e:any){
        if(e.code === 'Space'){
            setContent(e.target.value)
        }
    }
    return (
        <div className="write-container">
            <div className="write-content">
                {content}
            </div>

            <div className="write-input-container">

                <textarea placeholder="write..." className="write-input"  onKeyDown={handleEnterPress}></textarea>
            </div>
        </div>
    )
}
export default WriteDiary
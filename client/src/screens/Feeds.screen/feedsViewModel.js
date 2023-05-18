import {useState} from "react"
const FeedViewModel = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const {isImgUrl , setIsImgUrl} = useState(undefined)
        const handleClick = () => {
         isOpen ? setIsOpen(false) : setIsOpen(true);
        };

    return {
        isOpen,
        handleClick,
        isImgUrl
    }    
}
export default FeedViewModel
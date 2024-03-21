import { useNavigate } from "react-router-dom"


const HeadSection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/career")
    }
  return (
    <div className="grid grid-cols-2 px-10">
        <div className=" flex flex-col p-10 m-5">
            <p className=" font-semibold text-5xl mb-5">Multi-operator platform for mobile connectivity</p>
            <p className=" font-normal text-2xl mb-2" >Enable any business to launch branded mobile experiences</p>
            <p className=" font-normal text-2xl mb-5" >Click below to explore opportunities and join our team</p>
            <button type="button" 
            onClick={handleClick}
            className=" font-semibold text-base p-2 w-20 text-white bg-blue-800 border border-blue-800 hover:bg-white hover:text-blue-800"
            >Join us</button>
        </div>
        <div className="flex flex-row">
            <div>
                <img src="./banner1.webp" alt="logo" />
            </div>
            <div>
                <img src="./banner2.webp" alt="logo" />
            </div>
            <div>
                <img src="./banner3.webp" alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default HeadSection
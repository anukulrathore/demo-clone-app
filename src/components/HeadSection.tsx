import { useNavigate } from "react-router-dom"


const HeadSection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/career")
    }
  return (
    <div className="grid grid-cols-2 px-10">
        <div className=" flex flex-col p-10 m-5">
            <p className=" font-semibold text-5xl mb-5">Get The Hudle App</p>
            <p className=" font-normal text-2xl mb-2" >Just Move. Have Fun. Get Fit</p>
            <p className=" font-normal text-2xl mb-5" >Click below to explore opportunities and join our team</p>
            <button type="button" 
            onClick={handleClick}
            className=" font-semibold text-base p-2 w-20 text-primary bg-blue-800 border rounded border-blue-800 hover:text-white hover:text-blue-800 hover:bg-primary"
            >Join us</button>
        </div>
        <div className="flex bg-primary">
            <img src="./landing-banner.png"></img>
        
        </div>
        {/* <div className="flex flex-row">
            <div>
                <img src="./banner1.webp" alt="logo" />
            </div>
            <div>
                <img src="./banner2.webp" alt="logo" />
            </div>
            <div>
                <img src="./banner3.webp" alt="logo" />
            </div>
        </div> */}
        
    </div>
  )
}

export default HeadSection
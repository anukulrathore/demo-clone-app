import { useNavigate } from "react-router-dom"


const HeadSection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/career")
    }
  return (
    <div className="grid grid-cols-2 px-10">
        <div className=" flex flex-col p-10 m-5">
            <p className=" font-semibold text-5xl mb-5">World's Most User-Friendly Credential System</p>
            <p className=" font-normal text-2xl mb-2" >Give My Certificate is utilized by more than 3,800 organizations across 140 countries.</p>
            <p className=" font-normal text-2xl mb-5" >Click below to explore opportunities and join our team</p>
            <button type="button" 
            onClick={handleClick}
            className=" font-semibold text-base p-2 w-20 text-white bg-blue-800 border rounded border-blue-800 hover:text-white hover:text-blue-800 hover:bg-green-500"
            >Join us</button>
        </div>
        <div className="flex bg-primary">
            <img src="./coding.jpg"></img>
        
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
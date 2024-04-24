import { useNavigate } from "react-router-dom";

const navbarItems = ["Home", "Players", "Venues", "Other Offerings", "Resources", "Blog", "Signup/Login"]

const NavBar = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between py-2 px-10 shadow-lg">
        <div className="flex">
            <img src="./hudle.svg" alt="logo" height={100} width={100}/>
            {/* <p className=" font-bold text-2xl p-2">JustMove.fun</p> */}
        </div>

      <div className="hidden md:flex">
        {navbarItems.map( item =>{
            return (
                <button
                type="button"
                onClick={handleClick}
                className=" mx-4"
                >{item}</button>
            )
        } )}

        <button
          type="button"
           onClick={handleClick}
          className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-white bg-blue-800 border rounded-lg hover:bg-orange-700"
        >
          Contact Us
        </button>
      </div>

        
    </div>
  )
}

export default NavBar 
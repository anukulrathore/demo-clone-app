import { useNavigate } from "react-router-dom";

const navbarItems = ["Solutions","Industries","Pricing","Resourse","Marketplace", "Signup/Login"]

const NavBar = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between py-2 px-10 shadow-lg">
        <div className="flex">
            <img src="./logo1.png" alt="logo" height={200} width={300}/>
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
          className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-white bg-blue-800 border rounded-lg hover:bg-green-500"
        >
          Contact Us
        </button>
      </div>

        
    </div>
  )
}

export default NavBar 
import { useNavigate } from "react-router-dom";

const navbarItems = ["Home", "Solution", "Pricing", "Support", "Resources", "Blog", "Signup/Login"]

const NavBar = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between py-2 px-10 shadow-lg">
        <div>
            <img src="./Logo.webp" alt="logo" height={150} width={150}/>
        </div>

      <div className="hidden md:flex bg-secondary">
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
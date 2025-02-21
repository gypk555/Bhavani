import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
      alert("Logged out successfully!");
      Navigate("/");
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

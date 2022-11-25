import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function HomeButton() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      <Button variant="contained" onClick={handleSubmit}>Home</Button>
    </div>
  );
}
export default HomeButton;

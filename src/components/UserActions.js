import toggle from "./toggle";
import Button from "@mui/material/Button";
function UserActions(props) {
    const handleonClick = () => {
      props.setColor(toggle(props.color));
      props.setCount(props.count + 1);
    };
  
    return <Button variant="contained" color="success" onClick={handleonClick}>Click Here to React</Button>;
  }

  export default UserActions;
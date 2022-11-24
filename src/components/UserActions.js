import toggle from "./toggle";
function UserActions(props) {
    const handleonClick = () => {
      props.setColor(toggle(props.color));
      props.setCount(props.count + 1);
    };
  
    return <button onClick={handleonClick}>Click Here to React</button>;
  }

  export default UserActions;
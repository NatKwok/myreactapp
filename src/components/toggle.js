function toggle(color) {
    if (color === "blue") {
      return "red";
    } else if (color === "red") {
      return "green";
    } else if (color === "green") {
      return "blue";
    }
  }

  export default toggle;
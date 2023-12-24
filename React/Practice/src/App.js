import SearchButton from "./SearchButton.js";
import SearchInput from "./SearchInput.js";
import { useRef } from "react";
import useWindowsSize from "./useWindowsSize.js";

export default function Page() {
  const [Width, Height] = useWindowsSize();
  let aaa = useRef(null);
  const handleClick = () => {
    console.log(Width, Height);
  };
  return (
    <div ref={aaa}>
      <p>this is paragraph</p>
      <button onClick={handleClick}>Get Width and Height</button>
    </div>
  );
}

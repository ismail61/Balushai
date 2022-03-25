import Item from "../component/body/Item";
 import LoadMore from "../component/body/LoadMore";
import Mainbody from "../component/body/MainBody";
import Slider from "../component/body/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Item /> 
      <Mainbody />
      <LoadMore />
    </>
  );
}

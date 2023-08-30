import Image from "next/image";
import img1 from "/public/images/tree-2.jpg";

export default function Home() {
  return (
      <>
        <h1>WelCome</h1>
        Hello, WEB!!
        {/* 해당 이미지를 따로 import, 하지 않으면 width, height를 반드시 지정해야 함 */}
        <p><Image src="/images/tree-1.jps" width={100} height={100}/></p>
        <p><Image src={img1} alt="" width={100} height={100}/></p>
      </>
  )
}
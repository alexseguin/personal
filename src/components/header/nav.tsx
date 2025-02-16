import Image from "next/image";
import me from "./pixel_me.png";

export default function Nav() {
  return (
    <div className="flex items-center justify-start w-full ml-4">
      <Image className="shrink-y" height={1} width={75} src={me} alt="Pixellated me!" />
      <h1 className="text-xl text-alexMid flex-grow">Alex Seguin</h1>
    </div>
  );
}

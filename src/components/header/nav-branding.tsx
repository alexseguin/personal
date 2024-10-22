import Image from "next/image";
import me from "./pixel_me.png";

export default function NavBranding() {

    return (

        <div className="flex items-center px-2">
        <Image height={100} width={100} src={me} alt="Pixellated me!" />
        <div className="text-center">
            <h1 className="text-2xl pt-4 text-alexMid mx-2">Alex Seguin</h1>
            <hr className="border-1 border-alexSemiDark"></hr>
            <span className="text-xs text-alexSemiMid">webdev, hobby gamedev</span>
        </div>
      </div>
    )
}
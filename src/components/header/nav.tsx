import NavBranding from "./nav-branding";

export default function Nav() {
  return (
    <div>
      <NavBranding />

      <div className="border-2 border-alexDark p-[0.15rem]  max-w-[22rem]">
        <div className="
        border-2 border-alexDark 
        p-4 
        bg-white
        text-alexSemiMid
        text-center
        flex flex-col gap-2
        ">
          <a>about</a>
          <hr/>
          <a>projects</a>
          <hr/>
          <a>links</a>
        </div>
      </div>
    </div>
  );
}

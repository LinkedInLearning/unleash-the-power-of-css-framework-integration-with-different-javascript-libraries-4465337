import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";


function Nav() {
    const items = [
        {
          label: "Home",
          url: "https://hello.com"
        },
        {
          label: "About",
        },
        {
          label: "Get In Touch",
        },
      ];
      
      const start = (
        <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png"
          height="40" className="mr-2"></img>
      );
      const end = <InputText placeholder="Search" type="text" className="w-full" />;
      
  return (
    <div className="card">
      <Menubar model={items} start={start}  end={end} />
    </div>

  )
}

export default Nav

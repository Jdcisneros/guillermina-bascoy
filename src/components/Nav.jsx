
import Menu from "./Menu";

function Nav() {


  return (
    <div className="fixed top-0 z-40 w-full bg-zinc-50 ">
      <div className="flex justify-between items-center py-2 px-5 w-full mx-auto">
        <h2 className="flex flex-row px-2 text-stone-900 text-xl lg:text-3xl font-bold">
          Guillermina Bascoy
        </h2>
       
        <Menu />
      </div>
    </div>
  );
}

export default Nav;
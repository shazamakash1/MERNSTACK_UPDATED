import { NavLink, Outlet } from "react-router-dom";
import { GiAbstract019 , GiSuitcase } from "react-icons/gi";
import { SiHomebridge } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";

export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/contact"> <GiSuitcase /> Contacts </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users">
                  <GiAbstract019 /> Users
                </NavLink>
              </li>
              <li> <NavLink to="/"> <SiHomebridge /> Home </NavLink></li>
              <li> <NavLink to="/service">  <MdMiscellaneousServices /> Services </NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

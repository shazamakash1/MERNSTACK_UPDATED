import { NavLink, Navigate, Outlet } from "react-router-dom";
import { GiAbstract019, GiSuitcase } from "react-icons/gi";
import { SiHomebridge } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("Admin layout ", user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/contact">
                  <GiSuitcase /> Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users">
                  <GiAbstract019 /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <SiHomebridge /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <MdMiscellaneousServices /> Services{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

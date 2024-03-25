import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contactData, setContactData] = useState([]);

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      //   console.log('Contact Data',data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Contact Data</h1>
        </div>
        <div className="container admin-users">
          {contactData.map((currContactData, index) => {
            const { username, email, message } = currContactData;
            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn">Delete</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

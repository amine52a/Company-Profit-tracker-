import  { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./Profile.css";
import amine from "../image/a8612bd2-5db3-44a2-a3ac-21bf5eb59408.jpg";
import { Edit } from "@mui/icons-material"; // Importing the edit icon
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "January", Total: 0  },
    { name: "February", Total: 0 },
    { name: "March", Total: 1100 },
    { name: "April", Total: 200 },
    { name: "May", Total: 600 },
    { name: "June", Total: 700 },
  ];
  
  const aspect = 2;
  

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [userInfo, setUserInfo] = useState({
    name: "Amine Abdellah",
    email: "amine@Esprit",
    phone: "+216 96 618 510",
    address: "123 Street, City, Country",
    country: "Tunis",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false); // Exit edit mode after saving
    // You can add code here to save the changes to a backend or local storage
  };

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="Body">
          <Navbar />
          <div className="conten">

            <div className="yasar">
              <h4>Information</h4>
              <div className="profile-info">
                <div className="together">
                  <img
                    src={amine}
                    alt="Amine Abdellah"
                    className="avatar"
                  />
                  <h2>{userInfo.name}</h2>
                </div>

                <div className="user-details">
                  <div className="detail">
                    <span>Email: </span>
                    {isEditing ? (
                      <input
                        type="text"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{userInfo.email}</span>
                    )}
                  </div>
                  <div className="detail">
                    <span>Phone: </span>
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{userInfo.phone}</span>
                    )}
                  </div>
                  <div className="detail">
                    <span>Address: </span>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={userInfo.address}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{userInfo.address}</span>
                    )}
                  </div>
                  <div className="detail">
                    <span>Country: </span>
                    {isEditing ? (
                      <input
                        type="text"
                        name="country"
                        value={userInfo.country}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{userInfo.country}</span>
                    )}
                  </div>
                </div>

                {/* Edit Icon Button */}
                <Edit
                  className="edit-icon"
                  onClick={handleEditClick}
                  style={{ cursor: "pointer" }}
                />
                {isEditing && (
                  <button className="save-button" onClick={handleSave}>
                    Save
                  </button>
                )}
                {isEditing && (
                  <button
                    className="cancel-button"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                )}

              </div>
            </div>
            <div className="yamin">


          <div className="tit"> Money Generated</div>
          <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart
              width={630}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="gray" />
              <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#total)"
              />
            </AreaChart>
          </ResponsiveContainer>
      </div>

            </div>
 <div className=""> mmmm </div>
          </div>
          
        </div>
    </>
  );
}

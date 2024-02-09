import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
import { logtoggle } from "../contexts/logtoggle";

const Logout = () => {
    const navigate = useNavigate();
    const {setLoggedIn} = useContext(logtoggle);

    const handleClick = async () => {
        const id = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))._id;
        const { status } = await axios.get(`${logoutRoute}/${id}`);
        if (status === 200) {
            localStorage.clear();
            setLoggedIn(false);
            navigate("/login");
        }
    };

    return (
        <Button onClick={handleClick}>
            <BiPowerOff />
        </Button>
    );
}


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #4e0eff;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;

export default Logout;

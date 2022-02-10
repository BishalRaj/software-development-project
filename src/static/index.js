import { AiFillProject } from "react-icons/ai";
import { FaChartPie, FaUsers } from "react-icons/fa";
import { MdOutlineWaterfallChart } from "react-icons/md";

export const color = {
  default: "#00ab55",
  hoverDefault: "#009248",
};

export const image = {
  logo: "https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvODqh5NmBnNwXs1M3EMoAJtliMohvVj9...89",
  login:
    "https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg",
  register:
    "https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg",
};

export const nav = [
  { item: "Dashboard", icon: <FaChartPie /> },
  { item: "About", icon: <FaUsers /> },
  { item: "Projects", icon: <AiFillProject /> },
  { item: "Skills", icon: <MdOutlineWaterfallChart /> },
];

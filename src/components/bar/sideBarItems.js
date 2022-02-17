import { Apps, AssignmentInd, ContactMail, Home } from "@material-ui/icons";
import HomePage from "../../pages/user/home";
import ProfilePage from "../../pages/user/profile";
export const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPage: <HomePage />,
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Profile",
    listPage: <ProfilePage />,
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPage: "",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPage: "",
  },
];

import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Top">
        <div className="LogoContainer">
          <span className="Logo">Amine Abdellah</span>
        </div>
        <hr />
      </div>
      <div className="Middle">
        <ul className="side">
          <span>Main</span>
          <li>
            <Link to="/"  className="link">
            <DashboardIcon className="icon" />
            <span>Home</span>
            </Link>
          </li>
          <span>List</span>
          <li>
            <Link to="/Users" className="link">
              <Person2Icon className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Usefull</span>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <span>Service</span>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <span>User</span>
          <li>
            <Link to="/Profile"  className="link">
            <Person2Icon className="icon" />
            <span>Profile</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Log-Out</span>
          </li>
        </ul>
      </div>
      <div className="Bottom">
        <span>color</span>
      </div>
    </div>
  );
}

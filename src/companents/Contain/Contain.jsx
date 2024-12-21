import './Contain.css';
import Person2Icon from '@mui/icons-material/Person2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Contain({ type }) {
  let data;

  const amount = 100; 
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Person2Icon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <AttachMoneyIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      data = {
        title: "UNKNOWN",
        isMoney: false,
        link: "No details available",
        icon: <Person2Icon className="icon" style={{ color: "gray" }} />,
      };
      break;
  }

  return (
    <div className="body1">
      <div className="left">
        <span className="titre">{data.title}</span>
        <span className="Num">
          {data.isMoney ? `$${amount}` : amount}
        </span>
        <span className="all">{data.link}</span>
      </div>
      <div className="right">
        <div className="pource">{diff}%</div>
        {data.icon}
      </div>
    </div>
  );
}

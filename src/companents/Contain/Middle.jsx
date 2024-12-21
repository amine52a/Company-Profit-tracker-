import './Middle.css';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200  },
  { name: "February", Total: 800 },
  { name: "March", Total: 1800 },
  { name: "April", Total: 600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const aspect = 2;

export default function Middle() {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Revenue</h1>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">
            Previous transactions processing. Last payments may not be included.
          </p>
        </div>
      </div>
      
      <div className="right1">
        <div className="chart">
          <div className="title">Revenue Overview</div>
          <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart
              width={780}
              height={250}
              data={data}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
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
    </>
  );
}

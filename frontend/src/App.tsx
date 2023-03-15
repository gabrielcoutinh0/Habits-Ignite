import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";
import "./styles/global.css";
import "./lib/dayjs";

export function App() {
  return (
    <div className="w-screen lg:h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 py-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}

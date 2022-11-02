import {BrowserRouter, Routes, Route} from "react-router-dom";


import {StockOverviewPage} from "./pages/StockOverviewPage";
import {StockDetailPage} from "./pages/StockDetailPage";
import './App.css';
import {WatchListContextProvider} from "./context/WatchListContext";

  export default function App() {
	  return (
		  <main className="container">
		{/* обертывая приложение в WatchListContextProvider мы позвололяем рвзличным компонентам обмениваться данными между собой в частности
		 WatchList формируемый в AutoComplete а используемый в  StockList*/}
		  	<WatchListContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<StockOverviewPage/>} />
						<Route path="/detail/:symbol" element={<StockDetailPage/>}/>
					</Routes>
				</BrowserRouter>
			</WatchListContextProvider>
		  </main>
	  );
  };
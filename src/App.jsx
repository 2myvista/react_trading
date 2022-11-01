import {BrowserRouter, Routes, Route} from "react-router-dom";


import {StockOverviewPage} from "./pages/StockOverviewPage";
import {StockDetailPage} from "./pages/StockDetailPage";
import './App.css';
import {WatchListContextProvider} from "./context/WatchListContext";

// finnhub api cd40giaad3ibc23m70h0cd40giaad3ibc23m70hg


  export default function App() {
	  return (
		  <main className="container">
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

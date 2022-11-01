import {AutoComplete} from "../components/AutoComplete";
import {StockList} from "../components/StockList";
import trading from "../logo.svg";

export const StockOverviewPage = () => {
  return <div>
  	<div className="text-center"> <img src={trading} style={{width: "30%"}}/></div>
  	<AutoComplete/>
  	<StockList/>

  </div>
}
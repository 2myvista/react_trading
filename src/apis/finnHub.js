import axios from "axios";

const TOKEN = "cd40giaad3ibc23m70h0cd40giaad3ibc23m70hg";


export default axios.create({
	baseURL: "https://finnhub.io/api/v1",
	params: {
		token:TOKEN
	}
})
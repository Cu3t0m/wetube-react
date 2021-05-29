import axios from "axios";
import React, { useState } from "react";
import SearchResult from "./SearchResult";
import { SEARCH_URL } from "../AppConstant";

const Search = () => {
	// console.log("search.js loaded");
	const [keyword, setKeyword] = useState("funny dog videos");
	const [videos, setVideos] = useState([]);

	const requestSearch = () => {
		console.log("submited");
		axios
			.get(`${SEARCH_URL}&q=${keyword}`)
			.then((res) => {
				console.log(res);
				const { items } = res.data;
				setVideos(items);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="search-area">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					requestSearch();
				}}
			>
				<label htmlFor="keyword">
					Search
					<input
						type="text"
						id="keyword"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</label>
				<button>Submit</button>
			</form>
			<SearchResult videos={videos} />
		</div>
	);
};

export default Search;

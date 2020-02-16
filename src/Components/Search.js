import React, { Component } from "react";

class Search extends Component {
	render() {
		return (
			<div id="search-block">
				<input
					type="text"
					value={this.props.query}
					onChange={this.props.onChange}
					onKeyPress={e => {
						if (e.key === "Enter") {
							this.props.onClick();
						}
					}}
					placeholder="Search by author, title, etc..."
				/>
				<button id="search-btn" onClick={this.props.onClick}>
					Search
				</button>
				<div
					className="clear"
					style={{
						display: this.props.query.length > 0 ? "block" : "none"
					}}
					onClick={this.props.onClear}
				>
					<button id="clear-btn">Clear</button>
				</div>
			</div>
		);
	}
}

export default Search;

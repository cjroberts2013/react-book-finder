import React, { Component } from "react";
import Book from "./Book";

class Books extends Component {
	render() {
		if (this.props.loading) {
			return (
				<div className="preloader">
					<div className="preloader__text">Content is loading...</div>
				</div>
			);
		} else if (this.props.volumes.length > 1) {
			return this.props.volumes.map((book, id) => (
				<Book
					key={id}
					title={book.title}
					link={book.link}
					author={book.author}
					imgLink={book.imgLink}
					imgAlt={book.title}
					publisher={book.publisher}
					published={book.published}
					desc={book.desc}
					averageRating={book.averageRating}
					pageCount={book.pageCount}
					category={book.category}
				/>
			));
		} else {
			return <div className="flash-info">Nothing to show...</div>;
		}
	}
}

export default Books;

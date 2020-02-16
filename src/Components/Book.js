import React, { Component } from "react";

class Book extends Component {
	render() {
		const {
			title,
			link,
			imgLink,
			imgAlt,
			author,
			publisher,
			published,
			desc,
			pageCount,
			category,
			averageRating
		} = this.props;
		return (
			<div className="book">
				<div className="book__title">
					<h2>
						<a href={link} rel="noopener noreferrer" target="_blank">
							{title}
						</a>
					</h2>
				</div>
				<div className="book__secondary">
					<div className="book__img-block">
						<img src={imgLink} alt={imgAlt} className="book__img" />
					</div>

					<div className="book__desc">
						<div className="book__field" title="author">
							<strong>Author:</strong> {author || "Not Labeled"}
						</div>
						<div className="book__field">
							<strong>Publisher:</strong> {publisher}
						</div>
						<div className="book__field">
							<strong>Published:</strong> {published || "n/a"}
						</div>

						<div className="book__field">
							<strong>Rating:</strong> {averageRating || "n/a"}
						</div>
						<div className="book__field">
							<strong>Page Count:</strong> {pageCount || "n/a"}
						</div>
						<div className="book__field">
							<strong>Categories:</strong> {category || "n/a"}
						</div>
						<div className="book__field">
							<strong>Description:</strong>
							{desc}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Book;

import React from "react";

const QuestionsNavContent = props => {
	return (
		<ul className="list-inline nav-list row mb-0">
			<li className="pull-left hidden-nav">
				<a className="" href="index.html">
					<image src="carrot_2.png" className="navbar-logo" alt="logo" />
				</a>
			</li>
			<li className="padding-3">
				<a className="nav-link" href="#">Recent</a>
			</li>
			<li className="padding-3">
				<a className="nav-link" href="#">Most Answered</a>
			</li>
			<li className="padding-3">
				<a className="nav-link" href="#">Most Commented</a>
			</li>
			<li className="padding-3 ">
				<a className="nav-link" href="popular.html">Popular</a>
			</li>
			<li className="padding-3">
				<div className="">
					<form className="form-inline my-sm-0">
						<input
							className="form-control mr-sm-2 nav-search-bar"
							type="search"
							placeholder="Search"
						/>
					</form>
				</div>
			</li>
			<li className="nav-item">
				<button
					type="button"
					className="btn btn-success btn ask-button"
					data-toggle="modal"
					data-target="#new_question"
				>
					Ask a Question
				</button>
			</li>
		</ul>
	);
};

export default QuestionsNavContent;
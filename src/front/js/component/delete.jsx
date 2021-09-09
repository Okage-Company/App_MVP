import React from "react";
import "../../styles/delete.scss";

const Delete = () => {
	return (
		<div className="deleteContainer">
			<div className="deleteButton" onClick={() => alert("account deleted")}>
				DELETE
			</div>
		</div>
	);
};

export default Delete;

import React from "react";
import Card from "react-bootstrap/Card"



const Task = (props) => {
	return (
		<Card className="m-2" style={{ width: '18rem' }}>
		<Card.Body>
			<Card.Title style={{ fontWeight: "bold"} }>{props.name}</Card.Title>
			<Card.Text style={{ fontWeight: "bold"} }>
			⏳ {props.duration} <br />
			📆 {props.date}
			</Card.Text>
			<Card.Text 
				onClick={() => {props.DeleteTask(props.id)}}
				className="d-flex justify-content-end" 
				style={{textDecoration: "None", cursor: "pointer"}}>❌</Card.Text>
		</Card.Body>
	</Card>
	);
}

export default Task
import React, { Component } from "react"

import Page from '../wrappers/Page'
import Task from "../components/Task/Task"
import Alert from "react-bootstrap/Alert";
import CreateTaskForm from "../components/CreateTaskForm/CreateTaskFrom";

class Tasks extends Component {
	constructor() {
		super()
		this.state = {
			data: [
				{ taskName: "Task 1", time: "3h", date: "13.1.22 12:45" },
				{ taskName: "Task 2", time: "1h", date: "15.1.22 12:45" },
				{ taskName: "Task 3", time: "1h", date: "16.1.22 12:45" },
				{ taskName: "Task 4", time: "6h", date: "11.1.22 12:45" },
				{ taskName: "Working on wagner task", time: "2d", date: "13.1.22 12:45" },
				{ taskName: "Task 6", time: "4d", date: "15.1.22 12:45" },
				{ taskName: "Task 7", time: "3h", date: "12.12.22 12:45" },
				{ taskName: "Task 8", time: "1h", date: "12.12.22 12:45" },
				{ taskName: "Task 9", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Task 9", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "2d", date: "13.1.22 12:45" },
				{ taskName: "Task 6", time: "4d", date: "15.1.22 12:45" },
				{ taskName: "Task 7", time: "3h", date: "12.12.22 12:45" },
				{ taskName: "Task 8", time: "1h", date: "12.12.22 12:45" },
				{ taskName: "Task 9", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Task 9", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Working on wagner task", time: "1h", date: "12.8.22 12:45" },
				{ taskName: "Task 10", time: "5h", date: "11.6.22 12:45" }
			],
			deletepopup: 0,
			showForm: false,
			newTaskForm: {
				taskName: "",
				taskTime: "30m"
			}
		}
	}

	async DeleteTask(id) {
		console.log(id)
		this.setState((prevState) => {
			return {
				...prevState,
				data: prevState.data.filter((item, index) => index !== id),
				deletepopup: (prevState.deletepopup + 1)
			}
		})
		setTimeout(() => {
			this.setState((prevState) => {
				return { ...prevState, deletepopup: (prevState.deletepopup - 1) }
			})
		}, 2000)
	}

	handleCloseForm = () => {
		this.setState(prevState => { return { ...prevState, showForm: false } })
	}
	handleShowForm = () => {
		this.setState(prevState => { return { ...prevState, showForm: true } })
	}

	handleCreateTask = () => {
		console.log("Start")
		this.setState((prevState) => {
			return {
				...prevState,
				data: [...prevState.data, { taskName: prevState.newTaskForm.taskName, time: prevState.newTaskForm.taskTime, date: "13.1.22 12:45" }],
				newTaskForm: { taskName: "", taskTime: "30m" }

			}
		})
		this.handleCloseForm()
	}

	handleFormTaskChange = (event) => {
		this.setState((prevState) => {
			return {
				...prevState,
				newTaskForm: {
					taskTime: prevState.newTaskForm.taskTime,
					taskName: event.target.value
				}
			}
		})
	}
	handleFormTimeChange = (event) => {
		this.setState((prevState) => {
			return {
				...prevState,
				newTaskForm: {
					taskTime: event.target.value,
					taskName: prevState.newTaskForm.taskName
				}
			}
		})
	}

	render() {
		return (
			<Page>
				<div className="row justify-content-between mt-5">
					<h1 className="p-2 col-2" style={{ fontFamily: "fantasy" }}>Tasks</h1>
					<button onClick={this.handleShowForm} type="button" className="col-1 d-block pr-3 btn btn-purple h-50" style={{ marginRight: "5%", width: "150px", height: "50px !important", backgroundColor: "#683ba4", color: "white" }}>Create Task</button>
					<CreateTaskForm show={this.state.showForm} handleClose={this.handleCloseForm} handleCreate={this.handleCreateTask.bind(this)}
						timeChange={this.handleFormTimeChange.bind(this)} nameChange={this.handleFormTaskChange.bind(this)} />
				</div>
				<div className="d-flex" style={{ flexFlow: "row wrap", marginTop: "30px" }}>
					{[
						this.state.data.map((item, index) => {
							return (
								<Task duration={item.time} date={item.date} name={item.taskName} key={index} DeleteTask={this.DeleteTask.bind(this)} id={index} />
							)
						})
					]}
				</div>
				<div>
					<Alert
						style={{ position: "absolute", right: "45%", bottom: "5px", opacity: this.state.deletepopup, transition: "500ms" }}
						variant={"danger"}
					>Item deleted successfully</Alert>
				</div>
			</Page>
		)
	}
}

export default Tasks
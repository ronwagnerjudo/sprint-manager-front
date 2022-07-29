import React, { Component } from "react"

import Page from '../wrappers/Page'
import Task from "../components/Task/Task"
import Alert from "react-bootstrap/Alert";
import CreateTaskForm from "../components/CreateTaskForm/CreateTaskFrom";
import axios from "axios";

axios.defaults.withCredentials = true


class Tasks extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			deletepopup: 0,
			showForm: false,
			newTaskForm: {
				task_name: "",
				task_time: "1"
			}
		}
	}

	componentDidMount() {
		this.GetTasks();
	}

	async GetTasks() {
		axios.get("http://localhost/api/tasks-api/all").then((resp) => {
			let tasks = resp.data.tasks
			this.setState((prevState) => {
				return {
					...prevState,
					data: tasks,
					loading: false
				}
			})
		}).catch((err) => {
			console.error("Unable to fetch tasks from API...")
			console.error(err)
		})
	}

	async DeleteTask(id) {
		axios.delete("http://localhost/api/tasks-api/delete", {data: {id: this.state.data[id].id}}).then((resp) => {
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
		}).catch((err) => {
			console.error("Unable to delete task...")
			console.error(err)
		})
	}

	handleCloseForm = () => {
		this.setState(prevState => { return { ...prevState, showForm: false } })
	}
	handleShowForm = () => {
		this.setState(prevState => { return { ...prevState, showForm: true } })
	}

	handleCreateTask = async () => {
		axios.post("http://localhost/api/tasks-api/add", {task_name: this.state.newTaskForm.task_name, task_time: this.state.newTaskForm.task_time}).then((resp) => {
			this.setState((prevState) => {
				return {
					...prevState,
					newTaskForm: {
						task_name: "",
						task_time: "1"
					}
				}
			})
			this.GetTasks()
		})
		
		this.handleCloseForm()
	}

	handleFormTaskChange = (event) => {
		this.setState((prevState) => {
			return {
				...prevState,
				newTaskForm: {
					task_time: prevState.newTaskForm.task_time,
					task_name: event.target.value
				}
			}
		})
	}
	handleFormTimeChange = (event) => {
		this.setState((prevState) => {
			return {
				...prevState,
				newTaskForm: {
					task_time: event.target.value,
					task_name: prevState.newTaskForm.task_name
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
								<Task duration={`${item.task_time}h`} date={item.task_start_datetime} name={item.task_name} key={index} DeleteTask={this.DeleteTask.bind(this)} id={index} />
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

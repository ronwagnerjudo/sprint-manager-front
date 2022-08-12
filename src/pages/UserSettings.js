import React, { Component, forwardRef } from "react"
import Page from "../wrappers/Page"
import { Row, Col, Form, Button } from "react-bootstrap"
import settingsImage from '../images/settings.svg'
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"

const styles = {
	container: {
		height: "100%",
		alignItems: "center",
		fontFamily: "system-ui",
		padding: "50px"
	},
	image: {
		width: "600px",
		height: "700px",
		justifyContent: "center",
		alignItems: "center"
	},
	dateInput: {
		display: "block",
		width: "100%",
		padding: "0.375rem 0.75rem",
		fontSize: "1rem",
		fontWeight: "400",
		lineHeight: "1.5",
		color: "#212529",
		backgroundColor: "#fff",
		backgroundClip: "padding-box",
		border: "1px solid #ced4da",
		appearance: "none",
		borderRadius: "0.25rem",
		transition: "border-color .15s ease-in-out,box-shadow"
	}
}

const DatePicker = forwardRef(({ value, onClick }, ref) => (
	<Form.Control onClick={onClick} ref={ref} value={value} />
));

class UserSettings extends Component {
	constructor() {
		super()
		this.state = {
			workingHours: {
				from: "8:00",
				until: "17:00"
			},
			workingPref: "None",
			startDate: new Date(),
			endDate: new Date()
		}
	}

	componentDidMount() {
		this.GetSettings();
	}

	async GetSettings() {
		axios.get(`http://localhost/api/user-api/get-user-details`).then((resp) => {
			let settings = resp.data.user_details
			console.log({settings})
			let userSprintStartDate, userSprintEndtDate
			userSprintStartDate = Date.parse(settings.userSprintStartDate)
			userSprintEndtDate = Date.parse(settings.userSprintEndtDate)
			userSprintStartDate = new Date(userSprintStartDate)
			userSprintEndtDate = new Date(userSprintEndtDate)
			if (settings.userSprintStartDate.split("/").length == 3) {
			  console.log("After")
			  const listStartDate = settings.userSprintStartDate.split("/")
			  const listSEndDate = settings.userSprintEndtDate.split("/")
			  userSprintStartDate = new Date(`${listStartDate[1]} ${listStartDate[0]} ${listStartDate[2]}`)
			  userSprintEndtDate = new Date(`${listSEndDate[1]} ${listSEndDate[0]} ${listSEndDate[2]}`)
			}
			this.setState((prevState) => {
				return {
					...prevState,
					workingHours: {
						from: `${settings.userStartWorkHours}`.split(":")[0],
						until: `${settings.userEndWorkHours}`.split(":")[0]
					},
					workingPref: settings.userPreference,
					startDate: userSprintStartDate,
					endDate: userSprintEndtDate
				}
			})
		}).catch((err) => {
			console.error("Unable to fetch user settings from API...")
			console.error(err)
		})
	}

	handleStartDateChange = (date) => {
		this.setState((prevState) => {
			return { ...prevState, startDate: date }
		})
	}

	handleEndDateChange = (date) => {
		this.setState((prevState) => {
			return { ...prevState, endDate: date }
		})
	}

	handleWorkingHoursFrom = (event) => {
		this.setState((prevState) => {
			return {
				...prevState,
				workingHours: {
					from: event.target.value,
					until: prevState.workingHours.until
				}
			}
		})
	}

	handleWorkingHoursUntil = (event) => {
		this.setState((prevState) => {
			return {
				...prevState,
				workingHours: {
					from: prevState.workingHours.from,
					until: event.target.value
				}
			}
		})
	}

	handleChangeWorkPref = (event) => {
		this.setState((prevState) => {
			return {
				...prevState,
				workingPref: event.target.value
			}
		})
	}

	timeInputes = (defaultValue) => {
		const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
		const defaultVal = defaultValue.split(":").length == 2 ? defaultValue : `${defaultValue}:00`

		return ([
			list.map(item => {
				let time =  `${item}:00`
				return (
					time === defaultVal ?
						<option value={time} selected >{time}</option> :
						<option value={time}>{time}</option>
				)
			})
		])
	}

	saveSettings = () => {
		axios.post(`http://localhost/api/user-api/user-settings`, { 
			"user_preference": this.state.workingPref,
			"start_work_hours": this.state.workingHours.from.split(":")[0],
			"end_work_hours": this.state.workingHours.until.split(":")[0],
			"sprint_start_date": this.state.startDate.toLocaleDateString(),
			"sprint_end_date": this.state.endDate.toLocaleDateString()
		}).then((resp) => {
			this.GetSettings()
		})
	}

	render() {
		let start = this.state.workingHours.from.split(":").length == 2 ? this.state.workingHours.from : `${this.state.workingHours.from}:00`
		let end = this.state.workingHours.until.split(":").length == 2 ? this.state.workingHours.until : `${this.state.workingHours.until}:00`
		return (
			<Page>
				<Row style={styles.container}>
					<Col><img src={settingsImage} alt="Settings" style={styles.image} /></Col>
					<Col>
						<h2>Settings</h2>
						<Form className="p-4">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Working Hours</Form.Label>
								<Row>
									<Col>
										<Form.Select onChange={this.handleWorkingHoursFrom.bind(this)}>
											{this.timeInputes(this.state.workingHours.from)}
										</Form.Select>
									</Col>
									<Col>
										<Form.Select onChange={this.handleWorkingHoursUntil.bind(this)}>
											{this.timeInputes(this.state.workingHours.until)}
										</Form.Select>
									</Col>
								</Row>
								<Form.Text className="text-muted">
									Working hours: {start} - {end}
								</Form.Text>
							</Form.Group>
							<Form.Group className="mb-4">
								<Form.Label>Sprint Dates</Form.Label>
								<Row>
									<Col>
										<ReactDatePicker
											selected={this.state.startDate}
											onChange={(date) => this.handleStartDateChange(date)}
											selectsStart
											startDate={this.state.startDate}
											endDate={this.state.endDate}
											customInput={<DatePicker />}
										/>
									</Col>
									<Col>
										<ReactDatePicker
											selected={this.state.endDate}
											onChange={(date) => this.handleEndDateChange(date)}
											selectsEnd
											startDate={this.state.startDate}
											endDate={this.state.endDate}
											minDate={this.state.startDate}
											customInput={<DatePicker />}
										/>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group className="mb-4" controlId="formBasicPassword">
								<Form.Label className="mb-2">Schedule Preferences</Form.Label><br />
								{
									["None", "Morning", "After Noon"].map(item => {
										return (
											this.state.workingPref === item ?
												<Form.Check inline name="timePref" label={item} type="radio" value={item} onChange={this.handleChangeWorkPref.bind(this)} id={item} checked="yes" /> :
												<Form.Check inline name="timePref" label={item} type="radio" value={item} onChange={this.handleChangeWorkPref.bind(this)} id={item} />
										)
									})
								}
							</Form.Group>
							<Button onClick={this.saveSettings.bind(this)} style={{ color: "white", backgroundColor: "#683ba4", borderColor: "#683ba4" }} type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Page>
		)
	}
}

export default UserSettings
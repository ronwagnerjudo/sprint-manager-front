import React from "react"

const data = [
    {taskName: "Task 1", time: "3h",date: "13.1.22 12:45"},
    {taskName: "Task 2", time: "1h",date: "15.1.22 12:45"},
    {taskName: "Task 3", time: "1h",date: "16.1.22 12:45"},
    {taskName: "Task 4", time: "6h",date: "11.1.22 12:45"},
    {taskName: "Working on wagner task", time: "2d",date: "13.1.22 12:45"},
    {taskName: "Task 6", time: "4d",date: "15.1.22 12:45"},
    {taskName: "Task 7", time: "3h",date: "12.12.22 12:45"},
    {taskName: "Task 8", time: "1h",date: "12.12.22 12:45"},
    {taskName: "Task 9", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Task 9", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "2d",date: "13.1.22 12:45"},
    {taskName: "Task 6", time: "4d",date: "15.1.22 12:45"},
    {taskName: "Task 7", time: "3h",date: "12.12.22 12:45"},
    {taskName: "Task 8", time: "1h",date: "12.12.22 12:45"},
    {taskName: "Task 9", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Task 9", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Working on wagner task", time: "1h",date: "12.8.22 12:45"},
    {taskName: "Task 10", time: "5h",date: "11.6.22 12:45"}
]

const Tasks = ()=> {
    return (
        <div className="container">
            <div className="row justify-content-between mt-5">
                <h1 className="p-2 col-2" style={{fontFamily: "fantasy"}}>Tasks</h1>
                <button type="button" className="col-1 d-block pr-3 btn btn-success h-50" style={{marginRight: "5%", width:"150px", height: "50px !important"}}>Create Task</button>
            </div>
            <div className="d-flex" style={{flexFlow: "row wrap"}}>
            {
              [
                data.map((item) =>{
                return(
                <div className="card m-4 border border-dark" style={{width: "fit-content"}}>
                    <h5 className="card-title p-4 border-bottom border-dark" style={{backgroundColor: "#2c82c1"}}>{item.taskName}</h5>
                    <div className="card-body">
                    <span className="card-text"><b>Time:</b> {item.time}</span><br />
                    <span className="card-text"><b>Date:</b> {item.date}</span><br /><br />
                    
                    <a href="#" className="btn btn-danger" style={{backgroundColor: "#c3554a", borderColor: "#c3554a"}}>DELETE</a>
                    </div>
                </div>)
                })
              ]
            }
            </div>
        </div>

    )
}

export default Tasks
import { React, useContext } from "react"
import { StorageContext } from "../App"
import { useForm } from "react-hook-form"
import EventList from './EventList'
import './eventForm.css'


export default function EventForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const { list, setList } = useContext(StorageContext)
    const onSubmit = (data) => { setList([...list, data]); reset() }

    return (
        <div id="formAndList">
            <div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="topStyleHomePage">
                    <div className="inputsDiv">
                        <label >Name your event</label>
                        <input className="formInput" type="text"
                            {...register("name", { required: true })}
                        />
                    </div>

                    <div className="inputsDiv">
                        <label >Start date</label>
                        <input className="formInput dateInput" type="date"
                            {...register("startDate", { required: true })}
                        />
                    </div>

                    <div className="inputsDiv">
                        <label >End Date</label>
                        <input className="formInput dateInput" type="date"
                            {...register("endDate",)}
                        />
                    </div>

                    <div className="inputsDiv">
                        <label > Description</label>
                        <input className="formInput" type="text"
                            {...register("description", { required: true })}
                        />
                    </div>
                </div>


                <h3 id="buttonStyleHomePage">
                    <input id="submitButton" type="submit" />
                </h3>

                <h5 id="errorsForm">
                    {errors.name &&
                        <h3 className="errors">Name is required</h3>}
                    {errors.startDate &&
                        <h3 className="errors">Start date is required</h3>}
                    {errors.description &&
                        <h3 className="errors">Description is required</h3>}

                </h5>

            </form>

            <EventList />

        </div>
    )
}
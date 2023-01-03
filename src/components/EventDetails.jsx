import { useContext, React, useState, } from "react"
import { StorageContext } from "../App"
import { NavLink, useParams } from "react-router-dom"
import EventForm from "./EventForm"
import EditEventForm from "./EditEventForm"
import './editEventForm.css'
import './eventDetails.css'


export default function EventDetails() {

    const params = useParams()
    const { list, showEditForm, setShowEditForm} = useContext(StorageContext)

    return (
        <div>
            {showEditForm &&
                <div id='halfWhiteDiv'>
                    <div id="editEventDiv">
                        <EditEventForm index={params?.index} />
                    </div>
                </div>
            }

            <div id="eventDetails">

                <h2>
                    {list[params.index]?.name}
                </h2>

                <p>
                    Start date: {list[params.index]?.startDate}
                </p>

                <p>
                    End date: {list[params.index]?.endDate}
                </p>

                <p id="descriptionText">
                    Description: {list[params.index]?.description}
                </p>


                <h2 id="navlinksDiv">
                    <NavLink className="navlink" to='/' element={<EventForm />}>
                        Back to list of events
                    </NavLink>


                    <button  className="navlink editButton" onClick={() => setShowEditForm(true)}>
                        Edit event
                    </button>
                </h2>

            </div>

        </div>
    )
}
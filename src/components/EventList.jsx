import { useContext, React, } from "react"
import { StorageContext } from "../App"
import { NavLink } from "react-router-dom"
import './eventlist.css'

export default function EventList() {

    const { list, setList } = useContext(StorageContext)
    const deleteItem = (itemName) => {
        setList(list.filter(item =>
            item.name !== itemName))
    }

    return (
        <div>
            <ul>
                {list.map((event, index) =>

                    <li key={index} >
                        <hr />
                        <h3 id="listNameInIt">{event.name}</h3>
                        <p>Start date: {event.startDate}</p>
                        <p>End date: {event.endDate}</p>
                        <p className="descriptionText">Description: {event.description}</p>

                        <div id="listButtons">
                            <NavLink className="navlink" to={`/details/${index}`} >
                                Details
                            </NavLink>

                            <a className="navlink" onClick={() => deleteItem(event.name)} >
                                Delete
                            </a>
                        </div>

                    </li>)}
            </ul>
        </div>
    )
}
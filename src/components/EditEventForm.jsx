import { React, useContext } from "react"
import { StorageContext } from "../App"
import { useForm } from "react-hook-form"
import './eventForm.css'


export default function EditEventForm({ index }) {

    const { list, setList, setShowEditForm } = useContext(StorageContext)

    const event = list[index]
    const { register, handleSubmit, reset } = useForm(
        {
            defaultValues: {
                name: event?.name,
                startDate: event?.startDate,
                endDate: event?.endDate,
                description: event?.description,

            }
        }
    )

    const onSubmit = (data) => {
        const temp = list
        temp[index] = data
        setList([...temp])
        reset()
        setShowEditForm(false)
    }

    return (
        <div id="formAndList">

            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="formInput" type="text"
                    {...register("name",)}
                />

                <input className="formInput dateInput" type="date"
                    {...register("startDate",)}
                />

                <input className="formInput dateInput" type="date"
                    {...register("endDate",)}
                />

                <input className="formInput" type="text"
                    {...register("description",)}
                />

                <input id="submitButton" type="submit"  />

            </form>

        </div>
    )
}
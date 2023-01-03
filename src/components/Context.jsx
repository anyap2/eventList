import { useState } from "react"

export default function Context() {
    const [ submit, setSubmit ] = useState()
    const [list, setList]=useState([])
    const [editList, setEditList]= useState([])   
    const [showEditForm, setShowEditForm] = useState(false)
 
    return {
        submit, list, setList, editList, setEditList,showEditForm, setShowEditForm
    }
}


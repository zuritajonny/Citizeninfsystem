import {useNavigate} from 'react-router-dom'
import { Delete, Edit, Trash } from 'react-feather';


const Person = ({person,setPersona,deletePersona}) => {
    let navigate = useNavigate();

   const {nombre, email, cedula, edad, estado, id} = person

    const handleEdit = () => {
        setPersona(person)
        navigate('/form')
    }


   const handleDelete = () => {
    const response = confirm('Do you want to delete this voter?')
    if(response){
        deletePersona(id)
    }
   }

 


  return (
    <div className="information-card">
        <p className="wrapper subtitle">{nombre}</p>
        <p className="wrapper subtitle">Email: {""}<span className="ident">{email}</span></p>
        <p className="wrapper subtitle">ID card number: {""}<span className="ident">{cedula}</span></p>
        <p className="wrapper subtitle">Age: {""}<span className="ident">{edad}</span></p>
        <p className="wrapper subtitle">State of Residence: {""}<span className="ident">{estado}</span></p>

        <div className="button-container">
            <button
                type="button"
                className="button fbutton"
                onClick={handleEdit}
                
            >
                <Edit/>
            </button>
            <button
                type="button"
                className="button sbutton "
                onClick={handleDelete}
            >
                <Trash/>
            </button>

            

        </div>

    </div>
  )
}

export default Person
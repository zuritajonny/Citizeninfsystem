import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, Navigate  } from "react-router-dom";
import api from "../api/voters"
import { UserPlus, List, Save } from 'react-feather';


const Form = ({personas,setPersonas,persona,setPersona}) => {
    const navigate = useNavigate();
    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [cedula,setCedula] = useState('');
    const [edad,setEdad] = useState('');
    const [estado,setEstado] = useState('');

  

    useEffect(() => {
        if(Object.keys(persona).length>0){
            setNombre(persona.nombre)
            setEmail(persona.email)
            setCedula(persona.cedula)
            setEdad(persona.edad)
            setEstado(persona.estado)
        }
    }, [persona])
    

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
    
        return random + fecha
      }


    const handleSubmit = (e) =>{
        e.preventDefault();
       if([nombre, email, cedula, edad, estado].includes('') ){
        alert("All fields are mandatory!");
        return
       } 

        const objectPersona ={
            nombre, 
            email, 
            cedula, 
            edad,
            estado,
            id: generarId()
        }
        
        if(persona.id){
            

            objectPersona.id = persona.id;
            const personasUpdated = personas.map(personasEdit => personasEdit.id === persona.id ? objectPersona : personasEdit)

          /*   const editVoter = async () => {
                const response = await api.put(`/voters/${persona.id}`, persona)
                console.log(response.data)
            }

            editVoter(); */
            
            setPersonas(personasUpdated)
            setPersona({})

        }else{ 
         /*    const request = {id: generarId(),
                 ...objectPersona}

                 const response = await api.post("/voters", request)
                  */

            objectPersona.id = generarId();
            setPersonas([...personas, objectPersona]);
        }

        

        setNombre('')
        setEmail('')
        setCedula('')
        setEdad('')
        setEstado('')

        navigate('/people');
        
    }

    
  
    return (
   
    <div className="form-container">
        <h2 className='title'>Complete the form</h2>

        <form 
            
            onSubmit={handleSubmit}
        >
            <div className="wrapper">
                
                    <label 
                        htmlFor="nombre"

                    >
                        Full name
                    
                    </label>
                    <input
                        id='nombre'
                        type='text' 
                        placeholder='What is your name?'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}



                    />
                
                    <label 
                        htmlFor="email"

                    >
                        Email
                    
                    </label>
                    <input
                        id='nombre'
                        type='text' 
                        placeholder='What is your Email?'
                        value={email}
                        onChange={e => setEmail(e.target.value)}



                    />

                <label 
                    htmlFor="cedula"

                >
                    ID card number
                </label>

                <input
                    id='cedula'
                    type='number' 
                    placeholder='Type in your ID card number'
                    value={cedula}
                    onChange={e => setCedula(e.target.value)}
                />

                <label 
                    htmlFor="edad"

                >
                    Age
                </label>

                <input
                    id='age'
                    type='number' 
                    placeholder='How old are you?'
                    value={edad}
                    onChange={e => setEdad(e.target.value)}
                />

                <label 
                    htmlFor="estado"

                >
                    State of Residence
                </label>
                <select
                        id='estado'
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                    >
                        <option value=""> -- Seleccione -- </option>
                        <option value="Amazonas"> Amazonas </option>
                        <option value="apure"> Apure </option>
                        <option value="Anzoategui"> Anzoategui </option>
                        <option value="Aragua"> Aragua </option>
                        <option value="Barinas"> Barinas </option>
                        <option value="Bolívar"> Bolívar </option>
                        <option value="Carabobo"> Carabobo </option>
                        <option value="Cojedes"> Cojedes </option>
                        <option value="Distrito Capital"> Distrito Capital</option>
                        <option value="Delta Amacuro"> Delta Amacuro </option>
                        <option value="Falcón"> Falcón </option>
                        <option value="Guarico"> Guarico </option>
                        <option value="Lara"> Lara </option>
                        <option value="Mérida"> Mérida </option>
                        <option value="Miranda"> Miranda </option>
                        <option value="Monagas"> Monagas </option>
                        <option value="Nueva Esparta"> Nueva Esparta </option>
                        <option value="Portuguesa"> Portuguesa </option>
                        <option value="Táchira"> Táchira </option>
                        <option value="Trujillo"> Trujillo </option>
                        <option value="Sucre"> Sucre </option>
                        <option value="Vargas"> Vargas </option>
                        <option value="Zulia"> Zulia </option>
                    </select>



            </div>
         

            {personas.length ? 
                <Link to='/people'>
                    <button className='button button-list'>
                        <List/>
                    </button>
                </Link>: ''
            }

            <button
                type="submit"
                className='button positionD'
                onClick={handleSubmit}
                
            >
              
            <Save/>
               
            </button>
        
            
         {/*  
             <input
                type="submit"
                className='button position'
                value="Save"
            />  */}
        </form>

        
    </div>
  )
}

export default Form
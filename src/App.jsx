import { useState,useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom";
import api from "./api/voters"
import Home from "./components/Home"
import Header from "./components/Header"
import Form from "./components/Form"
import Person from "./components/Person"
import PeopleList from "./components/PeopleList"



function App() {
  const initialPush = JSON.parse(localStorage.getItem('personas')) ?? [];

  const [personas, setPersonas] = useState(initialPush)
  const [persona, setPersona] = useState({})
  

  useEffect(() => {
    localStorage.setItem('personas', JSON.stringify( personas ))

  }, [personas])


/* //Receiving data from the local app
  const retrieveVoters = async () => {
    const response = await api.get("/voters");
    return response.data
  }

  useEffect(() => {
    const getAllVoters = async () => {
      const allVoters = await retrieveVoters();
      if(allVoters){
        setPersonas(allVoters);
      }
    }

    getAllVoters();


  }, []) */


  const deletePersona = async id => {
/*     await api.delete(`voters/${id}`); */
    const newPersonas = personas.filter(person => person.id !== id)
    setPersonas(newPersonas)
  }
  
  return (
    <>
    
    <div className="grid-container">
      
     {/*  <Form
        personas={personas}
        setPersonas={setPersonas}
        persona={persona}
      />
      <PeopleList
        personas={personas}
        setPersonas={setPersonas}
        setPersona={setPersona}
      /> */}
      
      <Routes>

      


        <Route path="/" element={<>
          <Home
            personas={personas}
          />
          </>

        }/>
        <Route path="/form" element={<>
          <Header/>
          <Form
        personas={personas}
        setPersonas={setPersonas}
        persona={persona}
        setPersona={setPersona}
        
      />
  
        </>} />
        <Route path="/people" element={
        <>
          <Header/>  
          <PeopleList 
            personas={personas}
            setPersonas={setPersonas}
            setPersona={setPersona}
            deletePersona={deletePersona}  
            />
            </>
        } />
      </Routes>

   
    </div>
    </>
  )
}

export default App

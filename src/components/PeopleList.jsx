import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Person from "./Person";
import { UserPlus, List } from 'react-feather';

const PeopleList = ({personas,setPersonas,persona,setPersona,deletePersona}) => {

    let navigate = useNavigate();

  return (
    <div>    
        {personas.length ? (
                <>
                    
                    {personas.map((person) => (
                        <Person
                            key={person.id}
                            person={person}
                            setPersona={setPersona}
                            deletePersona={deletePersona}
                        />
                    ))} 



                    
                </>


            ) : 
                <>
                   <h2 className="title">Register some voters first! </h2>

                    <p className="text-xl mb-10 mt-5 text-center">
                        
                        <span  className="text-indigo-600 font-bold"></span>
                    </p>

                </>
          }

            <button
                     type="submit"
                     className='button position'
                     
                     onClick={() => navigate('/form')}
            >
                 <UserPlus/>
            </button>
            

        {/* {personas.map((person) => (
            <Person
                key={person.id}
                person={person}
                setPersona={setPersona}
            />
        ))} */}


    </div>
  )
}

export default PeopleList
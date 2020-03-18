import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {FormControl,Paper,InputLabel,OutlinedInput,Button,TextField } from '@material-ui/core';
import '../bootstrap.css';
import '../style.css';
import { navigate,Link } from '@reach/router';

const styles = {
    paper:{
        width: "30rem", padding: "2rem",marginLeft:"23.5rem",
        height:"10rem auto",backgroundColor:"lightyellow"
    },
    input: {
        marginBottom: "1rem",margin: "0.5rem",width:"20rem"
    },
    button:{
        width:"8rem", marginLeft:"6rem"
    }
}
const AuthorForm = props =>{
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e =>{
        console.log("In OnSubmitHandler")
        e.preventDefault();
        axios.post("http://localhost:8000/api/new",{
            name,
        })
         .then(res => navigate("/"))
        // .then(res => {
        //     if(res.data.errors) {
        //         setErrors(res.data.errors);
        //     }
        //     else{
        //         navigate("/")
        //     }
        //     console.log(res)
        // })
        // .catch(err=>console.log("Error while adding author",err))
        .catch(err=>{
            const errorResponse = err.res.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    return(
        <div className="container-fluid">
            <h1>Favorite Books</h1>
           <Paper elevation={4} style={styles.paper}>
               <p><Link to="/">Home </Link> </p>
               <h3>Add new author</h3>
                <form onSubmit={onSubmitHandler}>
                {
                    errors.map((err,i) => 
                <h4 key={i}>{err}</h4>)
                }
                    <FormControl variant="outlined" style={styles.input}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Name"
                            variant="outlined"
                            onChange={e=>setName(e.target.value)}
                        />
                    </FormControl>
                    {/* <span className="text-danger">{errors.name ? errors.name.message: "" }</span> */}
                    <FormControl variant="outlined" style={styles.input}>
                        <Button type="submit" variant="contained" color="secondary" style={styles.button}>
                            Submit
                        </Button>
                        <Link to="/"> Cancel </Link>
                    </FormControl>
                </form>
            </Paper>
        </div>
    )
//End of file    
}

export default AuthorForm;
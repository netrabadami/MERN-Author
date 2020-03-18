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
const AuthorEdit = props =>{
    const [name, setName] = useState("");

    useEffect(() =>{
        axios.get("http://localhost:8000/api/"+props.id)
        .then(res =>{
            setName(res.data.name)
            console.log("name"+res.data.name)
        })
        .catch(err=>console.log("Something went wrong while editing author",err))
    },[props.id])

    const onSubmitHandler = e =>{
        console.log("In OnSubmitHandler")
        e.preventDefault();
        axios.put("http://localhost:8000/api/"+props.id,{
            name,
        })
        .then(res => navigate("/"))
        .catch(err=>console.log("Error while editing author",err))
    }

    return(
        <div className="container-fluid">
            <h1>Favorite Books</h1>
           <Paper elevation={4} style={styles.paper}>
               <p><Link to="/">Home </Link> </p>
               <h3>Edit this author</h3>
                <form onSubmit={onSubmitHandler}>
                    <FormControl variant="outlined" style={styles.input}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                         
                            variant="outlined"
                            onChange={e=>setName(e.target.value)}
                            value={name}
                        />
                    </FormControl>
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

export default AuthorEdit;
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {FormControl,Paper,InputLabel,OutlinedInput,Button,TextField } from '@material-ui/core';
import '../bootstrap.css';
import '../style.css';
import { navigate,Link } from '@reach/router';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { red } from '@material-ui/core/colors';

const styles = {
    paper:{
        width: "34rem", padding: "2rem",marginLeft:"22.5rem",
        height:"10rem auto",backgroundColor:"lightyellow"
    },
    input: {
        marginBottom: "1rem",margin: "0.5rem",width:"20rem"
    },
    button:{
        width:"8rem", marginLeft:"6rem"
    }
}

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      width:1
    },
    body: {
      fontSize: 14,
      
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 10,
    },

  });

const AuthorList = props =>{
    const [author, setAuthor] = useState([]);
    const [updatedList, setUpdatedList] = useState("");
    const classes = useStyles();

    useEffect(() =>{
        axios.get("http://localhost:8000/api")
        .then(res=>{
            setAuthor(res.data);
            setUpdatedList(!updatedList); 
        })
        .catch(err=>console.log("Something went wrong when fetching all Authors",err))
    },[updatedList]);

    const {removeFromDom} = props;
    const deleteAuthor = _id =>{
        axios.delete("http://localhost:8000/api/"+_id)
        .then(res => {
            removeFromDom(_id)
        })
        .catch(err=>console.log("something wemt wrong while deleting an author",err))
    }

    return(
        <div className="container-fluid">
        <h1>Favorite Books</h1>
       <Paper elevation={4} style={styles.paper}>
           <p><Link to="/">Home </Link></p>
           <h6><Link to="/new">Add an author </Link> </h6>
           <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell align="right">Actions Availble</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
             
              author.map((author,i) =>

                <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                    {author.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                    <Link to={"/edit/"+author._id}>EDIT </Link> |   
                    <Button onClick={e => {deleteAuthor(author._id)}} style={{color:"#007bfe"}}>Delete</Button>
                </StyledTableCell>
                </StyledTableRow>
               )
           }
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
    </div>
    )
//end of file    
}

export default AuthorList;
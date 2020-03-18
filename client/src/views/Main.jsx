import React from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import AuthorEdit from '../components/AuthorEdit';
import { Router, Link } from '@reach/router';
const Main = props =>{
    return(
        <Router>
            <AuthorForm path="new"/>
            <AuthorList path="/"/>
            <AuthorEdit path="/edit/:id" />
        </Router>

    )
}

export default Main;
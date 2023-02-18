import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import PlansList from "../components/PlansList";

const ReactRouter = () => {
    return (
        <>
            <Header />
            <Route exact path="/plans/:accountId" component={PlansList} />
        </>
    );
};

export default ReactRouter;

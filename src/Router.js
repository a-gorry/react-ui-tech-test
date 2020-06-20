import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Base from './components/layouts/Default'
import Contact from './components/views/Contact';
import Buildings from './components/views/Buildings';
import Home from './components/views/Home'
import Amenities from './components/views/Amenities'
import Conversations from './components/views/Conversations'
import Dashboard from './components/views/Dashboard'
import KnowledgeBase from './components/views/KnowledgeBase'
import NeedHelp from './components/views/NeedHelp'
import Performance from './components/views/Performance'
import Tenants from './components/views/Tenants'
import Users from './components/views/Users'
import Posts from './components/views/Posts'

function Router() {
    return(
        <Switch>
            <Route path='/' exact render={() => <Base><Home/></Base>} />
            <Route path='/dashboard' render={() => <Base><Dashboard/></Base>} />
            <Route path='/buildings' render={() => <Base><Buildings/></Base>} />
            <Route path='/posts' render={() => <Base><Posts/></Base>} />
            <Route path='/conversations' render={() => <Base><Conversations/></Base>} />
            <Route path='/amenities' render={() => <Base><Amenities/></Base>} />
            <Route path='/tenants' render={() => <Base><Tenants/></Base>} />
            <Route path='/performance' render={() => <Base><Performance/></Base>} />
            <Route path='/users' render={() => <Base><Users/></Base>} />
            <Route path='/help' exact render={() => <Base><NeedHelp/></Base>} />
            <Route path='/contact' exact render={() => <Base><Contact/></Base>} />
            <Route path='/knowledge' exact render={() => <Base><KnowledgeBase/></Base>} />
        </Switch>
    );
}

export default Router;
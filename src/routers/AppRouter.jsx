import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Todo from '../components/cookbookTodo/Todo';


class AppRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="container">
                        <Switch>
                            <Route path="/todo" component={Todo}/>                           
                        </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter;
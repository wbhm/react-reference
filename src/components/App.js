import React from 'react';
import Header from "./common/Header";
import { NavLink, Switch, Route } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import CoursesPage from "./course/CoursesPage";
import ManageCoursePage from "./course/ManageCoursePage"; //eslint-disable-line import/no-named-as-default
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/courses" component={CoursesPage} />
                    <Route exact path="/course" component={ManageCoursePage} />
                    <Route exact path="/course/:id" component={ManageCoursePage} />
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return { loading: state.ajaxCallsInProgress > 0 };
}

export default connect(mapStateToProps)(App);
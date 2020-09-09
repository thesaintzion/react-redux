import React, { Component, Fragment } from 'react';
import './Home.scss';

// Import pages
import Conversation from './conversation/Conversation';
import Users from './users/Users';
import NoticeBoard from './notice-board/NoticeBoard';

class Home extends Component {

     showReg = () => {
        // return this.props.registered ? <Login /> :  <Registration /> ;
        return null ;

    }
    render() {
        return (
            <Fragment>
    <div class="border clearfix">
        <aside>
            <div className="row no-gutters">
                <div className="notice-board-con col-4 text-center">
                <NoticeBoard className="notice-board"/>
                </div>

                <div className=" users-list-con col-8">
                <Users className="users-list p-5"/>
                </div>
            </div>

        </aside>


            {/* Main */}
            <main className="main">
            <Conversation />
            </main>
            </div>
            </Fragment>
        )
    }
}

export default Home;
           


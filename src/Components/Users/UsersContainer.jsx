import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleisFetching, toggleFollowingProgress } from "../../redux/users-reducer";
import Preloader from "../../common/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleisFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleisFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleisFetching(true);
                usersAPI.getUsers(pageNumber, this.props.pageSize)
                   .then(data => {
                this.props.toggleisFetching(false);
                this.props.setUsers(data.items);
            })
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users  totalUsersCount = {this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleisFetching, toggleFollowingProgress })(UsersContainer);
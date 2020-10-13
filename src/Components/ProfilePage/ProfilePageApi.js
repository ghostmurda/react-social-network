import React from "react";
import ProfilePage from "./ProfilePage";
import * as axios from 'axios';

class ProfilePageApi extends React.Component{
    componentDidMount() {
        const url = 'https://test-social-network-api.herokuapp.com/api/users';
        this.props.toggleLoader(true);
        let id = 1;
        if (this.props.userId !== undefined){
            id = this.props.userId;
        }
        axios.get(`${url}/profile?userId=${id}`, {withCredentials: true})
            .then(resp => {
                this.props.toggleLoader(false);
                this.props.getProfile(resp.data);
            });
    }

    render() {
        return(
            <ProfilePage
                data={this.props.data}
                isFetchingProfile={this.props.isFetchingProfile}
            />
        );
    }
}

export default ProfilePageApi;
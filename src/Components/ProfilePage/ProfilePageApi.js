import React from "react";
import ProfilePage from "./ProfilePage";
import {profilePageReq} from "../../api/api";

class ProfilePageApi extends React.Component{
    componentDidMount() {
        this.props.toggleLoader(true);
        profilePageReq(this.props.userId)
            .then(res => {
                this.props.toggleLoader(false);
                this.props.getProfile(res);
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
import React from "react";
import ProfilePage from "./ProfilePage";

class ProfilePageApi extends React.Component{
    componentDidMount() {
        this.props.onGetProfile(this.props.userId);
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
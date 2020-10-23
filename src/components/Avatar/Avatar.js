import React from "react";

function Avatar(props) {
    const basedUrl = 'https://avatars.dicebear.com/api/avataaars';
    return (
        <>
            {props.userName ?
                <img
                    className={props.avatarClassName ? props.avatarClassName : ''}
                    src={`${basedUrl}/${props.userName}.svg`}
                    alt="Avatar"
                /> : null
            }
        </>
    );
}

export default Avatar;
import React, {useRef, useState} from "react";

function ProfileDescriptionInfo(props) {
    const [infoEditMode, setInfoEditMode] = useState(false);
    const editedInfoRef = useRef();

    let changeInfoEditMode = () => {
        setInfoEditMode(!infoEditMode);
    }

    let setNewInfo = (userId, text) => {
        props.onChangeProfileInfo(userId, text);
    }

    return (
        <>
            {infoEditMode ?
                <input className="description__main-input"
                       placeholder={props.info}
                       onClick={() => {
                           if (props.userId === props.authUserId){
                               if (editedInfoRef.current.value !== ''){
                                   setNewInfo(props.userId, editedInfoRef.current.value);
                               }
                               changeInfoEditMode();
                           }
                       }}
                       onBlur={() => {
                           if (props.userId === props.authUserId){
                               if (editedInfoRef.current.value !== ''){
                                   setNewInfo(props.userId, editedInfoRef.current.value);
                               }
                               changeInfoEditMode();
                           }
                       }}
                       autoFocus={true}
                       maxLength="59"
                       ref={editedInfoRef}
                /> :
                <div className="description__main" onClick={() => {
                    if (props.userId === props.authUserId) {
                        changeInfoEditMode();
                    }
                }}>{props.info}</div>
            }
        </>
    )
}

export default ProfileDescriptionInfo;
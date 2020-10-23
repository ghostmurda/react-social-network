import React, {useRef, useState} from "react";
import './ProfilePage.css';
import Loader from "../Loader/Loader";
import PostsWall from "./PostsWall/PostsWall";
import InputForm from "../InputForm/InputForm";

function ProfilePage(props) {
    const [infoEditMode, setInfoEditMode] = useState(false);
    const editedInfoRef = useRef();

    let changeInfoEditMode = () => {
        setInfoEditMode(!infoEditMode);
    }

    let setNewInfo = (userId, text) => {
        props.onChangeProfileInfo(userId, text);
    }

    let addPost = (values) => {
        props.onProfileAddPost(props.userId, props.userName, values.postText);
        values.postText = '';
    }

    return (
        <>
            {props.isFetchingProfile ? <Loader/> :
                <div className="Profile">
                    <div className="profile">
                        <div className="profile__avatar">
                            <img src={`https://avatars.dicebear.com/api/avataaars/${props.data.name}.svg`}
                                 alt="Avatar"/>
                        </div>
                        <div className="profile__description">
                            <div className="description__name">{props.data.name}</div>
                            {infoEditMode ?
                                <input className="description__main-input"
                                       placeholder={props.data.info}
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
                                }}>{props.data.info}</div>
                            }

                            <div className="description__footer">
                                <div className="description__footer__item">
                                    <span className="item__num">{props.data.followers}</span><br/>
                                    <span className="item__name">followers</span>
                                </div>
                                <div className="description__footer__item">
                                    <span className="item__num">{props.data.posts}</span><br/>
                                    <span className="item__name">posts</span>
                                </div>
                                <div className="description__footer__item">
                                    <span className="item__num">{props.data.following}</span><br/>
                                    <span className="item__name">following</span>
                                </div>
                            </div>
                        </div>
                        <div className="profile__followers">
                            <span className="followers__title">Followers</span>
                            <span className="followers__num">{props.data.followers}</span>
                            <div className="followers__main"> </div>
                        </div>
                        <div className="profile__following">
                            <span className="followers__title">Following</span>
                            <span className="followers__num">{props.data.following}</span>
                            <div className="followers__main"> </div>
                        </div>
                        <InputForm onSubmit={addPost}
                                   fieldName={"postText"}
                                   formClassName={"profile__input"}
                                   inputPlaceholder={"What's new?"}
                                   inputClassName={"postText__input"}
                                   btnName={"Publish"}
                        />
                        <PostsWall postsData={props.data.postsData}/>
                    </div>
                </div>
            }
        </>
    );
}

export default ProfilePage;
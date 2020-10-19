import React, {useEffect, useRef, useState} from "react";
import './ProfilePage.css';
import Loader from "../Loader/Loader";
import PostsWall from "./PostsWall/PostsWall";
import {putUserInfoReq} from "../../api/api";
import {Form, Field} from 'react-final-form';

function ProfilePage(props) {
    const [infoEditMode, setInfoEditMode] = useState(false);
    const [infoProcess, setInfoProcess] = useState(false);
    const [localInfo, setLocalInfo] = useState(props.data.info);
    const editedInfoRef = useRef();
    const setInfoProcessFalse = () => setInfoProcess(false);
    const setLocalInfoFromProps = () => setLocalInfo(props.data.info);

    useEffect(() => {
        if (infoProcess) {
            putUserInfoReq(props.userId, localInfo)
                .then(res => {
                    props.data.info = res;
                    setLocalInfo(res);
                });
            setInfoProcessFalse();
        } else {
            setLocalInfoFromProps();
        }
    });

    let changeInfo = () => {
        setInfoEditMode(!infoEditMode);
    }

    let addPost = (values) => {
        alert(values.postText);
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
                                               changeInfo();
                                               if (editedInfoRef.current.value !== ''){
                                                   setLocalInfo(editedInfoRef.current.value);
                                                   setInfoProcess(true);
                                               }
                                           }
                                       }}
                                       onBlur={() => {
                                           if (props.userId === props.authUserId){
                                               changeInfo();
                                               if (editedInfoRef.current.value !== ''){
                                                   setLocalInfo(editedInfoRef.current.value);
                                                   setInfoProcess(true);
                                               }
                                           }
                                       }}
                                       autoFocus={true}
                                       maxLength="59"
                                       ref={editedInfoRef}
                                /> :
                                <div className="description__main" onClick={() => {
                                    if (props.userId === props.authUserId) {
                                        changeInfo();
                                    }
                                }}>{localInfo}</div>
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
                        <Form onSubmit={addPost}
                              validate={values => {
                                  const errors = {}
                                  if (!values.postText) {
                                      errors.postText = 'Required'
                                  }
                                  return errors
                              }}
                              render={({handleSubmit, form, submitting, pristine, values}) => (
                                  <form className="profile__input" onSubmit={handleSubmit}>
                                      <Field name="postText">
                                          {({input}) => (
                                              <input className="postText__input" {...input} placeholder="What's new?"/>
                                          )}
                                      </Field>
                                      <button className="btn" type="submit" disabled={submitting}>Publish</button>
                                  </form>
                              )}
                        />
                        <PostsWall postsData={props.data.postsData}/>
                    </div>
                </div>
            }
        </>
    );
}

export default ProfilePage;
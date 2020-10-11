import React from "react";
import LoaderImg from "../../img/loader.svg";
import './Loader.css';

function Loader(props){
    return (
        <img className={`Loader ${props.additional}`} src={LoaderImg} alt="Loading..."/>
    );
}

export default Loader;
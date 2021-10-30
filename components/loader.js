import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";

import Loader from "react-loader-spinner";
export default class App extends React.Component {
    //other logic
    render() {
        return (
            <Loader
                style={{ marginRight: "12px" }}
                type="TailSpin"
                color="#FFF"
                height={30}
                width={30}
                timeout={3000} //3 secs
            />
        );
    }
}

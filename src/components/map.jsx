import React from "react";
import {Map, YMaps} from "react-yandex-maps";

const MyMap =()=>{
    return(
        <YMaps>
            <div className="container-fluid">
                <h3 className="text-center mb-50">I'm here!</h3>
                <div className="container m-auto"  >
                    <Map width={300} height={350} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
            </div>
        </YMaps>
    )
}
export default MyMap;
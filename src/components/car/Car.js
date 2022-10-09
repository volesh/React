import React from "react";

const Car = ({car}) => {
    return (
        <div>
            {car.model}
            <hr/>
        </div>
    );
};

export {Car};
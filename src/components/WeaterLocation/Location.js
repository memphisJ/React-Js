import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => {
    //const city = props.city; // Asignacion sin usar destructuring
    //const {city} = props; // Asignacion usando destructuring
    return (<div className="locationCont">
                <h1>
                    {city}
                </h1>
            </div>);
};

Location.propTypes = {
    city: PropTypes.string.isRequired, // Prop Type String Required
}

export default Location;
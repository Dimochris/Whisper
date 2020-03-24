import React from 'react';
import Button from '../Button/Button';

const DeleteItem = (props) => {
    const type = props.type;
    const id = props.id;
    // to do Buttons
    return (
        <div  style={{textAlign:'center'}}>
            <h2>Θέλεις σίγουρα να διαγράψεις το 
                <span style={{textTransform:'capitalize'}}>{id} {type} </span>; 
            </h2>
            <Button btnType="Success" clicked={null}>OK</Button>
            <Button btnType="Danger" clicked={null}>Άκυρο</Button>
        </div>
    );
};

export default DeleteItem;
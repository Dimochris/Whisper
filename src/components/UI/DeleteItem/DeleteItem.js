import React from 'react';
import Button from '../Button/Button';

const DeleteItem = (props) => {
    const type = props.type;
    const id = props.id;
    const action = "Delete"

    return (
        <div  style={{textAlign:'center'}}>
            <h2>Θέλεις σίγουρα να διαγράψεις το 
                <span style={{textTransform:'capitalize'}}>{id} {type} </span>; 
            </h2>
            <Button btnType="Success" clicked={(id) => props.modalOk(action,id)}>OK</Button>
            <Button btnType="Danger" clicked={() => props.modalClosed()}>Άκυρο</Button>
        </div>
    );
};

export default DeleteItem;
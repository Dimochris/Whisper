import React from 'react';
import Button from '../Button/Button';

const DeleteItem = (props) => {
    const type = props.type;
    const id = props.id;
    // to do Buttons
    
    const clickedOKHandler = (id) => {
        console.log("clickedOKHandler"+id);
        
    }
    const clickedCancelHandler = () => {
        console.log("clickedCancelHandler");
    }

    return (
        <div  style={{textAlign:'center'}}>
            <h2>Θέλεις σίγουρα να διαγράψεις το 
                <span style={{textTransform:'capitalize'}}>{id} {type} </span>; 
            </h2>
            <Button btnType="Success" clicked={(id) => clickedOKHandler(id)}>OK</Button>
            <Button btnType="Danger" clicked={() => clickedCancelHandler()}>Άκυρο</Button>
        </div>
    );
};

export default DeleteItem;
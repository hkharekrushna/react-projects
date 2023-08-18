import React from 'react';
import Button from './Button';
import Card from './Card';
import cssClasses from './ErrorModal.module.css';

const ErrorModal = (props) => {

    return (
        <div>
            
            <div className={cssClasses.backdrop}></div>


            <Card className={cssClasses.modal}>
                <header className={cssClasses.header}>
                    <h2>{props.title}</h2>
                </header>

                <div className={cssClasses.content}>
                    <p>{props.message}</p>
                </div>

                <footer className={cssClasses.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        
        </div>
    );
};

export default ErrorModal;
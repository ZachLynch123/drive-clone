import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import firebase from 'firebase';
import { storage, db, } from '../../../firebase';

// taking style and modal from material ui
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'

const getModalStyle = () => {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    }
};

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute', 
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));



const NewFile = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [file, setFile] = useState(false);
    const [open, setOpen] = useState(null);
    const [uploading, setUploading] = useState(false);

    return (
        <div className="newFile">
            <div className="newFile_container">
                <AddIcon />
                <p>New File</p>
            </div>
            
        </div>
    )
}

export default NewFile

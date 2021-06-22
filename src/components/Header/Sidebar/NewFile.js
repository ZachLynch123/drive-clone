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

    // opens modal on click 
    const handleOpen = () => {
        setOpen(true);
    }

    // closes modal when clicked off
    const handleClose = () => {
        setOpen(false);
    }

    // selects file to upload
    const handleChange = e => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }
    
    // uploads files to firebase
    const handleUpload = () => {
        setUploading(true)

        storage.ref(`files/${file.name}`).put(file)
        .then(snapshot => {

            // uploads the file to firebase, gives it a name, timestamp, and url for file
            // puts it in folder called myFiles
            storage.ref('files').child(file.name).getDownloadURL()
            .then(url=>{
                db.collection('myFiles').add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: file.name, 
                    fileUrl: url,
                });

                setUploading(false);
                setOpen(false);
                setFile(null)
            });
        })
    }

    return (
        <div className="newFile">
            <div className="newFile_container" onClick={handleOpen}>
                <AddIcon />
                <p>New File</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            > 
                <div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                                <>
                                    <input type="file" onChange={handleChange} />
                                    <button onClick={handleUpload}>Upload</button>
                                </>
                            )
                    }
                </div>
            </Modal>
            
        </div>
    )
}

export default NewFile

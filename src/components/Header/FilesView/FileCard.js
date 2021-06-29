  
import React from 'react'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileCard = ({ name, fileUrl }) => {

    console.log(fileUrl);
    return (
        <div className='fileCard'>
            <div className="fileCard--top">
                <img src={fileUrl} alt={name}/>
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard
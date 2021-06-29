  
import React from 'react'

const FileCard = ({ name, fileUrl }) => {

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
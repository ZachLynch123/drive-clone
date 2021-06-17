import React, {useState, useEffect} from 'react'
import { db } from '../../../firebase'

const FilesView = () => {
    // use hooks

    const [files, setFiles] = useState([])


    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])
 
    return (
        <div className="fileView">
            <div className="fileView-row">
                {/* cards */}
            </div>
            <div className="fileView-tiles">
                <div className="fileView-tiles-left">
                    <p>name</p>
                </div>
                <div className="fileView-tiles-right">
                    <p>Last modified</p>
                    <p>File size</p> 
                </div>
            </div>
            {/* file items */}
        </div>
    )
}

export default FilesView

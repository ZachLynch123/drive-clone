import React, {useState, useEffect} from 'react'
import FileItem from './FileItem'
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
            {files.map(({id, item}) => {
                return <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
            })}
        </div>
    )
}

export default FilesView

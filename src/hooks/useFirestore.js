import {useState, useEffect} from 'react'
import { projectDatabase } from "../firebase/config"

const useFirestore = (collection) => {
    const [documents, setDocuments] = useState([])

    const unsub = useEffect(() => {
        projectDatabase.collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot(snap => {
            let documents = []
            snap.forEach(doc => {
                documents.push({...doc.data(), id : doc.id})
            })
            setDocuments(documents)
        })

        return () => unsub()

    }, [collection])

    return { documents }
}

export default useFirestore
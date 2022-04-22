import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';


function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/")
  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload)
     .then((snaphsot) => {
       getDownloadURL(snaphsot.ref)
        .then(url => setImageList(prev => [...prev, url]))
     })
     .catch(err => alert(err.message))
  }

  const handleFileUpload = e => {
    setImageUpload(e.target.files[0])
  }

  useEffect(() => {
    listAll(imageListRef)
     .then(response => {
       response.items.forEach(item => {
        getDownloadURL(item)
         .then(url => {
           console.log(url)
           setImageList(prev => [...prev, url])
         })
       })
     })
     .catch(error => console.log(error))
  }, [])

  return (
    <div>
     <input type="file" onChange={handleFileUpload} />
     <button onClick={uploadImage}>upload!</button>

     {imageList.map(url => {
       return <img src={url}/>
     })}
    </div>
  );
}

export default App;

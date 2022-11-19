import React from "react";
// import Tesseract from "tesseract.js";
import './UpCertificate.css';
import NavBar from './NavBar';

class UpCertificate extends React.Component {
    start = () => {
        document.querySelector('textarea').innerHTML=''
        const rec = new this.Tesseract.TesseractWorker()
        rec.recognize(this.fileSelector.files[0])
        .progress(function(response)
        {
            if(response.status=='recognizing text'){
                /*progress.innerHTML=response.status+'   '+response.progress*/
            }
            else{
               /* progress.innerHTML=response.status*/
            }
        })
        .then(function(data)
        {
            console.log('data',data);
            document.querySelector('textarea').innerHTML=data.text
            /*progress.innerHTML='Done'*/
            console.log(data.text)
            const textToBLOB = new Blob([data.text], { type: 'text/plain' });
            const sFileName = 'formData.txt';
            let newLink = document.createElement("a");
            newLink.download = sFileName;
            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }
            newLink.click();
        })
    }
    componentDidMount() {
        this.Tesseract = window.Tesseract;
        //first show image on upload
        this.fileSelector = document.querySelector('input');
        this.img = document.querySelector('#images');
        this.progress = document.querySelector('.progress');
        this.textarea = document.querySelector('textarea');
        this.fileSelector.onchange= () => {
            var file=this.fileSelector.files[0]
            var imgUrl=window.URL.createObjectURL(new Blob([file],{type:'image/jpg'}))
            this.img.src=imgUrl
            this.start();
        }

        document.getElementById('start-btn').addEventListener('click', ()=>{
            this.start();
        })
    }


  render() {
    return (
       <div className="container">
        <NavBar />
        <div className="containerN2">
          <label className="custom-file-upload">
            <input type="file" />
            Upload File
          </label>
          <button className="start" id="start-btn">Start</button>
          <div className="progress"></div>
        </div>
        <div className="bottom">
          <div>
            <img id="images" src="" alt="img"/>
          </div>
          <div className="textarea">
            <textarea
              placeholder="Text"
            //   contentEditable="true"
            //   readOnly
            ></textarea>
          </div>
        </div>
        <script src="upload-certificate.js"></script>
        </div>
    );
  }
}
export default UpCertificate;

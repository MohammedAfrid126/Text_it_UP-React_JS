import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    let textLength = text.length;
    let date = new Date();

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted To UpperCase","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted To LowerCase","success")
    }
    const handleAltClick = () => {
        let newText = text.split('').map((c,i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');   
        setText(newText)
        props.showAlert("Coverted To LowerCase","success")
    }

    const handleReverse = ()=>{
        setText(text.split("").reverse().join(""));
        props.showAlert("Reversed the Text","success")
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed the Extra Spaces","success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("The Text is Copied to Clipboard","success")
    }
    const handleDownload = () => {
        props.showAlert("The Text is Added to Downloads","success")
    }
    const handleClrClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("The text has been cleared","success")
    }
    
    const onChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-4">
                    <textarea className="form-control" style={{backgroundColor : props.mode ==='dark'? '#2b2b2b': 'white' , color: props.mode ==='dark'? 'white': 'black'}} id="myText" value={text} onChange={onChange}  rows="8" placeholder='Please Enter Your Text here' />
                </div>
                <button disabled={textLength === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={textLength === 0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert To Lowercase</button>
                <button disabled={textLength === 0} className='btn btn-primary mx-2 my-1' onClick={handleAltClick}>Convert To Alternating Case</button>
                <button disabled={textLength === 0} className='btn btn-primary mx-2 my-1' onClick={handleReverse}>Reverse</button>
                <button disabled={textLength === 0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpace}>Remove Spaces</button>
                <button disabled={textLength === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy To Clipboard</button>
                <a      className={`btn btn-primary mx-2 my-1 ${textLength>0?'':'disabled'}`} onClick={handleDownload} href={`data:text/plain;charset=utf-11,${text}`} id="link" download={`${date}.txt`}>Download</a>
                <button disabled={textLength === 0} className='btn btn-primary mx-2 my-1' onClick={handleClrClick}>Clear</button>
            </div>
            <div className='container my-3'>
                <h1>Your Text Summary:</h1>
                <p><strong>{textLength?text.split(/\s+/).filter(word => word !=='').length:0}</strong> Words and <strong>{text.length}</strong> Characters</p>
                <p>You can read this in <strong>{0.008 * text.split(" ").filter(word => word  !=='').length}</strong> Minutes</p>
                <h2>Preview</h2>
                <p>{textLength>0?text:"Please Enter the text in the above box to preview"}</p>
            </div>
        </>
    )
}

import  { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState('')
   
    const onClickHandler = (e) => {
        let UpperCaseConvertedText = text.toUpperCase()
        setText(UpperCaseConvertedText)
        props.showAlert('converted to uppercase!','success')

    }
    const onChangeHandler = (e) => {
        setText(e.target.value)

    }
    const onClickLowerCaseHandler=(e)=>
    {
        let lowerCaseText=text.toLocaleLowerCase()
        setText(lowerCaseText)
        props.showAlert('converted to lowercase','success')

    
    }
    const onClickClearTextHandler=(e)=>
    {
        setText("")
    }
    const onClickCopy=()=>
    {
        let copyText=document.getElementById('ta')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert('Copied to Clipboard','success')

    }
    const handleSpaces=()=>
    {
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert('Extra spaces removed','success')
    }
    
    return (
        <>

            <div className='container my-2'>
                <div className="mb-3"  style={{color:props.mode==='light'?'black':'white'}}>
                    <h3> Enter your text below </h3>
                    <textarea className="form-control" style={{background:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}} onChange={onChangeHandler} value={text} id="ta" rows="6"></textarea>
                </div>

                <div className="container">
                 <button  disabled={text.length===0} className='btn-primary btn mx-2 my-2' onClick={onClickHandler}>UpperCase</button>
                 <button disabled={text.length===0} className='btn-primary btn mx-2 my-2' onClick={onClickLowerCaseHandler}>LowerCase</button>
                 <button disabled={text.length===0} className='btn-primary btn mx-2 my-2' onClick={onClickClearTextHandler}>Clear</button>
                 <button  disabled={text.length===0}className='btn-primary btn mx-2 my-2' onClick={onClickCopy}>CopyText</button>
                 <button  disabled={text.length===0}className='btn-primary btn mx-2 my-2' onClick={handleSpaces}>RemoveSpaces</button>
                </div>
            </div>
            <div className="container  my-4"  style={{color:props.mode==='light'?'black':'white'}}>
                <h3>Preview Of  Your Text</h3>
                <p><b>No Of Total Characteres are :{text.replace(/\s/g,"").length}</b></p>
                <p><b>No Of  Total Words are :{text.split(/\s+/).filter(element=>element.length!==0).length}</b></p>
                <p> Read Time In Minutes :{0.008*(text.split(' ').filter(element=>element.length!==0).length)}</p>
            </div>
           
        </>
    );
}
export default TextForm;
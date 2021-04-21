import React,{useState} from 'react';
import './style.css';

export default function Box() {
    const [inputlist,setInputList]=useState({id1:"",id2:"",id3:"",id4:"",display: function(){return (this.id1+" "+this.id2+" "+this.id3+" "+this.id4)}});
    const [Item,setItems]=useState([]);

    
    const listofItems=()=>{
        setItems((olditem)=>{
            return [...olditem,inputlist];
        });
        ///setInputList("");
    }
    

    function Boxchange1(e){
        inputlist.id1=e.target.value;
        setInputList(inputlist);
        var target = e.srcElement || e.target;
        if(target.value.length===parseInt(target.attributes["maxlength"].value)){
            document.getElementById("input2").focus();
        }else if(target.value.length===0){
            var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

    function Boxchange2(e){ 
        inputlist.id2=e.target.value;
       setInputList(inputlist);
        var target = e.srcElement || e.target;
        if(target.value.length===parseInt(target.attributes["maxlength"].value)){
            document.getElementById("input3").focus();
        }else if(target.value.length===0){
            var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

    function Boxchange3(e){
        inputlist.id3=e.target.value;
        setInputList(inputlist);
        var target = e.srcElement || e.target;
        if(target.value.length===parseInt(target.attributes["maxlength"].value)){
            document.getElementById("input4").focus();
        }else if(target.value.length===0){
            var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }

        }
    }
} 

function Boxchange4(e){
    inputlist.id4=e.target.value;
        setInputList(inputlist);
    var target = e.srcElement || e.target;
    if(target.value.length===parseInt(target.attributes["maxlength"].value)){
      document.getElementById("submitbtn").focus();}
    else if(target.value.length===0){
        var previous = target;
    while (previous = previous.previousElementSibling) {
        if (previous == null)
            break;
        if (previous.tagName.toLowerCase() === "input") {
            previous.focus();
            break;
        }
      }
    }
  }


    return (
        <>
        <div className="creditcard" id="creditcard">
        <p className="name">Credit Number*</p>
         <input placeholder="1111" id="input1" onKeyUp={Boxchange1}  maxlength="4" className="box" type="text" />
         <input placeholder="2222" id="input2" onKeyUp={Boxchange2}  maxlength="4" className="box" type="text" />
         <input placeholder="3333" id="input3" onKeyUp={Boxchange3}  maxlength="4" className="box" type="text" />
         <input placeholder="4444" id="input4"  onKeyUp={Boxchange4}  maxlength="4" className="box"  type="text" /><br/>
        <input className="submit" id="submitbtn" type="text" onClick={listofItems} value="submit" />
        {/* <submit className="submit" id="submitbtn" onClick={display} >submit</submit> */}
        </div>
       <ol>
           {
               Item.map((itemval)=>{
                   return (
                       <>
                     <span class="material-icons-outlined">
                     <li>{itemval.display()}</li>
                 </span>
                   
                   </>
                ) })
           }
       </ol>
        </>

    )
}

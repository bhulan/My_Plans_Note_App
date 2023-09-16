import React from 'react'
import plusicon from '../../assets/remove.png';
import './note.css';
let timer=500,timeout;
export default function note(props) {
  const formateDate=(value)=>{
    if(!value)return "";
    const date=new Date(value);
    const monthNames=['Jan','Feb','Mar','Apr','May','Jun','july','Aug','Sep','Oct','Nov','Dec'];
    let hrs=date.getHours();
    let ampm=hrs>12?"PM":"AM";
    hrs=hrs?hrs:12;
    hrs=hrs>12?hrs=24-hrs:hrs
    let min=date.getMinutes();
    min=min<10?"0"+min:min;
    let day=date.getDate();
    let month=monthNames[date.getMonth()];
    return `${hrs}:${min} ${ampm} ${day} ${month}`

  }
  const debounce=(func)=>{
    clearTimeout(timeout)
    timeout=setTimeout(func,timer);

  }
   const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id))
   }
  return (
    <div className='note'style={{backgroundColor:props.note.color}}>
    <textarea className='note_text' defaultValue={props.note.text}
      onChange={(event)=>updateText(event.target.value,props.note.id)}
    />
    <div className='note_footer'>
    <p>{formateDate(props.note.time)}</p>
    <img src={plusicon} alt="Delete" onClick={()=>props.deleteNote(props.note.id)}/>
    </div>
      
    </div>
  )
}

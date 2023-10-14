import React from 'react';
import '../App.css';

export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className='flex'>
      {filters.map(item=>{
        const classname = item===selected ? 'active' : 'button';
        return (<button className={classname} onClick={()=>{onSelectFilter(item)}}>{item}</button>)
      })}
    </div>
  );
}
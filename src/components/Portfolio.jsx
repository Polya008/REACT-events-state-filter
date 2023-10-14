import React, { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import files from '../files';

export default function Portfolio() {
    const [state, setState]= useState('All')
    
    const arr= files.filter(function(item){
        if (state==='All'){
            return true;
        } else{
            return item.category===state
        }
        
        });
  return (
    <div>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={state}
        onSelectFilter={setState}
        />
    <ProjectList files={arr}/>
    </div>
  );
}
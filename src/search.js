import React from 'react';
const Searchbox =({search})=>{
	return(
		<div className ='pa2'>
		    <input className ='pa3 ba bg-washed-red'  type="search" 
		       placeholder="search robots"
		       onChange={search}/>
		</div>
		);
}
export default Searchbox;
import React from 'react';
const Scroll=(props)=>{
	return (
		<div style={{overflow:'scroll' ,border:'1px solid red',height:'800px'}}>
		{props.children} </div>
		);
}
export default Scroll;
import React from 'react';

const card=(props)=>{
	return(
		<div class='bg-light-blue dib pa4 ma4 br3 grow shadow-5'>
		<img  alt ='robot'src={`https://robohash.org/${props.id}`} />
		<h2>{props.name}</h2>
		<p>{props.username}</p>
		</div>
		);
}
export default card;
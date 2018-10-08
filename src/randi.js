import React from 'react';

import Card from './robo';
const Cardlist=({newarray})=>{
const cardcomponent = newarray.map((user,i)=>{
			return <Card id={newarray[i].id} name={newarray[i].name} username={newarray[i].username}/>
		});
	return(
			<div>
			{cardcomponent}
	</div>
	);
}
export default Cardlist;
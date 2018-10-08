import React from 'react';
const Cardlist=()=>{
	return(
			<div>
    <Card id={info[0].id} name={info[0].name} username={info[0].username}/>
    <Card id={info[1].id} name={info[1].name} username={info[1].username}/>
    <Card id={info[2].id} name={info[2].name} username={info[2].username}/>
    <Card id={info[3].id} name={info[3].name} username={info[3].username}/>
    <Card id={info[4].id} name={info[4].name} username={info[4].username}/>
	<Card id={info[5].id} name={info[5].name} username={info[5].username}/>
	</div>
	);

}
export default Cardlist;
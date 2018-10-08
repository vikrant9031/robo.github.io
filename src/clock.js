import React from 'react';
const Clock=(props)=>{

	return(
<p style={{fontFamily:'san-serif',fontSize:'25px'}}>
		{props.time}
		</p>
	);

}
export default Clock;
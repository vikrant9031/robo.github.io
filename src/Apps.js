import React ,{Component} from 'react';
import Searchbox  from './search';
import Cardlist from './randi';
import Scroll from'./scroll';
import Clock from './clock';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
	        searchfield:"",
	        time: new Date().toLocaleString()
		}
	}
	
onchange=(event)=>{
		this.setState({searchfield:event.target.value});
	}


componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
	return	response.json();
		})
	.then(users=>{
		this.setState({robots:users})
		});
	 this.intervalID = setInterval(
      () => this.tick(),
      1000
    );

	
}




tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
}






	render(){
		const filters = this.state.robots.filter(inf=>{
			return inf.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			});


		if(this.state.robots.length==0){
    return <h1>loading</h1>	
}
else{    
	return(
		<div className='tc'>
		<h1>Robo Friends</h1>
		<Clock time={this.state.time} ></Clock>
		<Searchbox search={this.onchange}/>
		<Scroll>
		<Cardlist newarray={filters}/>
		</Scroll>
		</div>
		)
		}

}

		
}
		


 export default App;
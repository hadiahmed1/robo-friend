import React,{Component} from "react";
import CardList from './CardList.js';
import SearchBox from "./SearchBox.js";
import Scroll from './Scroll.js'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots:users});
        })
    }
    onSearchChanege=( event)=>{
        this.setState({searchField: event.target.value})
        
    }
    render(){
        const filterRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f2">Robo List</h1>
                <SearchBox searchChange={this.onSearchChanege}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        );
    }
}
export default App;
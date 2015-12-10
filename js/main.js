//React components go here

var MyApp = React.createClass({
  toDos: ['Grocery Store', 'Get Haircut', 'Finish WDI', 'get a job', 'pack + move', 'sleep'],
  getInitialState: function() {
  	return {toDos: this.toDos, newItem: ''}
  },
  clear: function(){
  	this.setState({toDos: []})
  },
  bringBack: function(){
  	this.setState({toDos: this.toDos})
  },
  newItemChange: function(e){
  	console.log('letter typed', e.target.value);
  	this.setState({newItem: e.target.value});
  },
  addItem: function(e){
  	e.preventDefault();
  	var toDoCopy = this.state.toDos;
  	toDoCopy.push(this.state.newItem);
  	this.setState({toDos: toDoCopy, newItem: ""});
  },
  render: function() {
    return (
      <div className="well">
        <h1>Hello world!</h1>
        <button className="btn btn-primary" onClick={this.clear}>Clear</button>
        <button className="btn btn-success" onClick={this.bringBack}>Reset</button>
        <form onSubmit={this.addItem}>
        	<input type="text" 
        	value={this.state.newItem} 
        	onChange={this.newItemChange} />
        </form>
        <ToDoList items={this.state.toDos} />
      </div>
    );
  }
});


var ListItem = React.createClass({
  render: function() {
    return <li>{this.props.item}</li><span> X </span>;
  }
});

var ToDoList = React.createClass({
  render: function() {
  	var listItems = this.props.items.map(function(item, idx){
    return <ListItem key={idx} item={item} />
    });
    return (
      <ul>
        {listItems}
        
      </ul>
    );
  }
});

//insert the component into the DOM
ReactDOM.render(<MyApp />, document.getElementById('reactApp'));


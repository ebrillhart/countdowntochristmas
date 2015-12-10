//React components go here

// var toDoItems = ['Buy Groceries', 'Mow the Lawn', 'Homework', 'Haircut', 'Wash Rally', 'Go to the Bank']
var MyApp = React.createClass({
	toDos: [''],
	getInitialState: function() {
		return {toDos: this.toDos, newItem: '' };
	},
	clear: function() {
		this.setState({toDos: []})
	},
	getInitialToDos: function() {
		this.setState({toDos: this.toDos})
	},
	newItemChange: function(e) {
		console.log('letter typed', e.target.value);
		this.setState({newItem: e.target.value});
	},
	addItem: function(e) {
		e.preventDefault();
		var toDoCopy = this.state.toDos;
		toDoCopy.push(this.state.newItem);
		this.setState({toDos: toDoCopy, newItem: ''});
	},
	render: function() {
		return (
			<div className="well">
			  <h1>Christmas To Do</h1>
			  <button className='btn btn-primary' onClick={this.clear}>Clear</button>
			  <button className='btn btn-success' onClick={this.getInitialToDos}>Reset</button>
			  <form onSubmit={this.addItem}>
			  	<input type='text' placeholder='ex. Buy Gifts' value={this.state.newItem}
			  	onChange={this.newItemChange}
			  	/>
			  </form>
			  <ToDoList items={this.state.toDos}/>
			</div>
		)
	}	
});

var ListItem = React.createClass({
  render: function() {
  	return <li>{this.props.item}</li>
  }
});
var ToDoList = React.createClass({
  render: function() {
  	var listItems = this.props.items.map(function(item, idx) {
    	return <ListItem key={idx} item={item} />
  });
    return (
      <ul>
      	{listItems}
      </ul>
    );
  }
});


ReactDOM.render(<MyApp />, document.getElementById('reactApp'));


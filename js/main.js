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
	strikethrough: function() {
		this.css("text-decoration", "line-through");
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
			<div className="well col-md-3 toDoList">
			  <h1>Christmas To Do List</h1>
			  <form onSubmit={this.addItem}>
			  	<input type='text' placeholder='ex. Buy Gifts' className='inputlist' value={this.state.newItem}
			  	onChange={this.newItemChange}
			  	/>
			  </form>
			  <button className='btn btn-danger' onClick={this.clear}>CLEAR</button>
			  <ToDoList onClick={this.strikethrough} items={this.state.toDos}/>
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


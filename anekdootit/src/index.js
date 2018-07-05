import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: []
    }
  }


  randomSelected = () => {
    this.setState({
      selected: Math.floor(Math.random() * (this.props.anecdotes.length))
    });
  };

  voteAnecdote = () => {
    this.setState({
      votes: this.state.votes.concat(this.state.selected)
    })
  }


  render() {
    const anecdotes = this.props.anecdotes
    const nowSelected = this.state.selected

    const totalVotes = () => {
      let total = 0
      this.state.votes.forEach(element => {
        if (element === nowSelected) {
          total += 1
        }
      });
      return total
    }
    return (
      <div>
        <p>{anecdotes[nowSelected]}</p>
        <p>has {totalVotes()} votes</p>
        <button onClick={this.randomSelected.bind(this)}>next anectdote</button>
        <button onClick={this.voteAnecdote.bind(this)}>vote</button>

      </div>
    )
  }
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
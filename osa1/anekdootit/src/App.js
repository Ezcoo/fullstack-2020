import React, { useState } from 'react'

const ButtonNext = (props) => {
  return (
    <button onClick={props.handleClick} >
      {'next anecdote'}
    </button>
  )
}

const ButtonVote = (props) => {
  return (
    <button onClick={props.handleClick} >
      {'vote'}
    </button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteArray, setVoteArray] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotesIndex, setMostVotesIndex] = useState(0)

  const rngAnecdote = () => {
    let min = Math.ceil(0);
    let max = Math.floor(anecdotes.length - 1);

    let result = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(result)
    setSelected(result)
  }

  const voteArraySet = () => {
    let voteArrayNew = [...voteArray];
    
    voteArrayNew[selected] += 1
    setVoteArray(voteArrayNew)

    let mostVotesIndexTemp = 0

    for (let i = 0; i < voteArrayNew.length; i++) {
      if (voteArrayNew[i] > voteArrayNew[mostVotesIndexTemp]) {
        mostVotesIndexTemp = i
      }
    }

    setMostVotesIndex(mostVotesIndexTemp)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote text={anecdotes[selected]} votes={voteArray[selected]} />
      <ButtonVote handleClick={voteArraySet} voteIndex={selected} />
      <ButtonNext handleClick={rngAnecdote} />
      <h2>Anecdote with the most votes</h2>
      <Anecdote text={anecdotes[mostVotesIndex]} votes={voteArray[mostVotesIndex]} />
    </div>
  )
}

export default App
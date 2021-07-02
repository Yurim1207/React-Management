import './App.css';
import { Component } from 'react';
import Customer from './Components/Customer';

const customers = [
    {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '정유림',
    'birthday': '941207',
    'gender': '여자',
    'job': '디자이너'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '곽용문',
    'birthday': '950101',
    'gender': '남자',
    'job': '품질관리사'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김민주',
    'birthday': '940407',
    'gender': '여자',
    'job': '블로거'
  }
]

class App extends Component {
  render () {
    return (
      <div>
        {
          customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) })
        }
      </div>
    )
  }
}

export default App;

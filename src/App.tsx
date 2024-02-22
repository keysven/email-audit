import './app.css'
import AuditTable from './components/AuditTable'
import FakeData from './fake-data'
import axios from 'axios'
// import fetch from 'node-fetch';

export default function App() {
  const JSON_String = {
    contact_email: 'keysven0@gmail.com',
    github_url:
      'https://gist.github.com/keysven/08d615a6365a982f8c3c44d897c25180.js',
    solution_framework: 'React',
  }
  const text = 'HENNGECHALLENGE'
  const asciiValues = []

  for (let i = 0; i < text.length; i++) {
    asciiValues.push(text.charCodeAt(i))
  }

  const username = 'keysven0@gmail.com'
  const password = asciiValues.join(' ')
  const encodedCredentials = btoa(`${username}:${password}`)
  console.log('encodedCredentials: ', encodedCredentials)
  const url = 'https://api.challenge.hennge.com/challenges/003'

  console.log(typeof fetch)
  console.log(typeof fetch)
  const fetchData = async () => {
    const result = await fetch(url, {
      method: 'POST',
      credentials: 'include' as RequestCredentials, // changed from backticks to single quotes
      headers: { Cookie: encodedCredentials },
    } as RequestInit)
    console.log(result, 'sdfsfds')
  }

  const handleButton = () => {
    console.log('dsfsdfsdf')
    fetchData()
  }

  return (
    <main>
      <h1>Email Audit</h1>
      <button onClick={handleButton}>POST</button>
      <AuditTable emails={FakeData} />
    </main>
  )
}

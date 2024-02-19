import './app.css'
import AuditTable from './components/AuditTable'
import FakeData from './fake-data'

export default function App() {
  return (
    <main>
      <h1>Email Audit</h1>
      <AuditTable emails={FakeData} />
    </main>
  )
}

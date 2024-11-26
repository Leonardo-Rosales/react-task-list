import './App.css'

function App() {

  const tasks = [
    {
      id: 1,
      title: 'Implementare la homepage',
      priority: 1,
      estimatedTime: 120,
      state: 'completed',
    },
    {
      id: 2,
      title: 'Sviluppare il menu di navigazione',
      priority: 2,
      estimatedTime: 60,
      state: 'completed',
    },
    {
      id: 3,
      title: 'Creare il footer del sito',
      priority: 3,
      estimatedTime: 30,
      state: 'completed',
    },
    {
      id: 4,
      title: 'Ottimizzare le performance',
      priority: 1,
      estimatedTime: 180,
      state: 'completed',
    },
    {
      id: 5,
      title: 'Scrivere test per i componenti',
      priority: 2,
      estimatedTime: 90,
      state: 'completed',
    },
    {
      id: 6,
      title: 'Implementare la pagina dei contatti',
      priority: 3,
      estimatedTime: 60,
      state: 'completed',
    },
    {
      id: 7,
      title: 'Aggiungere animazioni CSS',
      priority: 2,
      estimatedTime: 30,
      state: 'backlog',
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: 'in_progress',
    },
    {
      id: 9,
      title: 'Aggiornare la documentazione',
      priority: 3,
      estimatedTime: 60,
      state: 'backlog',
    },
    {
      id: 10,
      title: 'Rifattorizzare il codice CSS',
      priority: 2,
      estimatedTime: 90,
      state: 'in_progress',
    },
  ]


  function getFilteredTasksToComplete(tasks) {

    return tasks
      .filter(({ state }) => state === 'in_progress' || state === 'backlog')
      .map(({ title, priority, estimatedTime }) => ({ title, priority, estimatedTime }))

  }

  function getFilteredTasksCompleted(tasks) {

    return tasks
      .filter(({ state }) => state === 'completed')
      .map(({ title, priority, estimatedTime }) => ({ title, priority, estimatedTime }))

  }


  const FilteredTasksToComplete = getFilteredTasksToComplete(tasks)
  const FilteredTasksCompleted = getFilteredTasksCompleted(tasks)

  return (
    <>
      <header className='main-header'>
        <h1>Task Manager</h1>
      </header>

      <main className='main-body'>
        <section>
          <h2 className='title'>Current Tasks (4)</h2>
          <ul className='list'>
            {FilteredTasksToComplete.map(({ title, priority, estimatedTime }, listToComplete) => (
              <li className='list-element' key={listToComplete}>
                <strong>{title}</strong>
                <div>Priority: {priority}</div>
                <div>Est. time {estimatedTime}</div>
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <section>
          <h2 className='title'>Completed Tasks (6)</h2>
          <ul className='list'>
            {FilteredTasksCompleted.map(({ title, priority, estimatedTime }, listCompleted) => (
              <li className='list-element' key={listCompleted}>
                <strong>{title}</strong>
                <div>Priority: {priority}</div>
                <div>Est. time {estimatedTime}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>

    </>
  )
}

export default App


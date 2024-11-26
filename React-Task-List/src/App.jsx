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
      .map(({ title, priority, estimatedTime, state }) => ({ title, priority, estimatedTime, state }))

  }

  function getFilteredTasksCompleted(tasks) {

    return tasks
      .filter(({ state }) => state === 'completed')
      .map(({ title, priority, estimatedTime, state }) => ({ title, priority, estimatedTime, state }))

  }


  const FilteredTasksToComplete = getFilteredTasksToComplete(tasks)
  const FilteredTasksCompleted = getFilteredTasksCompleted(tasks)

  const getClassForState = (state) =>
    state === 'completed' ? 'state-completed' : state === 'backlog' ? 'state-backlog' : 'state-in-progress'

  // console.log(getClassForState)



  return (
    <>
      <header className='main-header'>
        <h1>Task Manager</h1>
      </header>

      <main className='main-body'>
        <section>
          <h2 className='title'>Current Tasks (4)</h2>
          <ul className='list'>
            {FilteredTasksToComplete.map(({ title, priority, estimatedTime, state }, listToComplete) => (
              <li className='list-element' key={listToComplete}>
                <div className='row-title'>
                  <strong>{title}</strong>
                  <span className={getClassForState(state)}>{state}</span>
                </div>
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
            {FilteredTasksCompleted.map(({ title, priority, estimatedTime, state }, listCompleted) => (
              <li className='list-element' key={listCompleted}>
                <div className='row-title'>
                  <strong>{title}</strong>
                  <span className={getClassForState(state)}>{state}</span>
                </div>
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


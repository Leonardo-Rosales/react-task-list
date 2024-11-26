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


  function getFilteredTasks(tasks) {

    return tasks
      .filter(({ state }) => state === 'in_progress' || state === 'backlog')
      .map(({ title, priority, estimatedTime }) => ({ title, priority, estimatedTime }))

  }

  const filteredTasks = getFilteredTasks(tasks)

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <main>
        <h2>Current Task(4)</h2>
        <div className="task-list-to-complete">
          <ul>
            {filteredTasks.map(({ title, priority, estimatedTime }, listToComplete) => (
              <li key={listToComplete}>
                <strong>{title}</strong>
                <div>Priority: {priority}</div>
                <div>Est. time {estimatedTime}</div>
              </li>
            ))}
          </ul>

        </div>
      </main>

    </>
  )
}

export default App



// Esercizio
// Mostriamo in due liste diverse gli elementi dell’array tasks.
// Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”.
// Nella seconda lista mostriamo i task che hanno stato “completed”.
// Infine riprodurre il layout lasciato in allegato.
// BONUS
// Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.
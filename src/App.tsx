import { useEffect, useId, useState } from 'react'
import NewReminder from './components/NewReminder'
import ReminderList from './components/ReminderList'
import { Reminder } from './models/reminder'
import fetchReminder from './services/fetchReminder'

// 27:32

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders()
  }, [])

  const loadReminders = async () => {
    const reminderss = await fetchReminder.getReminder()
    setReminder(reminderss)
  }

  const removeReminderHandler = (id: number) => {
    setReminder(reminders.filter(item => item.id !== id))
  }

  const addReminderHandler = async (title: string) => {
    const newReminder = await fetchReminder.addReminder(title)
    console.log(newReminder)
    setReminder([newReminder, ...reminders])
  }

  return (
    <body className=" bg-slate-200 p-5 text-slate-200  ">
      <NewReminder onAddReminder={t => addReminderHandler(t)} />

      <div className="mb-4 text-orange-500">
        <ReminderList
          items={reminders}
          deleteReminder={e => removeReminderHandler(e)}
        />
      </div>
    </body>
  )
}

export default App

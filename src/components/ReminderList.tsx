import { Reminder } from '../models/reminder'

interface ReminderListProps {
  items: Reminder[]
  deleteReminder: (id: number) => void
}

function ReminderList({ items, deleteReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((itemReminder: Reminder) => (
        <>
          <li className="list-group-item bg-slate-400" key={itemReminder.id}>
            {itemReminder.title}
            <button
              className="btn btn-outline-danger mx-2"
              onClick={() => deleteReminder(itemReminder.id)}
            >
              Delete
            </button>
          </li>
        </>
      ))}
    </ul>
  )
}

export default ReminderList

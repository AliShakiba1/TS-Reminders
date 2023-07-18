import { useState } from 'react'

interface NewReminderProps {
  onAddReminder: (title: string) => void
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState('')

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) return
    onAddReminder(title)
    setTitle(' ')
  }

  return (
    <form onSubmit={submitForm}>
      <label className="form-control">
        giveMeReminder:
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-control"
        />
      </label>
      <button type="submit" className="btn btn-primary">
        add Reminder
      </button>
    </form>
  )
}

export default NewReminder

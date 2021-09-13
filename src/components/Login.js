import { useState } from "react"

export default function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function handleInput(e) {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
      <div>
        <form>
          <input
          onChange={handleInput}
            type="text"
            name="username"
            value={form.username}
            placeholder="username"
          />
          <input
          onChange={handleInput}
            type="text"
            name="password"
            value={form.password}
            placeholder="password"
          />
        </form>
      </div>
    );
}
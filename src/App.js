import './App.css';
import { useState } from "react"

function App() {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    contact: '',
    destination: '',
    resume: '',
    url: '',
    about: ''
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const ResetFunc = () => {
    setValues({ firstName: '', lastName: '', email: '' })
  }

  return (
    <div className="form-container">
      <h1>Holiday Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          required
          onChange={(e) => handleChange(e)}
          value={values.firstName}
        />

        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          required
          onChange={(e) => handleChange(e)}
          value={values.lastName}
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          autoComplete="off"
          required
          onChange={(e) => handleChange(e)}
          value={values.email}
        />

        <label htmlFor="contact">Contact*</label>
        <input
          type="text"
          placeholder="Enter Phone #"
          name="contact"
          required
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender"
          onChange={(e) => handleChange(e)} />Male
        <input type="radio" name="gender"
          onChange={(e) => handleChange(e)} />Female
        <input type="radio" name="gender"
          onChange={(e) => handleChange(e)} />Other

        <label htmlFor="destination">Destination</label>
        <select name="destination" id="destination" onChange={(e) => handleChange(e)}>
          <option value="Newcastle">Newcastle</option>
          <option value="London">london</option>
          <option value="Dubai">Dubai</option>
          <option value="NewYork">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Berlin">Berlin</option>
        </select>

        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          placeholder="Select Resume"
          name="resume"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="url">URL</label>
        <input
          type="text"
          placeholder="Enter url"
          name="url"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="10"
          placeholder="Enter description"
          onChange={(e) => handleChange(e)}>
        </textarea>

        <button type="button" onClick={ResetFunc}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from 'react'

export default function Form() {
  const [nameForm1, setForm1] = useState('Supachai');
  const [nameForm2, setForm2] = useState('Supachai');
  const [university, setUniversity] = useState('KKU')

  const form1 = (e) => {
    setForm1(e.target.value)
  };

  const form2 = (e) => {
    setForm2(e.target.value)
  }

  const uni = (e) => {
    setUniversity(e.target.value)
  }

  return (
    <div>
      <h1>Form with Names</h1>
      <form>
        <input type="text" value={nameForm1} onChange={form1} />
        <span> studies in </span>
        <input type="text" value={university} onChange={uni} />
      </form>
      <form>
        <input type="text" value={nameForm2} onChange={form2} />
        <span> studies in </span>
        <input type="text" value={university} onChange={uni} />
      </form>
    </div>
  );
}

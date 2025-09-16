# V. Forms and Controlled Components

Forms in React are managed using **controlled components**, where form data is handled by the component’s state. This section covers handling inputs, form submission, and basic validation.

## Input, Textarea, Checkbox, Radio Handling

Controlled components synchronize form element values with React state, ensuring a single source of truth.

**Text Input Example**:
```jsx
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>
    </div>
  );
}
```

**Textarea Example**:
```jsx
function TextAreaForm() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <textarea value={message} onChange={handleChange} />
      <p>Message: {message}</p>
    </div>
  );
}
```

**Checkbox Example**:
```jsx
function CheckboxForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <p>Checked: {isChecked ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

**Radio Buttons Example**:
```jsx
function RadioForm() {
  const [option, setOption] = useState('option1');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={option === 'option1'}
          onChange={handleChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={option === 'option2'}
          onChange={handleChange}
        />
        Option 2
      </label>
      <p>Selected: {option}</p>
    </div>
  );
}
```

**Best Practice**:
- Always provide a `value` (or `checked` for checkboxes/radios) and an `onChange` handler for controlled components.
- Use descriptive state variable names (e.g., `name` for input, `isChecked` for checkbox).

## Form Submission

Handle form submissions using an `onSubmit` event on the `<form>` element. Prevent the default browser behavior to avoid page refreshes.

**Example**:
```jsx
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Best Practice**:
- Use the `name` attribute to dynamically update state for multiple inputs.
- Call `event.preventDefault()` in the submit handler.
- Provide feedback (e.g., success message) after submission.

## Validation Basics

Basic form validation can be implemented by checking state values before submission or on input change.

**Example**:
```jsx
function ValidatedForm() {
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData({ email: value });

    if (!value.includes('@')) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Invalid email');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Best Practice**:
- Validate on both change and submission for immediate feedback.
- Display clear error messages near the relevant input.
- Consider libraries like Formik or React Hook Form for complex forms.
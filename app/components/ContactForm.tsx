'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus('error');
        setFeedback(result.error || 'Unable to submit form.');
        return;
      }

      setStatus('success');
      setFeedback(result.message || 'Your message was sent successfully.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setFeedback('Unable to submit form. Please try again later.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />

      {feedback && (
        <div className={`form-notice ${status === 'success' ? 'success' : 'error'}`} role="alert">
          {feedback}
        </div>
      )}

      <button type="submit" className="button button-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

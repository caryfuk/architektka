import React from 'react'

class ContactForm extends React.Component {
  render () {
    return (
      <form action='https://formspree.io/zuzana.knazeova@gmail.com' method='POST' className='contactForm'>
        <div className='pair'>
          <label htmlFor='formName'>Your name:</label>
          <input id='formName' type='text' name='name' />
        </div>
        <div className='pair'>
          <label htmlFor='formMail'>Your e-mail:</label>
          <input id='formMail' type='email' name='_replyto' />
        </div>
        <div className='pair'>
          <label htmlFor='formMessage'>Your message:</label>
          <textarea id='formMessage' name='message'></textarea>
        </div>
        <div className='pair'>
          <button type='submit'>Send</button>
        </div>
      </form>
    )
  }
}

export default ContactForm
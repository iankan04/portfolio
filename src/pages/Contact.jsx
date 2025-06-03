import React, { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import emailjs from '@emailjs/browser';

import useAlert from '../hooks/useAlert';
import { Alert, Loader } from '../components';
import { Fox } from '../models';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: ''});
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ian",
        from_email: form.email,
        to_email: "ianwkan@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      showAlert({ show: true, text: 'Message set successfully!', type: 'success' })
      setTimeout(() => {
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: ''});
        hideAlert();
      }, [2000])
    }).catch((error) => {
      setLoading(false);
      setCurrentAnimation('idle');
      console.log(error);

      showAlert({ show: true, text: "I didn't receive your message", type: 'danger' })
    })
  };
  
  const handleFocus = () => setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');



  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} /> } 
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>Get in Touch:</h1>

        <form ref={formRef} onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label htmlFor="" className="text-black-500 font-semibold">
            Name
            <input 
              type="text"
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Email
            <input 
              type="email"
              name='email'
              className='input'
              placeholder='john@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Your Message
            <textarea 
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className='btn'
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={0.5}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact

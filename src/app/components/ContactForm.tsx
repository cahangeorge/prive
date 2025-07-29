'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ContactFormProps {
  showTitle?: boolean;
  backgroundImage?: string;
  className?: string;
}

export default function ContactForm({ 
  showTitle = true, 
  backgroundImage = "/dinner.png",
  className = "" 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      details: formData.get('details') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage('Mesajul a fost trimis cu succes! | Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage('Eroare la trimiterea mesajului. | Error sending message.');
      }
    } catch {
      setSubmitMessage('Eroare la trimiterea mesajului. | Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`nda-section px-6 xs:px-8 sm:px-10 md:px-[8%] py-16 xs:py-18 sm:py-20 relative overflow-hidden my-4 rounded-2xl ${className}`}
    >
      <Image 
        src={backgroundImage}
        alt="Background" 
        fill
        className="object-cover opacity-30 z-0 rounded-2xl"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
      {showTitle && (
        <div className="text-center mb-10 xs:mb-14 sm:mb-16 relative z-20">
          <div className="flex justify-center mb-6 xs:mb-8">
            <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#D4AF37] mb-6 xs:mb-8 sm:mb-12 font-bold leading-tight">
            Solicită experiența ta | Request Your Experience
          </h3>
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact-form max-w-2xl mx-auto relative z-20">
        <div className="space-y-6 xs:space-y-8">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nume / Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Introduceți numele dvs. / Enter your name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="exemplu@email.com / example@email.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="details" className="form-label">Detalii cerințe / Details</label>
            <textarea 
              id="details" 
              name="details" 
              rows={5} 
              required 
              placeholder="Descrieți experiența dorită... / Describe your desired experience..."
              className="form-input form-textarea"
            ></textarea>
          </div>

          <div className="nda-section">
            <div className="flex items-start space-x-4">
              <input 
                type="checkbox" 
                id="nda" 
                required 
              />
              <label htmlFor="nda" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                <span className="text-[#D4AF37] font-semibold block mb-1">🔒 Confidențialitate garantată</span>
                <span className="block mb-2">Sunt de acord să semnez NDA pentru protejarea completă a informațiilor și detaliilor experiențelor exclusive.</span>
                <span className="text-xs text-gray-400 italic">🔒 Confidentiality guaranteed: I agree to sign NDA for complete protection of information and exclusive experience details.</span>
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`btn w-full text-center justify-center py-4 xs:py-5 text-base xs:text-lg font-semibold touch-manipulation ${
              isSubmitting ? 'loading cursor-not-allowed opacity-70' : ''
            }`}
          >
            {isSubmitting ? 'Se trimite... | Sending...' : 'Apply for Invitation | Aplică pentru Invitație'}
          </button>
          
          {submitMessage && (
            <div className={`${
              submitMessage.includes('succes') || submitMessage.includes('successfully') 
                ? 'success-message' 
                : 'error-message'
            }`}>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  submitMessage.includes('succes') || submitMessage.includes('successfully')
                    ? 'bg-green-400'
                    : 'bg-red-400'
                }`}></div>
                <span>{submitMessage}</span>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
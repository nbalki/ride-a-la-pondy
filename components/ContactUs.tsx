
import React from 'react';

const ContactUs: React.FC = () => {
  // Using a Javascript handler to construct a detailed mailto link
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    const subject = `Ride à la Pondy - New Website Inquiry from ${name}`;
    const body = `You have a new inquiry from your website's contact form:
    
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`;

    // This will open the user's default email client
    window.location.href = `mailto:pondicherrycabinfo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset the form after preparing the email
    form.reset();
  };
  
  const inputClass = "w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:ring-brand-orange-500 focus:border-brand-orange-500 transition-colors";

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mt-2">Have questions or ready to book? Contact us today!</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          {/* Replaced state management with a standard form submission handler that creates a mailto link. */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required placeholder="Your Full Name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required placeholder="your.email@example.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" id="message" rows={4} required placeholder="Your message..." className={inputClass}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-brand-orange-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-brand-orange-700 transition-colors duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        #contact input, #contact textarea {
            color: #FFF;
        }
        /* Fix for autofill background color on Webkit browsers */
        #contact input:-webkit-autofill,
        #contact input:-webkit-autofill:hover,
        #contact input:-webkit-autofill:focus,
        #contact input:-webkit-autofill:active,
        #contact textarea:-webkit-autofill,
        #contact textarea:-webkit-autofill:hover,
        #contact textarea:-webkit-autofill:focus,
        #contact textarea:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #1F2937 inset !important;
            -webkit-text-fill-color: #FFF !important;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;

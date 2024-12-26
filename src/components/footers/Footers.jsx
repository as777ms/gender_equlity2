import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footers = () => {
  const { t } = useTranslation(); // Using i18next for translations
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission and save to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      alert(t('messageSaved')); // Use translated string for alert
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } else {
      alert(t('fillOutFields')); // Use translated string for alert
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-200 via-blue-100 to-white px-6 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between items-center">
        {/* Contact Form Section */}
        <div className="md:w-[55%] w-full mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('getInTouch')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('yourName')}
              className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('yourEmail')}
              className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('yourMessage')}
              rows="4"
              className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t('submit')}
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="md:w-[40%] w-full text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('reachOut')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            {t('contactMessage')}
          </p>
          <p className="text-sm text-gray-600 italic">{t('resilientVoices')}</p>
        </div>
      </div>
    </div>
  );
};

export default Footers;

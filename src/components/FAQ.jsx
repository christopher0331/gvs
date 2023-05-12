import React, { useState } from 'react';
import './styles/faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const toggleMoreQuestions = () => {
    setShowMore(!showMore);
  };


  const faqData = [
    {
      question: 'What services does GreenView Solutions provide?',
      answer: 'GreenView Solutions is a fencing company based in Denver, Colorado. We offer a wide range of fencing services, including installation, repair, and maintenance for residential and commercial properties. We specialize in various fencing types such as wood, vinyl, chain link, wrought iron, and aluminum.',
    },
    {
      question: 'Where is GreenView Solutions located?',
      answer: 'Our office and showroom are located in Longmont, Colorado. We primarily serve the western and northern Denver area, including surrounding cities and suburbs.',
    },
    {
      question: 'How can I contact GreenView Solutions?',
      answer: 'You can reach us through the following methods:\n\n- Phone: 303.358.8168\n- Email: brandon@greenviewsolutions.net\n- \nFeel free to contact us with any questions or inquiries. We are available to assist you!',
    },
    {
      question: 'Does GreenView Solutions offer free estimates?',
      answer: 'Yes, we provide free estimates for all our fencing services. Simply contact us through phone or email, and we will schedule a convenient time to visit your property, assess your fencing needs, and provide you with a detailed estimate.',
    },
    {
      question: 'What factors affect the cost of fencing installation?',
      answer: 'Several factors can influence the cost of fencing installation. These include the type of fencing material, the length and height of the fence, the complexity of the terrain, and any additional features or customizations you may choose. Our team will evaluate these factors during the estimate process to provide you with an accurate quote.',
    },
    {
      question: 'How long does the fencing installation process take?',
      answer: 'The duration of the installation process depends on various factors such as the size of the project and the type of fencing being installed. Smaller residential installations can often be completed within a few days, while larger or more complex projects may take longer. During the estimate process, we will provide you with an estimated timeline based on the specifics of your project.',
    },
    {
      question: 'Does GreenView Solutions offer any warranty on fencing installations?',
      answer: 'Yes, we stand behind the quality of our workmanship. We offer a warranty on our fencing installations to ensure your satisfaction. The warranty details may vary depending on the type of fencing and materials used. Please contact us for more information regarding our warranty policies.',
    },
    {
      question: 'Can GreenView Solutions repair existing fences?',
      answer: 'Absolutely! Our team is experienced in fence repair and maintenance. Whether your fence has been damaged due to weather, accidents, or simply needs some upkeep, we can assess the situation and provide efficient repair solutions to restore the functionality and aesthetics of your fence.',
    },
    {
      question: 'Does GreenView Solutions offer customized fencing options?',
      answer: 'Yes, we understand that each property has unique requirements and design preferences. We offer various customization options to tailor the fencing solution to your specific needs. From ornamental designs to privacy enhancements, our team will work closely with you to create a customized fencing solution that meets your expectations.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, GreenView Solutions is a fully licensed and insured fencing company. We prioritize safety and compliance with all applicable regulations. Our team of professionals is trained and experienced to ensure quality workmanship while adhering to industry standards.',
    },
    {
      question: 'Does GreenView Solutions offer fencing maintenance services?',
      answer: 'Yes, we provide fencing maintenance services to keep your fence in optimal condition. Regular maintenance helps extend the lifespan of your fence and prevents potential issues. Our team can perform inspections, cleaning, repairs, and treatments to ensure your fence remains sturdy, attractive, and functional.',
    },
    {
      question: 'Can GreenView Solutions assist with obtaining  permits for fencing installation?',
      answer: 'Yes, we can assist you with the process of obtaining permits for your fencing installation. We have experience working with local authorities and understanding the permit requirements in Denver, Colorado. Our team will guide you through the necessary steps to ensure a smooth and compliant installation.',
    },
    {
      question: 'Does GreenView Solutions offer emergency fence repair services?',
      answer: 'Yes, we understand that emergencies can occur, and fences may require immediate attention. We offer emergency fence repair services to address urgent situations such as storm damage or unexpected accidents. Contact us as soon as possible, and we will prioritize your repair needs.',
    },
    {
      question: 'What sets GreenView Solutions apart from other fencing companies?',
      answer: 'At GreenView Solutions, we strive for excellence in every aspect of our work. Our dedication to quality craftsmanship, exceptional customer service, and attention to detail sets us apart. We take the time to understand your unique requirements and provide personalized solutions that meet your expectations. Customer satisfaction is our top priority.',
    },
    {
      question: 'Can GreenView Solutions remove and dispose of old fences?',
      answer: 'Yes, we offer fence removal and disposal services. If you have an existing fence that needs to be replaced or removed, our team can take care of the entire process. We will safely dismantle and dispose of the old fence, ensuring a clean and efficient transition to your new fencing installation.',
    },
    {
      question: 'Does GreenView Solutions offer any eco-friendly fencing options?',
      answer: 'Yes, we are committed to environmentally friendly practices. We offer eco-friendly fencing options such as sustainable wood, recycled materials, and low-maintenance, energy-efficient solutions. Our team can discuss these options with you and help you choose a fencing solution that aligns with your sustainability goals.',
    },
    {
      question: 'Can GreenView Solutions provide references or examples of previous projects?',
      answer: 'Certainly! We would be happy to provide references and show you examples of our previous fencing projects. Our portfolio showcases a variety of styles, materials, and finishes to give you an idea of our capabilities and the quality of our work.',
    },
    {
      question: 'Does GreenView Solutions offer financing options for fencing projects?',
      answer: 'Yes, we understand that fencing projects can be a significant investment. To help make it more manageable, we offer financing options. Our team can discuss the available financing plans and help you find a solution that fits your budget.',
    },
    {
      question: 'Can GreenView Solutions help with HOA (Homeowners Association) approvals?',
      answer: 'Absolutely! We have experience working with Homeowners Associations and understand the approval processes involved. We can provide the necessary documentation, specifications, and other requirements to assist you in obtaining HOA approval for your fencing project.',
    },
    {
      question: 'Does GreenView Solutions provide fencing services for commercial properties?',
      answer: 'Yes, GreenView Solutions caters to both residential and commercial clients. We have the expertise and resources to handle fencing projects for commercial properties, such as offices, warehouses, retail spaces, and more. Our team can accommodate the specific needs and regulations of commercial projects.',
    },
  ];
    
  const visibleFAQs = showMore ? faqData : faqData.slice(0, 10);

  return (
    <div className="faq-container">
      <div className="faq-intro">
        <h1>Welcome to our FAQ Page!</h1>
        <p>
          At GreenView Solutions, we are dedicated to providing exceptional fencing services to our valued customers in Denver, Colorado, and beyond. We understand that choosing the right fencing solution and navigating the installation process can raise questions. That's why we have created this FAQ page to address the most common inquiries we receive. Whether you're wondering about our services, looking for information on our location and contact details, or seeking answers about cost, customization, or warranties, you'll find the information you need here. We strive to make your fencing experience as smooth and informed as possible. If you don't find the answer you're looking for, please don't hesitate to reach out to our knowledgeable team. We're here to assist you every step of the way.
        </p>
      </div>
      {visibleFAQs.map((item, index) => (
        <div key={index} className={`faq-item ${expanded === index ? 'expanded' : ''}`}>
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            <span>{item.question}</span>
            <button className="accordion-icon">
              <FontAwesomeIcon icon={expanded === index ? faMinus : faPlus} />
            </button>
          </div>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
      {faqData.length > 10 && !showMore && (
        <button className="more-questions-btn" onClick={toggleMoreQuestions}>
          More Questions
        </button>
      )}
    </div>
  );
};

export default FAQ;
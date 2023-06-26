import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [marketingChannels, setMarketingChannels] = useState([]);
  const [bidTotal, setBidTotal] = useState('');
  const [completedProjectTotal, setCompletedProjectTotal] = useState('');
  const [projectTypes, setProjectTypes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceId =  "service_p6clffh";
    const templateId = "template_47r5iim";
    const userId = "user_wPYeoaoebNsoGt3GhzLVu";

    const templateParams = {
      name,
      address,
      phone,
      marketingChannels: marketingChannels.join(', '),
      bidTotal,
      completedProjectTotal,
      projectTypes: projectTypes.join(', ')
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((result) => {
        console.log(result.text);
        // Optionally, display a success message or redirect to a success page
      })
      .catch((error) => {
        console.log(error.text);
        // Optionally, display an error message
      });

    // Reset the form fields
    setName('');
    setAddress('');
    setPhone('');
    setMarketingChannels([]);
    setBidTotal('');
    setCompletedProjectTotal('');
    setProjectTypes([]);
  };

  const handleMarketingChannelChange = (channel) => {
    const updatedChannels = [...marketingChannels];

    if (updatedChannels.includes(channel)) {
      updatedChannels.splice(updatedChannels.indexOf(channel), 1);
    } else {
      updatedChannels.push(channel);
    }

    setMarketingChannels(updatedChannels);
  };

  const handleProjectTypeChange = (type) => {
    const updatedTypes = [...projectTypes];

    if (updatedTypes.includes(type)) {
      updatedTypes.splice(updatedTypes.indexOf(type), 1);
    } else {
      updatedTypes.push(type);
    }

    setProjectTypes(updatedTypes);
  };

  return (
    <div className="projOverviewDiv">
      <form onSubmit={handleSubmit}>
        <h1>Marketing Form</h1>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        
        <div>
          <p>Marketing Channel:</p>
          <label>
            <input
              type="checkbox"
              name="marketingChannel"
              value="Quality Connections"
              checked={marketingChannels.includes('Quality Connections')}
              onChange={() => handleMarketingChannelChange('Quality Connections')}
            />
            Quality Connections
          </label>
          <label>
            <input
              type="checkbox"
              name="marketingChannel"
              value="Google Search"
              checked={marketingChannels.includes('Google Search')}
              onChange={() => handleMarketingChannelChange('Google Search')}
            />
            Google Search
          </label>
          <label>
            <input
              type="checkbox"
              name="marketingChannel"
              value="Neighborhood"
              checked={marketingChannels.includes('Neighborhood')}
              onChange={() => handleMarketingChannelChange('Neighborhood')}
            />
            Neighborhood
          </label>
          <label>
            <input
              type="checkbox"
              name="marketingChannel"
              value="Door Hangar"
              checked={marketingChannels.includes('Door Hangar')}
              onChange={() => handleMarketingChannelChange('Door Hangar')}
            />
            Door Hangar
          </label>
          <label>
            <input
              type="checkbox"
              name="marketingChannel"
              value="Google Maps"
              checked={marketingChannels.includes('Google Maps')}
              onChange={() => handleMarketingChannelChange('Google Maps')}
            />
            Google Maps
          </label>
          <label>
            <input
              type="checkbox"
              name="marketingChannel"
              value="Google Ads"
              checked={marketingChannels.includes('Google Ads')}
              onChange={() => handleMarketingChannelChange('Google Ads')}
            />
            Google Ads
          </label>
          <label>
            <input
              type="checkbox"
              name="marketingChannel"
              value="Facebook Ads"
              checked={marketingChannels.includes('Facebook Ads')}
              onChange={() => handleMarketingChannelChange('Facebook Ads')}
            />
            Facebook Ads
          </label>
        </div>

        <div>
          <label>
            Bid Total:
            <input
              type="text"
              name="bidTotal"
              value={bidTotal}
              onChange={(e) => setBidTotal(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Completed Project Total:
            <input
              type="text"
              name="completedProjectTotal"
              value={completedProjectTotal}
              onChange={(e) => setCompletedProjectTotal(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>Type of Project:</p>
          <label>
            <input
              type="checkbox"
              name="projectType"
              value="Fencing"
              checked={projectTypes.includes('Fencing')}
              onChange={() => handleProjectTypeChange('Fencing')}
            />
            Fencing
          </label>
          <label>
            <input
              type="checkbox"
              name="projectType"
              value="Irrigation"
              checked={projectTypes.includes('Irrigation')}
              onChange={() => handleProjectTypeChange('Irrigation')}
            />
            Irrigation
          </label>
          <label>
            <input
              type="checkbox"
              name="projectType"
              value="Concrete"
              checked={projectTypes.includes('Concrete')}
              onChange={() => handleProjectTypeChange('Concrete')}
            />
            Concrete
          </label>
          <label>
            <input
              type="checkbox"
              name="projectType"
              value="Landscaping"
              checked={projectTypes.includes('Landscaping')}
              onChange={() => handleProjectTypeChange('Landscaping')}
            />
            Landscaping
          </label>
          <label>
            <input
              type="checkbox"
              name="projectType"
              value="BackFlowTesting"
              checked={projectTypes.includes('BackFlowTesting')}
              onChange={() => handleProjectTypeChange('BackFlowTesting')}
            />
            Backflow Testing
          </label>
        </div>
        <button className="pofButton" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

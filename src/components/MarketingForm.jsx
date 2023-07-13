import React, { useContext, useState } from 'react';
import { DataContext } from './Context.js'; // adjust this path to your context.js file location
import './styles/AboutUs.css';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [marketingChannels, setMarketingChannels] = useState([]);
  const [bidTotal, setBidTotal] = useState('');
  const [completedProjectTotal, setCompletedProjectTotal] = useState('');
  const [projectTypes, setProjectTypes] = useState([]);

  const { addItem } = useContext(DataContext);

  function generateRandomId() {
    const maxId = 100000;
    return Math.floor(Math.random() * maxId);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a new customer object
    const newCustomer = {
      id: generateRandomId(),
      key: generateRandomId(),
      name,
      address,
      phone,
      marketingChannels,
      bidTotal,
      completedProjectTotal,
      projectTypes
    };
  
    // Call the addItem function from the context to add the new customer
    addItem(newCustomer);
  
    // Reset the form fields
    setName('');
    setAddress('');
    setPhone('');
    setMarketingChannels('');
    setBidTotal('');
    setCompletedProjectTotal('');
    setProjectTypes('');
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
      <form className="formContainer" onSubmit={handleSubmit}>
        <h1 className="formTitle">Marketing Form</h1>
        <div className="formField">
        <div>
          <label className="formLabel">
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
            
          <label className="formLabel">
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
            
          <label className="formLabel">
            Phone:
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        
        <div className="marketingTypes">

          <p>Marketing Channel:</p>
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Quality Connections"
              checked={marketingChannels.includes('Quality Connections')}
              onChange={() => handleMarketingChannelChange('Quality Connections')}
            />
            Quality Connections
          </label>
          
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Google Search"
              checked={marketingChannels.includes('Google Search')}
              onChange={() => handleMarketingChannelChange('Google Search')}
            />
            Google Search
          </label>
          
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Neighborhood"
              checked={marketingChannels.includes('Neighborhood')}
              onChange={() => handleMarketingChannelChange('Neighborhood')}
            />
            Neighborhood
          </label>
          
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Door Hangar"
              checked={marketingChannels.includes('Door Hangar')}
              onChange={() => handleMarketingChannelChange('Door Hangar')}
            />
            Door Hangar
          </label>
          
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Google Maps"
              checked={marketingChannels.includes('Google Maps')}
              onChange={() => handleMarketingChannelChange('Google Maps')}
            />
            Google Maps
          </label>
          
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Google Ads"
              checked={marketingChannels.includes('Google Ads')}
              onChange={() => handleMarketingChannelChange('Google Ads')}
            />
            Google Ads
          </label>
          
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Facebook Ads"
              checked={marketingChannels.includes('Facebook Ads')}
              onChange={() => handleMarketingChannelChange('Facebook Ads')}
            />
            Facebook Ads
          </label>
          
          <label className="formLabel">

            <input
              type="checkbox"
              name="marketingChannel"
              value="Angies Leads Ads"
              checked={marketingChannels.includes('Angies Leads')}
              onChange={() => handleMarketingChannelChange('Angies Leads')}
            />
            Angies Leads
          </label>
        </div>
        <div>
            
          <label className="formLabel">
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
            
          <label className="formLabel">
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
          
          <label className="formLabel">
            <input
              type="checkbox"
              name="projectType"
              value="Fencing"
              checked={projectTypes.includes('Fencing')}
              onChange={() => handleProjectTypeChange('Fencing')}
            />
            Fencing
          </label>
          
          <label className="formLabel">
            <input
              type="checkbox"
              name="projectType"
              value="Irrigation"
              checked={projectTypes.includes('Irrigation')}
              onChange={() => handleProjectTypeChange('Irrigation')}
            />
            Irrigation
          </label>
          
          <label className="formLabel">
            <input
              type="checkbox"
              name="projectType"
              value="Concrete"
              checked={projectTypes.includes('Concrete')}
              onChange={() => handleProjectTypeChange('Concrete')}
            />
            Concrete
          </label>
          
          <label className="formLabel">
            <input
              type="checkbox"
              name="projectType"
              value="Landscaping"
              checked={projectTypes.includes('Landscaping')}
              onChange={() => handleProjectTypeChange('Landscaping')}
            />
            Landscaping
          </label>
          
          <label className="formLabel">
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
    </div>
    </form>
    </div>
  );
};

export default ContactForm;

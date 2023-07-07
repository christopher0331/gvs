import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/AboutUs.css';

const ContactForm = () => {
  const [postType, setPostType] = useState('');
  const [picketSize, setPicketSize] = useState('');
  const [picketOrientation, setPicketOrientation] = useState('');
  const [tempFence, setTempFence] = useState('');
  const [address, setAddress] = useState('');
  const [comments, setComments] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceId =  "service_p6clffh";
    const templateId = "template_499vmpm";
    const userId = "user_wPYeoaoebNsoGt3GhzLVu";

    const templateParams = {
      postType,
      picketSize,
      picketOrientation,
      tempFence,
      address,
      comments
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

    setShowPopup(true);
    
    // Reset the form fields
    setPostType('');
    setPicketSize('');
    setPicketOrientation('');
    setTempFence('');
    setAddress('');
    setComments('');
  };

  const handleClosePopup = () => {
    // Close the pop-up message
    setShowPopup(false);
  };


  return (
    <div className="projOverviewDiv">
        <form onSubmit={handleSubmit}>
        <h1>Project Overview Form</h1>
        <div>
            <p className="pofLabel">Posts:</p>
            <label>
            <input
                type="radio"
                name="postType"
                value="Steel PostMaster Post"
                checked={postType === 'Steel PostMaster Post'}
                onChange={() => setPostType('Steel PostMaster Post')}
            />
            Steel PostMaster Post
            </label>
            <label>
            <input
                type="radio"
                name="postType"
                value="Cedar 4x4 Posts"
                checked={postType === 'Cedar 4x4 Posts'}
                onChange={() => setPostType('Cedar 4x4 Posts')}
            />
            Cedar 4x4 Posts
            </label>
        </div>
        <div>
            <p className="pofLabel">Picket Size:</p>
            <label>
            <input
                type="radio"
                name="picketSize"
                value="4"
                checked={picketSize === '4'}
                onChange={() => setPicketSize('4')}
            />
            4"
            </label>
            <label>
            <input
                type="radio"
                name="picketSize"
                value="6"
                checked={picketSize === '6'}
                onChange={() => setPicketSize('6')}
            />
            6"
            </label>
        </div>
        <div>
            <p className="pofLabel">Picket Orientation:</p>
            <label>
            <input
                type="radio"
                name="picketOrientation"
                value="Facing Client (In)"
                checked={picketOrientation === 'Facing Client (In)'}
                onChange={() => setPicketOrientation('Facing Client (In)')}
            />
            Facing Client (In)
            </label>
            <label>
            <input
                type="radio"
                name="picketOrientation"
                value="Facing Out"
                checked={picketOrientation === 'Facing Out'}
                onChange={() => setPicketOrientation('Facing Out')}
            />
            Facing Out
            </label>
        </div>
        <div>
            <p className="pofLabel">Temp Fence (Orange Construction Fence):</p>
            <label>
            <input
                type="radio"
                name="tempFence"
                value="Yes"
                checked={tempFence === 'Yes'}
                onChange={() => setTempFence('Yes')}
            />
            Yes
            </label>
            <label>
            <input
                type="radio"
                name="tempFence"
                value="No"
                checked={tempFence === 'No'}
                onChange={() => setTempFence('No')}
            />
            No
            </label>
        </div>
        <div>
            <p className="pofLabel">Address:</p>
            <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
        </div>
        <div>
            <p className="pofLabel">Other Comments:</p>
            <textarea
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            ></textarea>
        </div>
        <button className="pofButton" type="submit">Submit</button>
        </form>
        {showPopup && (
            <div className="popup">
            <div className="popup-content">
                <p>Thank you for your submission!</p>
                <span className="close" onClick={handleClosePopup}>
                &times;
                </span>
            </div>
            </div>
        )}
        
      </div>
  );
};

export default ContactForm;


// // Application.js

// import React, { useState } from 'react';
// import { Input, Radio, Select, Checkbox, Button } from 'antd';
// import './Application.css'; // Import the CSS file

// const { TextArea } = Input;

// const plainOptions = ['English', 'Maths', 'Science', 'History'];

// const Application = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     phoneNo: '',
//     gender: 1,
//     address: '',
//     subjects: [],
//     selectedClass: 'Select class',
//   });

//   const handleInputChange = (fieldName, value) => {
//     setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
//   };

//   const handleGenderChange = (e) => handleInputChange('gender', e.target.value);

//   const handleSubjectsChange = (checkedValues) => handleInputChange('subjects', checkedValues);

//   const handleClassChange = (value) => handleInputChange('selectedClass', value);

//   const handleSubmit = () => console.log('Form Data Submitted:', formData);

//   return (
//     <div className="form-container">
//       <div className="form-row">
//         <div className="form-column">
//           <label>First Name:</label>
//           <Input
//             placeholder="Enter your First Name"
//             value={formData.firstName}
//             onChange={(e) => handleInputChange('firstName', e.target.value)}
//           />

//           <label>Date of Birth:</label>
//           <Input
//             placeholder="DD/MM/YYYY"
//             value={formData.dateOfBirth}
//             onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
//           />
//         </div>

//         <div className="form-column">
//           <label>Last Name:</label>
//           <Input
//             placeholder="Enter your Last Name"
//             value={formData.lastName}
//             onChange={(e) => handleInputChange('lastName', e.target.value)}
//           />

//           <label>Phone no:</label>
//           <Input
//             placeholder=" "
//             value={formData.phoneNo}
//             onChange={(e) => handleInputChange('phoneNo', e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-column">
//           <label>Gender:</label>
//           <Radio.Group onChange={handleGenderChange} value={formData.gender}>
//             <Radio value={1}>Male</Radio>
//             <Radio value={2}>Female</Radio>
//             <Radio value={3}>Other</Radio>
//           </Radio.Group>
//         </div>

//         <div className="form-column">
//           <label>Address:</label>
//           <TextArea
//             rows={4}
//             value={formData.address}
//             onChange={(e) => handleInputChange('address', e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="form-row">
//         <div className="form-column">
//           <label>Subjects interested in:</label>
//           <Checkbox.Group
//             options={plainOptions}
//             value={formData.subjects}
//             onChange={handleSubjectsChange}
//           />
//         </div>

//         <div className="form-column">
//           <label>Class:</label>
//           <Select
//             style={{ width: '100%' }}
//             value={formData.selectedClass}
//             onChange={handleClassChange}
//             options={[
//               { value: '9', label: '9' },
//               { value: '10', label: '10' },
//               { value: '11', label: '11' },
//               { value: '12', label: '12', disabled: false },
//             ]}
//           />
//         </div>
//       </div>

//       <Button type="primary" onClick={handleSubmit} className="submit-button">
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default Application;

// Application.js

import React, { useState } from 'react';
import { Input, Radio, Select, Checkbox, Button } from 'antd';
import './Application.css'; // Import the CSS file

const { TextArea } = Input;

const plainOptions = ['English', 'Maths', 'Science', 'History'];

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNo: '',
    gender: 1,
    address: '',
    subjects: [],
    selectedClass: 'Select class',
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const handleGenderChange = (e) => handleInputChange('gender', e.target.value);

  const handleSubjectsChange = (checkedValues) => handleInputChange('subjects', checkedValues);

  const handleClassChange = (value) => handleInputChange('selectedClass', value);

  const handleSubmit = () => console.log('Form Data Submitted:', formData);

  return (
    <div className="form-container">


<div className="form-row">
  <div className="form-column">
    <label>First Name:</label>
    <Input
      placeholder="Enter your First Name"
      value={formData.firstName}
      onChange={(e) => handleInputChange('firstName', e.target.value)}
    />

    <label>Date of Birth:</label>
    <Input
      placeholder="DD/MM/YYYY"
      value={formData.dateOfBirth}
      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
    />

    <label>Gender:</label>
    <Radio.Group onChange={handleGenderChange} value={formData.gender}>
      <Radio value={1}>Male</Radio>
      <Radio value={2}>Female</Radio>
      <Radio value={3}>Other</Radio>
    </Radio.Group>

    <div className="subjects">
    <label>Subjects interested in:</label>
    <Checkbox.Group
      options={plainOptions}
      value={formData.subjects}
      onChange={handleSubjectsChange}
    />
      </div>
  </div>

  <div className="form-column">
    <label>Last Name:</label>
    <Input
      placeholder="Enter your Last Name"
      value={formData.lastName}
      onChange={(e) => handleInputChange('lastName', e.target.value)}
    />

    <label>Phone no:</label>
    <Input
      placeholder=" "
      value={formData.phoneNo}
      onChange={(e) => handleInputChange('phoneNo', e.target.value)}
    />

    <label>Address:</label>
    <TextArea
      rows={4}
      value={formData.address}
      onChange={(e) => handleInputChange('address', e.target.value)}
    />

    <label>Class:</label>
    <Select
      style={{ width: '100%' }}
      value={formData.selectedClass}
      onChange={handleClassChange}
      options={[
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12', disabled: false },
      ]}
    />
  </div>
</div>



      <Button type="primary" onClick={handleSubmit} className="submit-button">
        Submit
      </Button>
    </div>
  );
};

export default Application;

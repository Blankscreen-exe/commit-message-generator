import React, { useState } from 'react';

export default function Form(props) {
  const [scope, setScope] = useState("");
  const [showFeatureName, setShowFeatureName] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [breakingChanges, setBreakingChanges] = useState("");

  const handleScopeChange = (event) => {
    const value = event.target.value;
    setScope(value);
    setShowFeatureName(value === "feat");
  };

  const handleBreakingChangesChange = (event) => {
    const value = event.target.value;
    setBreakingChanges(value);
    setShowFooter(value === "yes");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const commitTitle = `${event.scope}${event.breakingChanges === "yes" && "!"}: ${event.title}`
    // console.log(commitTitle)
    // props.setTitle(commitTitle)
    // props.setBody()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" name="title" required />
      </div>
      <div>
        <label htmlFor="scope">Scope:</label>
        <select id="scope" name="scope" value={scope} onChange={handleScopeChange}>
          <option value="">Select a scope</option>
          <option value="feat">feat</option>
          <option value="fix">fix</option>
          <option value="docs">docs</option>
          <option value="test">test</option>
        </select>
      </div>
      {showFeatureName && (
        <div>
          <label htmlFor="featureName">Feature Name:</label>
          <input id="featureName" type="text" name="featureName" />
        </div>
      )}
      <div>
        <label>Breaking Changes?:</label>
        <label>
          <input type="radio" name="breakingChanges" value="yes" checked={breakingChanges === "yes"} onChange={handleBreakingChangesChange} />
          Yes
        </label>
        <label>
          <input type="radio" name="breakingChanges" value="no" checked={breakingChanges === "no"} onChange={handleBreakingChangesChange} />
          No
        </label>
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" />
      </div>
      {showFooter && (
        <div>
          <label htmlFor="footer">Footer:</label>
          <textarea id="footer" name="footer" />
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}


// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// export default function Form() {
//   const [scope, setScope] = useState("");
//   const [showFeatureName, setShowFeatureName] = useState(false);
//   const [showFooter, setShowFooter] = useState(false);
//   const [breakingChanges, setBreakingChanges] = useState("");

//   const handleScopeChange = (event) => {
//     const value = event.target.value;
//     setScope(value);
//     setShowFeatureName(value === "feat");
//   };

//   const handleBreakingChangesChange = (event) => {
//     const value = event.target.value;
//     setBreakingChanges(value);
//     setShowFooter(value === "yes");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // do something with form data
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="title">
//         <Form.Label>Title:</Form.Label>
//         <Form.Control type="text" name="title" required />
//       </Form.Group>
//       <Form.Group controlId="scope">
//         <Form.Label>Scope:</Form.Label>
//         <Form.Control as="select" name="scope" value={scope} onChange={handleScopeChange}>
//           <option value="">Select a scope</option>
//           <option value="feat">feat</option>
//           <option value="fix">fix</option>
//           <option value="docs">docs</option>
//           <option value="test">test</option>
//         </Form.Control>
//       </Form.Group>
//       {showFeatureName && (
//         <Form.Group controlId="featureName">
//           <Form.Label>Feature Name:</Form.Label>
//           <Form.Control type="text" name="featureName" />
//         </Form.Group>
//       )}
//       <Form.Group>
//         <Form.Label>Breaking Changes?:</Form.Label>
//         <Form.Check
//           type="radio"
//           name="breakingChanges"
//           label="Yes"
//           value="yes"
//           checked={breakingChanges === "yes"}
//           onChange={handleBreakingChangesChange}
//         />
//         <Form.Check
//           type="radio"
//           name="breakingChanges"
//           label="No"
//           value="no"
//           checked={breakingChanges === "no"}
//           onChange={handleBreakingChangesChange}
//         />
//       </Form.Group>
//       <Form.Group controlId="body">
//         <Form.Label>Body:</Form.Label>
//         <Form.Control as="textarea" name="body" />
//       </Form.Group>
//       {showFooter && (
//         <Form.Group controlId="footer">
//           <Form.Label>Footer:</Form.Label>
//           <Form.Control as="textarea" name="footer" />
//         </Form.Group>
//       )}
//       <Button type="submit">Submit</Button>
//     </Form>
//   );
// }

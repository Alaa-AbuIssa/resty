import React from 'react';
import { useState } from 'react';
import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;

function Form (props){

  let [showPost,setShowPost]=useState(false);
  let [method,setmethod]=useState('get');
  let [url,seturl]=useState("https://pokeapi.co/api/v2/pokemon")
  let [requestBody,setRequestBody]=useState(); 


   function handleSubmit (e) {
      e.preventDefault();
      const formData = {
        method:method,
        url: url
      };
      props.handleApiCall(formData,requestBody);
    }


    function handlePost(e){
      setShowPost(!showPost);
      setmethod(e.target.id);
    }

    function handleUrl(e){
      seturl(e.target.value);
    }

    function handleRequest(e){
      setRequestBody(e.target.value);
    }

    function setMethod(e){
      setmethod(e.target.id);
    }




      return (
        <>
          <form onSubmit={handleSubmit}>
            <label >
              <span>URL:</span>
              <input name='url' type='text' onChange={handleUrl} />
              <button type="submit">GO!</button>
            </label>
            <label className="methods">
            {/* <button type="button" id="hide"></button> */}
            <button className='butt' type='button' id="get" onClick={setMethod}>GET</button>
            <button className='butt' type='button' id="post" onClick={handlePost}>POST</button>
            <button className='butt' type='button' id="put" onClick={handlePost}>PUT</button>
            <button className='butt' type='button' id="delete" onClick={setMethod}>DELETE</button>     
            </label>
            {showPost&& <textarea name="post_put" rows="15" cols="35" onChange={handleRequest}></textarea>}
          </form>
        </>
      );
    
  }
  
  export default Form;
  
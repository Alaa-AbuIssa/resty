import React from 'react';
import axios from 'axios';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/History'
import { useState, useEffect, useReducer } from 'react';
import './app.scss';

const initialState = [];

// Reducer
function reducer(history = initialState, action) {
  const type = action;
  const payload = action;

  switch (type) {
    case 'AddToHistory':
      history = [...history, payload];
      return history;
    default:
      return history;
  }
}

function addToHistory(url, method, result) {

  return ({
    type: 'AddToHistory',
    payload: {
      url,
      method,
      result
    }
  })
}



function App() {
// use Reducer
  const [history, sendOff] = useReducer(reducer, initialState);
  // use state
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({})
  const [requestBody, setRequestBody] = useState({});

//// use Effect 
  useEffect(async () => {
    setData(null);
    if (requestBody) {
      const result = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
      sendOff(addToHistory(requestParams.url, requestParams.method, data))
    } else {
      const result = await axios[requestParams.method](requestParams.url);
      const data = { headers: result.headers, count: result.data.count, results: result.data.results }
      setData(data);
      sendOff(addToHistory(requestParams.url, requestParams.method, data));
    }
  }, [requestParams]);




  function callApi(requestParams, requestBody) {

    setRequestParams(requestParams);
    setRequestBody(requestBody)
  }
  // mock output
  // const data = {
  //   count: 2,
  //   results: [
  //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
  //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
  //   ],
  // };
  // this.setState({data, requestParams});

  function historyFunction(result) {
    setData(result);
  }


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {history && <History historyFunction={historyFunction} history={history} />}
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}


export default App;

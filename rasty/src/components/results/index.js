import React from 'react';
import Loading from '../Loading/Loading';
import Pretty from 'react-json-pretty';
import 'react-json-pretty/themes/1337.css'

function Results(props) {

  return (
    <section data-testid="testResult">
      {props.data ? <><h2>Headers</h2><Pretty data={props.data.headers}></Pretty><h2>Result</h2><Pretty data-testid="renderedData" data={props.data.results}></Pretty></> : <Loading />}      </section>
  );

}

export default Results;

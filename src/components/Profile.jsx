import {useState, useEffect} from 'react';
import axios from 'axios';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

export default function Profile() {
	
	const [readings, setReadings] = useState('');
	const [error, setError] = useState(null);
	
	useEffect(() => {
    API.get('apiName', '/readings')
		  .then(response => {
			setReadings(response.readings);
		  })
		  .catch(err => {
			setError('Error fetching readings');
		  });
	  }, []);
  
	return (
    <div>
      <h1>Daily Bible Readings</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <pre>{readings}</pre>
        </div>
      )}
    </div>
  );
	
}
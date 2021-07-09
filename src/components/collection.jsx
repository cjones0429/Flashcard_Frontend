import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Collection() {
  const [ collection, setCollection ] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/collection/').then((response) => {
        setCollection(response.data);
      });
    }, []);


 

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Students() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://school-managemant-system.onrender.com/api/students")
      .then(res => setData([res.data]))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

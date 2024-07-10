import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner"

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = res.json();
        setJob(data);
      } catch (error) {
        console.log("An error ocurrend: ", error);
      } finally {
        isLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? <Spinner /> : (
    <h2>Job {id}</h2>
  )
};

export default JobPage;

import { useState, useEffect } from "react";
import { PROJECT_URL, POPULATE_URL } from "../../services/API";

import { Section } from "./ProjectList.styled";

import ProjectItem from "./PItem";

export default function ProjectList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(PROJECT_URL + POPULATE_URL);
        if (response.ok) {
          const json = await response.json();
          // console.log(json);
          setData(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  // Loading DATA
  if (loading) {
    return <div>Loading...</div>;
  }
  // If ERROR
  if (error) {
    return <div>ERROR: An error occured</div>;
  }
  // Create ITEM
  return (
    <Section>
      {data.map((item) => {
        const id = item.id;
        const title = item.attributes.title;
        const img = item.attributes.image.data[0].attributes.formats.small.url;
        return <ProjectItem key={id} id={id} title={title} img={img} />;
      })}
    </Section>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PROJECT_URL, POPULATE_URL } from "../../services/API";

import Heading from "../../components/Heading/Heading";
import { Section } from "./Detail.styled";

export default function Detail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = PROJECT_URL + "/" + id + POPULATE_URL;

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          // console.log(json);
          setData(json.data);
        } else {
          setError("An ERROR occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  const title = data.attributes.title;
  const img = data.attributes.image.data[0].attributes.formats.medium.url;
  const descriptions = data.attributes.descriptions;

  return (
    <>
      <Heading>{title}</Heading>
      <Section>
        <p>{descriptions}</p>
        <img src={img} alt="description" />
      </Section>
    </>
  );
}

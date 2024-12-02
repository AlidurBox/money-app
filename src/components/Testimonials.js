import React, { useEffect, useState } from 'react';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch testimonials from API
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch testimonials.');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Debugging: Log API response
        setTestimonials(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <section className="testimonials">Loading testimonials...</section>;
  }

  if (error) {
    return <section className="testimonials">Error: {error}</section>;
  }

  if (testimonials.length === 0) {
    return <section className="testimonials">No testimonials available.</section>;
  }

  return (
    <section className="testimonials">
      <h1>Clients are <br /> Loving Our App</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            {/* Star ratings */}
            <div className="stars">
              {'★'.repeat(testimonial.starRating || 0)}{'☆'.repeat(5 - (testimonial.starRating || 0))}
            </div>

            {/* Testimonial comment */}
            <p>{testimonial.comment || "No comment available."}</p>

            {/* Client information */}
            <div className="client-info">
              <img
                src={testimonial.avatarUrl || "https://via.placeholder.com/50"}
                alt={`Client: ${testimonial.author || "Anonymous"}`}
                className="client-photo"
              />
              <div>
                <p className="client-name">{testimonial.author || "Anonymous"}</p>
                <p className="client-role">{testimonial.jobRole || "No role specified"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

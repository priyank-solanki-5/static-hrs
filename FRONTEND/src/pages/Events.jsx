import React, { useState } from "react";
import { getHighlightedEvents, getAllEvents } from "../data/staticData";
import Card from "../components/Card";
import HeroWaveSection from "../components/HeroWaveSection";

const Events = () => {
  const [highlights] = useState(() => getHighlightedEvents());
  const [allEvents] = useState(() => getAllEvents());

  // Helper function to check if event date is in the future
  const isUpcomingEvent = (eventDate) => {
    if (!eventDate) return false;
    try {
      const eventDateObj = new Date(eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return eventDateObj >= today;
    } catch {
      return false;
    }
  };

  // Get upcoming events
  const upcoming = allEvents.filter(
    (e) => isUpcomingEvent(e.date) && !e.isHighlighted
  );

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      const day = date.getDate();
      const month = date.toLocaleDateString("en-US", { month: "short" });
      return `${day} ${month}`;
    } catch {
      return dateString;
    }
  };

  // 🔁 Reusable card component for both sections
  const EventCard = ({ event }) => (
    <Card
      image={event.image}
      title={event.title}
      description={event.description}
      date={event.date ? formatDate(event.date) : null}
      showGradient={true}
    />
  );

  return (
    <>
      <title>Events | Holy Redeemer School</title>
      <div className="bg-white">
        <HeroWaveSection
          eyebrow="Celebrate Every Moment"
          title="Events"
          subtitle="From academic fairs to cultural fests, here’s what’s happening on campus."
        />

        {/* Event Highlights - First Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Events Highlights
          </h2>
          {highlights.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No highlighted events at the moment.
            </div>
          )}
          {highlights.length > 0 && (
            <div className="grid gap-8 md:grid-cols-3">
              {highlights.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </section>

        {/* All Events - Second Section */}
        <section className="container mx-auto px-6 py-16 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            All Events
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {allEvents.length > 0 ? (
              allEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))
            ) : (
              <div className="text-center col-span-3 text-gray-500">
                No events found.
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Events - Third Section */}
        <section className="container mx-auto px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Upcoming Events
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {upcoming.length > 0 ? (
              upcoming.map((event) => (
                <EventCard key={event._id} event={event} />
              ))
            ) : (
              <div className="text-center col-span-3 text-gray-500">
                No upcoming events found.
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;

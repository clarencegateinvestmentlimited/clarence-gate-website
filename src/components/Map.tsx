const Map = () => {
  return (
    <section className="lagos-map py-4 px-4 md:px-[8%]">
      <div className="map-container w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-teal-500/30 shadow-2xl">
        <iframe
          title="Caladium Consulting Location - Dolphin Plaza"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.498363749779!2d3.4216393749921665!3d6.458376993533161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4b8c92dc04b%3A0x507772c722d7a22!2sDolphin%20Plaza!5e0!3m2!1sen!2sng!4v1715000000000!5m2!1sen!2sng"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
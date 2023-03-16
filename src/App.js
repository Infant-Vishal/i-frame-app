import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h3>Youtube video</h3>
        <iframe
          className="i-frame-element"
          src="https://www.youtube.com/embed/2AQOIK_IlaI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h3>Google Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.8690539150674!2d80.24675231186265!3d13.038699890811904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b7e87b8e77%3A0x588f9e91541227be!2sWorkafella%20Teynampet%20-%20Coworking%20Space%20in%20Chennai!5e0!3m2!1sen!2sin!4v1656051066813!5m2!1sen!2sin"
          className="i-frame-element"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;

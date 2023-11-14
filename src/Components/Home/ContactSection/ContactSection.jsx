

const ContactSection = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg">Address: 123 School Street, Cityville</p>
              <p className="text-lg">Phone: (555) 123-4567</p>
            </div>
            <div>
              {/* Add a contact form here if needed */}
              <p className="text-lg">Have a question? Send us a message!</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
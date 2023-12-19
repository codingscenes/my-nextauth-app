const About = () => {
  const mockData = {
    title: "About Us",
    description:
      "Welcome to our website! We are a team of passionate developers dedicated to creating amazing software solutions.",
    // Add more mock data properties as needed
  };

  return (
    <div className="mt-8">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">{mockData.title}</h1>
        <p className="mt-2">{mockData.description}</p>
      </div>
    </div>
  );
};

export default About;

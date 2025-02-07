import featuresData from "../sampledata/FeaturesData";

const Features = () => {
  return (
    <div>
      <div className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 " >
        <h3 className="text-4xl sm:text-4xl md:text-3xl font-extrabold text-gray-800 my-6">Incentives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center"
              >
                <Icon className="text-6xl mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">{feature.heading}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
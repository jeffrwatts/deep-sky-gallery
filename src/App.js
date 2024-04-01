import './App.css';
import DeepSkyObject from './DeepSkyObject';

const deepSkyObjects = [{'name': 'Double Cluster', 'image': '/images/caldwell14.webp'}, {'name': 'Crab Nebula', 'image': '/images/m1.webp'}, {'name': 'Andromeda Galaxy', 'image': '/images/m31.webp'}, {'name': 'Owl Nebula', 'image': '/images/m97.webp'}, {'name': 'Pinwheel Galaxy', 'image': '/images/m101.webp'}, {'name': 'M78', 'image': '/images/m78.webp'}, {'name': 'Hercules Globular Cluster', 'image': '/images/m13.webp'}, {'name': 'Rosette Nebula', 'image': '/images/caldwell49.webp'}, {'name': 'Tau Canis Majoris Cluster', 'image': '/images/caldwell64.webp'}, {'name': 'Sombrero Galaxy', 'image': '/images/m104.webp'}, {'name': 'Leo Triplet', 'image': '/images/m66.webp'}, {'name': 'Whirlpool Galaxy', 'image': '/images/m51.webp'}, {'name': 'Triangulum Galaxy', 'image': '/images/m33.webp'}, {'name': '12P/Pons-Brooks Comet', 'image': '/images/p12.webp'}, {'name': 'Pleiades', 'image': '/images/m45.webp'}, {'name': 'Orion Nebula', 'image': '/images/m42.webp'}, {'name': "Bode's Galaxy and Cigar Galaxy", 'image': '/images/m81.webp'}];

function App() {
  return (
    <div className="App">
      <h1>Deep Sky Gallery</h1>
      <div className="gallery">
        {deepSkyObjects.map((object, index) => (
          <DeepSkyObject key={index} name={object.name} image={object.image} />
        ))}
      </div>
    </div>
  );
}

export default App;


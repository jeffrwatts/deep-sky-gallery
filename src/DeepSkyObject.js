import React from 'react';

function DeepSkyObject({ name, image }) {
  return (
    <div className="deep-sky-object">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default DeepSkyObject;

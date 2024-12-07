const CONFIGURATION = {
  locations: [
    {
      title: "NexzGen Studio",
      address1: "Level 9, Integra Tower",
      address2: "Kuala Lumpur, Kuala Lumpur, Malaysia",
      coords: {
        lat: 3.1609298,
        lng: 101.720296,
      },
    },
  ],
  mapOptions: {
    center: { lat: 3.1609298, lng: 101.720296 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 15,
    zoomControl: true,
    maxZoom: 17,
  },
  capabilities: {
    input: false,
    autocomplete: false,
    directions: false,
    distanceMatrix: false,
    details: false,
    actions: false,
  },
};

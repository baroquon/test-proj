export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.deferReadiness();
  const geo = navigator.geolocation;
  geo.getCurrentPosition(pos => {
    let pt = pos.coords;
    let loc = {
      lat: pt.latitude,
      lng: pt.longitude
    };
    application.register('data:location', loc, { instantiate: false });
    application.advanceReadiness();
  });
}

export default {
  name: 'geocode',
  initialize
};

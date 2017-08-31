export function initialize(app) {
  let fbService = app.lookup('service:fastboot');
  let shoebox = fbService.get('shoebox');
  let shoeboxStore = shoebox.retrieve('request-data');

  let ua = null;
  if (fbService.get('isFastBoot')) {
    let headers = fbService.get('request.headers');
    ua = headers.get('user-agent');
    console.log('ua', ua);
    app.register('data:request', { userAgent: ua }, { instantiate: false });

    if (!shoeboxStore) { // Lazily create the store
      shoeboxStore = {};
      shoebox.put('request-data', shoeboxStore);
    }
    shoeboxStore['userAgent'] = ua;
  } else if(shoeboxStore){
    // not in fastboot
    ua = shoeboxStore.userAgent;
    app.register('data:request', { userAgent: ua }, { instantiate: false });
  }
}

export default {
  name: 'request-type',
  initialize
};

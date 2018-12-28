const ylMemCache = require('./index');

const c = new ylMemCache('cache-key');
c.set('a', 1);
c.set('b', 2);
c.set('c', 3, ylMemCache.ONE_HOUR);

console.log(c.get('a'), c.get('b'), c.get('c'));

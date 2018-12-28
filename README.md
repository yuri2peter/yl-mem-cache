# yl-mem-cache

A simple memory cache for js.

# How to Use
```javascript
import YlMemCache from 'yl-mem-cache';
 
const c = new YlMemCache('cache-key');
c.set('a', 1);
c.set('b', 2);
c.set('c', 3, YlMemCache.ONE_HOUR);
 
console.log(c.get('a'), c.get('b'), c.get('c'));
```
# API

## constructor(string namespace)

@param namespace Set cache namespace. Using same namespace to attach same cache data.

@return YlCache

## set(string key, mixed value, int expire = 0)

Set cache data.

@param key Cache key

@param value Cache value

@param expire Expire time(s)

## has(string key)

Check if cache exist or not.

@param key Cache key

@return bool Returns true if cache exists

## get(string key, mixed defaultValue = undefined)

Get cache data.

@param key Cache key

@param defaultValue Return this value if cache is not exists

@return mixed Cache value

## pop(string key, mixed defaultValue = undefined)

Same as method get but delete the cache after read.

remove(string key)

Remove a cache.

@param key Cache key

import axios from "axios";

const getClient = (requestInterceptor, responseInterceptor, baseUrl = null) => {
  const options = {
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };

  const client = axios.create(options);
  client.interceptors.request.use(requestInterceptor);
  client.interceptors.response.use(responseInterceptor);
  return client;
};

class ApiClient {
  constructor(requestInterceptor, responseInterceptor, baseUrl = null) {
    this.client = getClient(baseUrl);
  }

  setAuthorizationToken(token) {
    if (token !== undefined && token !== null && token !== '') {
      this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common.Authorization;
    }
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export { ApiClient };

/**
 * Base HTTP Client
 */
export default {
  get(url, conf = {}) {
    return getClient()
      .get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  delete(url, conf = {}) {
    return getClient()
      .delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  head(url, conf = {}) {
    return getClient()
      .head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  options(url, conf = {}) {
    return getClient()
      .options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  post(url, data = {}, conf = {}) {
    return getClient()
      .post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  put(url, data = {}, conf = {}) {
    return getClient()
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  patch(url, data = {}, conf = {}) {
    return getClient()
      .patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};

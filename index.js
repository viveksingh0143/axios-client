import axios from "axios";

const AxiosClient = {};

AxiosClient.install = (Vue, options) => {
  const defaultOptions = {
    baseURL: '/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    // request interceptor handler
    reqHandleFunc: config => config,
    reqErrorFunc: error => Promise.reject(error),
    // response interceptor handler
    resHandleFunc: response => response,
    resErrorFunc: error => Promise.reject(error)
  };

  const initOptions = {
    ...defaultOptions,
    ...options
  };

  const client = axios.create(initOptions);

  client.interceptors.request.use(
    config => initOptions.reqHandleFunc(config),
    error => initOptions.reqErrorFunc(error)
  );
  // Add a response interceptor
  client.interceptors.response.use(
    response => initOptions.resHandleFunc(response),
    error => initOptions.resErrorFunc(error)
  );

  Vue.prototype.$axios = client;
  Vue.prototype.$http = {
    get: (url, data, options = {}) => {
      let axiosOpt = {
        ...options,
        ...{
          method: 'get',
          url: url,
          params: data
        }
      }
      return client(axiosOpt);
    },

    post: (url, data = {}, options = {}) => {
      let axiosOpt = {
        ...options,
        ...{
          method: 'post',
          url: url,
          data: data
        }
      }
      return client(axiosOpt);
    },

    head(url, data = {}, options = {}) {
      let axiosOpt = {
        ...options,
        ...{
          method: 'head',
          url: url,
          params: data
        }
      }
      return client(axiosOpt);
    },

    options(url, data = {}, options = {}) {
      let axiosOpt = {
        ...options,
        ...{
          method: 'options',
          url: url,
          params: data
        }
      }
      return client(axiosOpt);
    },

    delete(url, data, options = {}) {
      let axiosOpt = {
        ...options,
        ...{
          method: 'delete',
          url: url,
          params: data
        }
      }
      return client(axiosOpt);
    },

    put(url, data = {}, conf = {}) {
      let axiosOpt = {
        ...options,
        ...{
          method: 'put',
          url: url,
          data: data
        }
      }
      return client(axiosOpt);
    },

    patch(url, data = {}, conf = {}) {
      let axiosOpt = {
        ...options,
        ...{
          method: 'patch',
          url: url,
          data: data
        }
      }
      return client(axiosOpt);
    }
  };
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(AxiosClient)
}
export default AxiosClient;

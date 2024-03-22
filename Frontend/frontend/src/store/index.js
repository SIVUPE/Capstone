import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'
const DataURL = 'https://capstone-wnov.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    services: null,
    service: null
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setServices(state, value) {
      state.services = value
    },
    setService(state, value) {
      state.service = value
    },
  },
  actions: {
    async register(context, payload) {
      try{
        console.log("From the store: ", payload);
        let {msg} = (await axios.post(`${DataURL}users/register`, payload)).data
        // if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
          //  
          router.push({name: 'login'})
        // }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUsers(context) {
      try{
        let {results} = (await axios.get(`${DataURL}users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUser(context, payload) {
      try{
        let {result} = (await axios.get(`${DataURL}users/${payload.id}`)).data
        if(result) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async updateUser(context, payload) {
      try{
        let {msg} = await axios.patch(`${DataURL}users/update/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Update user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "success",
          timer: 2000
        }) 
      }
    },
    async postUser(context, payload) {
      try{
        let {msg} = await axios.post(`${DataURL}users/post/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Add user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when posting a user.',
          icon: "success",
          timer: 2000
        }) 
      }
    },
  // async deleteUser(context, payload) {
  //     try{
  //       let {msg} = await axios.delete(`${DataURL}users/${payload.id}`)
  //       if(msg) {
  //         context.dispatch('fetchUsers')
  //         sweet({
  //           title: 'Delete user',
  //           text: msg,
  //           icon: "success",
  //           timer: 2000
  //         }) 
  //       }
  //     }catch(e) {
  //       sweet({
  //         title: 'Error',
  //         text: 'An error occurred when deleting a user.',
  //         icon: "error",
  //         timer: 2000
  //       }) 
  //     }
  //   },
  async deleteUser(context, id) {
    try {
      let { msg } = await axios.delete(`$DataURL}users/delete/${id}`);

      context.dispatch("fetchUsers");
      sweet({
        title: "Delete user",
        text: msg,
        icon: "success",
        timer: 2000,
      });
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when deleting a user.",
        icon: "error",
        timer: 2000,
      });
    }
  },

  async updateService(context, payload) {
    try {
      let { msg } = await (
        await axios.patch(
          `${DataURL}services/update/${payload.serviceID}`,
          payload
        )
      ).data;
      context.dispatch("fetchServices");
      sweet({
        title: "Update service",
        text: msg,
        icon: "success",
        timer: 2000,
      });
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when updating a service.",
        icon: "error",
        timer: 2000,
      });
    }
  },
  async deleteService(context, payload) {
    try {
      let { msg } = await axios.delete(
        `${DataURL}services/delete/${payload}`
      );

      context.dispatch("fetchServices");
      sweet({
        title: "Delete service",
        text: msg,
        icon: "success",
        timer: 2000,
      });
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when deleting a service.",
        icon: "error",
        timer: 2000,
      });
    }
  },
  async addNewService(context, add) {
    try {
      let { msg } = await axios.post(`${DataURL}services/addService`, add);

      context.dispatch("fetchServices");
      sweet({
        title: "Adding Service",
        text: msg,
        icon: "success",
        timer: 2000,
      });
    } catch (e) {
      sweet({
        title: "Error",
        text: "An error occurred when adding services.",
        icon: "error",
        timer: 2000,
      });
    }
  },
    async login(context, payload) {
      try{
       const {msg, token, result} = (await axios.post(`${DataURL}users/login`, payload)).data 
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          token, msg, result
        })
        AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Welcome back, 
          ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: e.message,
          icon: "error",
          timer: 2000
        })
      }
      

    },
    async fetchServices(context) {
      try{
        let {results} = 
        (await axios.get(`${DataURL}services`)).data
        if(results) {
          context.commit('setServices', results)
        }
    
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving service.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchService(context, payload) {
      try{
        let {result} = (await axios.get(`${DataURL}services/${payload.id}`)).data
        if(result) {
          context.commit('setService', result)
        }else {
          sweet({
            title: 'Retrieving a single service',
            text: 'Service was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'A service was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },

  },
  modules: {},
});
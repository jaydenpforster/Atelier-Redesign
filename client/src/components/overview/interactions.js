import axios from 'axios'
import config from '../../../../config.js'

clickModal() {
  let time = new Date()
  axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    headers: {
      'Authorization': config.TOKEN
    },
    data: {
      element: 'Modals',
      widget: 'Overview',
      time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    }
  })
}
clickPhotos() {
  let time = new Date()
  axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    headers: {
      'Authorization': config.TOKEN
    },
    data: {
      element: 'Photos',
      widget: 'Overview',
      time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    }
  })
}

clickDescription() {
  let time = new Date()
  axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    headers: {
      'Authorization': config.TOKEN
    },
    data: {
      element: 'Description',
      widget: 'Overview',
      time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    }
  })
}
clickStyles() {
  let time = new Date()
  axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    headers: {
      'Authorization': config.TOKEN
    },
    data: {
      element: 'Styles',
      widget: 'Overview',
      time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    }
  })
}
clickChosensSelectors() {
  let time = new Date()
  axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    headers: {
      'Authorization': config.TOKEN
    },
    data: {
      element: 'ChosenSelectors',
      widget: 'Overview',
      time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    }
  })
}

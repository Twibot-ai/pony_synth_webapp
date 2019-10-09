import axios from 'axios'

const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const instance = axios.create({
  headers: {
    'X-CSRF-Token': csrf_token
  }
});

export default instance;

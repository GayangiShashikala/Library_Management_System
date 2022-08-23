import axios from 'axios'

const REST_API_URL = 'http://localhost:8080/api/v1/Books';

class Service {

    getAll(){
        return axios.get(REST_API_URL);
    }

    create(Book){
        return axios.post(REST_API_URL,Book);
    }

    getById(id){
        return axios.get(REST_API_URL+"/"+id);
    }
    update(Book, id){
        return axios.put(REST_API_URL + '/' + id, Book);
    }

    delete(id){
        return axios.delete(REST_API_URL + '/' + id);
    }
  
}

export default new Service();

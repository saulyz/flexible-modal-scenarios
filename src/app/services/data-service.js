import apiService from './api-service';

class DataService {
    
    testLuck() {
        return apiService.get('luck')
    }
}

export default new DataService();

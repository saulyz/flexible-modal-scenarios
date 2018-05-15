import apiService from './api-service';

class DataService {
    
    testLuckRaw() {
        return apiService.get('luck');
    }

}

export default new DataService();

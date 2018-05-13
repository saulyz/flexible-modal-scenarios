import apiService from './api-service';

class ActionService {
    
    testLuck() {
        return apiService.get('luck')
    }
}

export default new ActionService();

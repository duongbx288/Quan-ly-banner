import axios from "axios";

const BANNER_API_BASE_URL = "http://localhost:8080/api/banners";
class BannerService {
    // lay danh sach banner
    getListBanner() {
        return axios.get(BANNER_API_BASE_URL);
    }

    createBanner(banner) {
        return axios.post(BANNER_API_BASE_URL, banner);
    }

    getCategoryById(id) {
        return axios.get(BANNER_API_BASE_URL + '/' + id);
    }

    updateCategory(banner, id) {
        return axios.put(BANNER_API_BASE_URL + '/' + id, banner);
    }

    deleteCategory(id) {
        return axios.delete(BANNER_API_BASE_URL + '/' + id);
    }
}
export default new BannerService();
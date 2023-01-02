import { UPLOAD_EXCEL } from "../configs/url.config";
import http from "../services/http.service";

export async function UploadImage(data, config) {
    try {
        const response = await http.post(UPLOAD_EXCEL, data, config);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}
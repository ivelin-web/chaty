import { io } from "socket.io-client";

class SocketService {
    constructor() {
        this.socket = null;
    }

    connect = (url) => {
        return new Promise((resolve, reject) => {
            this.socket = io(url);

            if (!this.socket) {
                return reject("Socket connect error");
            }

            this.socket.on("connect", () => {
                resolve(this.socket);
            });

            this.socket.on("connect_error", (err) => {
                console.log(`Connection error: ${err}`);
                reject(err);
            });
        });
    };
}

export default new SocketService();

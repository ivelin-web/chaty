import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { Buffer } from "buffer";
import loader from "../../assets/loader.gif";
import Container from "../../components/Containers/SetAvatar";
import { setAvatar } from "../../services/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SetAvatar() {
    const api = "https://api.multiavatar.com/45678945";
    const avatarsToShow = 4;
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = [];

            for (let i = 0; i < avatarsToShow; i++) {
                const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
                const buffer = new Buffer(image.data);

                data.push(buffer.toString("base64"));
            }

            setAvatars(data);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const setProfilePicture = () => {
        if (!selectedAvatar) {
            toast.error("Please select an avatar");
            return;
        }

        const avatarImage = avatars[selectedAvatar];

        setAvatar({ avatarImage })
            .then(({ data }) => {
                console.log(data);
            })
            .catch(({ response: err }) => {
                console.log(err);
            });
    };

    return isLoading ? (
        <Container>
            <img src={loader} alt="loader" className="loader" />
        </Container>
    ) : (
        <Container>
            <div className="titleContainer">
                <h1>Pick an avatar as your profile picture</h1>
            </div>
            <div className="avatars">
                {avatars.map((avatar, index) => {
                    return (
                        <div key={index} className={`avatar ${selectedAvatar === index ? "selected" : ""}`}>
                            <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" onClick={() => setSelectedAvatar(index)} />
                        </div>
                    );
                })}
            </div>
            <button className="submitBtn" onClick={setProfilePicture}>
                Set as Profile Picture
            </button>
        </Container>
    );
}

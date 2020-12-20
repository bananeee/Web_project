import React from "react";
import style from "./profile.module.css";

const Profile = () => {
    return (
        <div id={style.container}>
            <div className={style.category} id={style.photo}>
                <div className={style.title} id={style.title_photo}>
                    <h3>Photo</h3>
                </div>
                <div className={style.content} id={style.content_photo}>
                    <div className={style.image_container}>
                        <img
                            // src="./avatar.png"
                            // alt="profile photo"
                        />
                    </div>
                    <div className={style.image_instruction}>
                        <p>Choose an image from your computer</p>
                        <button className={style.browse_button}>Browse</button>
                        <button className={style.delete_button}>Delete</button>
                    </div>
                </div>
            </div>

            <div className={style.category} id={style.info}>
                <div className={style.title} id={style.title_info}>
                    <h3>Infomation</h3>
                </div>
                <div className={style.content} id={style.content_info}>
                    <div className={style.content_box}>
                        <label for="first_name">First Name</label>
                        <input
                            type="text"
                            placeholder="John"
                            className={style.type_in}
                            id={style.first_name}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="last_name">Last Name</label>
                        <input
                            type="text"
                            placeholder="Doe"
                            className={style.type_in}
                            id={style.last_name}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="username">Username</label>
                        <input
                            type="text"
                            placeholder="johndoe123"
                            className={style.type_in}
                            id={style.username}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="bio">Bio</label>
                        <textarea
                            id={style.bio}
                            className={style.type_in}
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className={style.category} id={style.address}>
                <div className={style.title} id={style.title_address}>
                    <h3>Address</h3>
                </div>
                <div className={style.content} id={style.content_address}>
                    <div className={style.content_box}>
                        <label for="no">No</label>
                        <input
                            type="text"
                            placeholder="144"
                            className={style.type_in}
                            id={style.no}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="street">Street</label>
                        <input
                            type="text"
                            placeholder="Xuân Thủy"
                            className={style.type_in}
                            id={style.street}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="ward">Ward</label>
                        <input
                            type="text"
                            placeholder="Dịch Vọng Hậu"
                            className={style.type_in}
                            id={style.ward}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="district">District</label>
                        <input
                            type="text"
                            placeholder="Cầu Giấy"
                            className={style.type_in}
                            id={style.district}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="city">City</label>
                        <input
                            type="text"
                            placeholder="Hà Nội"
                            className={style.type_in}
                            id={style.city}
                        />
                    </div>
                </div>
            </div>

            <div className={style.category} id={style.contact}>
                <div className={style.title} id={style.title_contact}>
                    <h3>Contact</h3>
                </div>
                <div className={style.content} id={style.content_contact}>
                    <div className={style.content_box}>
                        <label for="phone">Phone</label>
                        <input
                            type="text"
                            placeholder="0123456789"
                            className={style.type_in}
                            id={style.phone}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="email">Email</label>
                        <input
                            type="text"
                            placeholder="johndoe@abc.xyz"
                            className={style.type_in}
                            id={style.email}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="facebook">Facebook</label>
                        <input
                            type="text"
                            placeholder="facebook.com/johndoe"
                            className={style.type_in}
                            id={style.facebook}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="instagram">Instagram</label>
                        <input
                            type="text"
                            placeholder="instagram.com/johndoe"
                            className={style.type_in}
                            id={style.instagram}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="twitter">Twitter</label>
                        <input
                            type="text"
                            placeholder="twitter.com/johndoe"
                            className={style.type_in}
                            id={style.twitter}
                        />
                    </div>

                    <div className={style.save_button}>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

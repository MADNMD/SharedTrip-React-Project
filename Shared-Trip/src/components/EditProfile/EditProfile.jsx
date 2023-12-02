import React, { useEffect, useState } from "react";
import styles from './EditProfile.module.css';

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";

export const EditProfile = () => {

    const { userId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const { firstname, lastname, username, email, telefon, profilePicture, onEditProfileSubmit } = useAuthContext();
    const { values, errors, touched, changeHandler, onBlurHandler, onFocusHandler, changeValues, onSubmit } = useForm({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        telefon: telefon,
        profilePicture: profilePicture,
    }, onEditProfileSubmit);

    useEffect(() => {
        authService.getUser(userId)
            .then(userData => {
                changeValues(userData);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(`Misho ${err}`)
            })
    }, [userId]);


    return (
        <>
            {isLoading
                ? <Loading />
                : <section className={styles['site-edit-account']}>
                    <h3>Edit Account</h3>
                    <div className={styles.container}>
                        <form method="PUT" onSubmit={onSubmit}>
                            <div className={styles['form-group-edit']}>
                                <div className={styles['form-row']}>
                                    <label htmlFor="firstname">Firstname</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Ivan"
                                        value={values.firstname}
                                        onChange={changeHandler}
                                        onBlur={onBlurHandler}
                                        onFocus={onFocusHandler}
                                    />
                                    {touched.firstname && errors.firstname && <span className={styles['edit-profile-errors']}>{errors.firstname}</span>}
                                </div>
                                <div className={styles['form-row']}>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Ivan0000"
                                        value={values.username}
                                        onChange={changeHandler}
                                        onBlur={onBlurHandler}
                                        onFocus={onFocusHandler}
                                    />
                                    {touched.username && errors.username && <span className={styles['edit-profile-errors']}>{errors.username}</span>}
                                </div>
                            </div>
                            <div className={styles['form-group-edit']}>
                                <div className={styles['form-row']}>
                                    <label htmlFor="lastName">Lastname</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Ivanov"
                                        value={values.lastname}
                                        onChange={changeHandler}
                                        onBlur={onBlurHandler}
                                        onFocus={onFocusHandler}
                                    />
                                    {touched.lastname && errors.lastname && <span className={styles['edit-profile-errors']}>{errors.lastname}</span>}
                                </div>
                                <div className={styles['form-row']}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Ivan@abv.bg"
                                        value={values.email}
                                        onChange={changeHandler}
                                        onBlur={onBlurHandler}
                                        onFocus={onFocusHandler}
                                    />
                                    {touched.email && errors.email && <span className={styles['edit-profile-errors']}>{errors.email}</span>}
                                </div>
                            </div>
                            <div className={styles['form-group-edit']}>
                                <div className={styles['form-row']}>
                                    <label htmlFor="profilePicture">Profile picture Url</label>
                                    <input
                                        type="text"
                                        id="profilePicture"
                                        name="profilePicture"
                                        placeholder="https://..."
                                        value={values.profilePicture}
                                        onChange={changeHandler}
                                        onBlur={onBlurHandler}
                                        onFocus={onFocusHandler}
                                    />
                                    {touched.profilePicture && errors.profilePicture && <span className={styles['edit-profile-errors']}>{errors.profilePicture}</span>}
                                </div>
                            </div>
                            <div className={styles['form-group-edit']}>
                                <div className={styles['form-row']}>
                                    <label htmlFor="telefon">Telefon</label>
                                    <input
                                        type="text"
                                        id="telefon"
                                        name="telefon"
                                        placeholder="0888123456"
                                        value={values.telefon}
                                        onChange={changeHandler}
                                        onBlur={onBlurHandler}
                                        onFocus={onFocusHandler}
                                    />
                                    {touched.telefon && errors.telefon && <span className={styles['edit-profile-errors']}>{errors.telefon}</span>}
                                </div>
                            </div>
                            <div className={styles['edit-btn-trip']}>
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                </section>
            }
        </>
    )
}
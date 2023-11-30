import React from "react";
import styles from './CreateAcount.module.css';

import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const CreateAcount = () => {

    const { onRegisterSubmit, serverError } = useAuthContext();
    const { values, errors, touched, changeHandler, onFocusHandler, onBlurHandler, onSubmit } = useForm({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        profilePicture: '',
        telefon: '',
        password: '',
        rePassword: '',
    }, onRegisterSubmit);
    
    return (

        <>
            {serverError && (
                <div>
                    <div className="errorContainer">
                        <p>{serverError}</p>
                    </div>
                </div>
            )}

            <section className={styles['site-create-account']}>
                <h3>Create Account</h3>
                <div className={styles.container}>
                    <form method="POST" onSubmit={onSubmit}>
                        <div className={styles['form-group']}>
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
                                {touched.firstname && errors.firstname && <span className={styles['create-account-errors']}>{errors.firstname}</span>}
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
                                {touched.username && errors.username && <span className={styles['create-account-errors']}>{errors.username}</span>}
                            </div>
                        </div>
                        <div className={styles['form-group']}>
                            <div className={styles['form-row']}>
                                <label htmlFor="lastname">Lastname</label>
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
                                {touched.lastname && errors.lastname && <span className={styles['create-account-errors']}>{errors.lastname}</span>}
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
                                {touched.email && errors.email && <span className={styles['create-account-errors']}>{errors.email}</span>}
                            </div>
                        </div>
                        <div className={styles['form-group']}>
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
                                {touched.profilePicture && errors.profilePicture && <span className={styles['create-account-errors']}>{errors.profilePicture}</span>}
                            </div>
                            <div className={styles['form-row']}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="******"
                                    value={values.password}
                                    onChange={changeHandler}
                                    onBlur={onBlurHandler}
                                    onFocus={onFocusHandler}
                                />
                                {touched.password && errors.password && <span className={styles['create-account-errors']}>{errors.password}</span>}
                            </div>
                        </div>
                        <div className={styles['form-group']}>
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
                                {touched.telefon && errors.telefon && <span className={styles['create-account-errors']}>{errors.telefon}</span>}
                            </div>
                            <div className={styles['form-row']}>
                                <label htmlFor="rePassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="rePassword"
                                    name="rePassword"
                                    placeholder="******"
                                    value={values.rePassword}
                                    onChange={changeHandler}
                                    onBlur={onBlurHandler}
                                    onFocus={onFocusHandler}
                                />
                                {touched.rePassword && errors.rePassword && <span className={styles['create-account-errors']}>{errors.rePassword}</span>}
                            </div>
                        </div>
                        <div className={styles['create-account-btn']}>
                            <input type="submit" value="Create Account" />
                            <p>Already have an account<Link to="/user/login">Login</Link></p>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}
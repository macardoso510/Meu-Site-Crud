import React, { Component, useStat1e, useEffect, useState } from "react"
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkboxl,
    Link,
    Grid,
    Box,
    Typography,
    Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Cadastro(props) {
    const [form, setState] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        checkPassword: null,
    });

    const [nameForm, setName] = useState({
        msgFirstName: "",
    })
    const [formLastName, setLast] = useState({
        msgFirstName: "",
    })
    const [formEmail, setEmail] = useState({
        msgLastName: "",
    })
    const [formPassword, setPassword] = useState({
        msgLastName: "",
    })
    const [error, setError] = useState({
        msg: "",
    });


    const handlerSubmit = e => {
        const { name, value } = e.target;
        e.preventDefault();
        console.log(form);
        if (form) {

            console.log(`
            --SUBMITTING--
            First Name: ${form.firstName}
            Last Name: ${form.lastName}
            Email: ${form.email}
            Password: ${form.password}
            Check Password: ${form.checkPassword}
            `);
        } else {
            console.error("Algum campo esta vazio");
        }
        // valida se a senha estao iguais
        if (form.password === form.checkPassword) {
            setError({
                hasError: false,
                msg: ""
            })
        } else {
            setError({
                hasError: true,
                msg: "Senhas Diferentes"
            })
        }
        // validaçao do campo "firstName"
        if (form.firstName == null){
            setName({
                name1: true,
                msgFirstName: "campo incorreto",
            })
        } else {
            setName({
                name1: false,
                msgFirstName: "",
            })
        }
        // validaçao do campo "lastName"
        if(form.lastName === null ){
            setLast({
                name2: true,
                msgLastName: "campo incorreto"
            })
        }else {
            setLast({
                name2: false,
                msgLastName: ""
            })
        }

    }



    const updateField = e => {
        e.preventDefault();
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const classes = useStyles();
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                 </Typography>
                <form className={classes.form} onSubmit={handlerSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                // || '' serve para fazer o 'value' nao ser null ou undefined dentro o input(TextField)
                                value={form.firstName || ''}
                                onChange={updateField}
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                error={nameForm.name1}
                                helperText={nameForm.msgFirstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={form.lastName || ''}
                                onChange={updateField}
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                error={formLastName.name2}
                                helperText={formLastName.msgLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={form.email || ''}
                                onChange={updateField}
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                            // autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={form.password || ''}
                                onChange={updateField}
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={form.checkPassword || ''}
                                onChange={updateField}
                                variant="outlined"
                                fullWidth
                                name="checkPassword"
                                label="Confirm password"
                                type="password"
                                id="checkPassword"
                                autoComplete="current-password"
                                error={error.hasError}
                                helperText={error.msg}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                     </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="./Login" variant="body2">
                                Already have an account? Sign in
                             </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}
export default Cadastro;
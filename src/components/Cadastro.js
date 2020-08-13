import React, { useState } from "react"
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    // FormControlLabel,
    // Checkboxl,
    Link,
    Grid,
    // Box,
    Typography,
    Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Login'


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
    const [nameForm, setName] = useState({})
    const [formLastName, setLast] = useState({})
    const [formEmail, setEmail] = useState({})
    const [formPassword, setPassword] = useState({})
    const [error, setError] = useState({});


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
        if (form.firstName == null || form.firstName === "") {
            setName({
                hasError: true,
                msg: "invalid field",
            })
        } else {
            setName({
                hasError: false,
                msg: "",
            })
        }
        // validaçao do campo "lastName"
        if (form.lastName === null || form.lastName === "") {
            setLast({
                hasError: true,
                msg: "invalid field"
            })
        } else {
            setLast({
                hasError: false,
                msg: ""
            })
        }
        // Validaçao do campo "email"
        if (form.email === null || form.email === "") {
            setEmail({
                hasError: true,
                msg: "invalid field"
            })
        } else {
            setEmail({
                hasError: false,
                msg: ""
            })
        }
        // Validaçao do campo "password"
        if (form.password === null || form.password === "") {
            setPassword({
                hasError: true,
                msg: "enter a password"
            })
        } else {
            setPassword({
                hasError: false,
                msg: ""
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
                                // id="firstName"
                                label="First Name"
                                autoFocus
                                error={nameForm.hasError}
                                helperText={nameForm.msg}
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
                                error={formLastName.hasError}
                                helperText={formLastName.msg}
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
                                error={formEmail.hasError}
                                helperText={formEmail.msg}
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
                                error={formPassword.hasError}
                                helperText={formPassword.msg}
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
                                Alreadydddddddddd have an account? Sign in
                             </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );

   function enviarLogin() {
        enviarLogin = [form.email, form.checkPassword]
    }
}
export default Cadastro;


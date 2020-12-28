import React, {useRef, useState, FormEvent, ReactElement} from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import {FormHelperText} from "@material-ui/core"
import useStyles from "./SignIn.styles"
import Title from "../../atoms/Title"

export type OnSubmitProps = {
  identifier: string,
  password: string
}

export type PropsSignIn = {
  onSubmit?: (props: OnSubmitProps) => void,
  errorText?: string,
  loading?: boolean,
  title: string,
  singUpOnClick: () => any,
  ForgotPasswordOnClick: () => any
};

export default function SignIn({
                                 onSubmit,
                                 errorText,
                                 loading,
                                 title,
                                 singUpOnClick,
                                 ForgotPasswordOnClick
                               }: PropsSignIn): ReactElement {
  const classes = useStyles()
  const identifierRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const [errors, setErrors] = useState({identifier: false, password: false})


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (identifierRef.current && passwordRef.current) {
      const identifier = identifierRef.current?.value
      const password = passwordRef.current?.value
      if (identifier && password && onSubmit !== undefined) {
        onSubmit({identifier, password})
      }
      setErrors({
        identifier: !identifier,
        password: !password
      })
    }
  }

  return (
    <Container component="main" maxWidth="xs">

      <div className={classes.paper}>

        <form className={classes.form} method="POST" noValidate onSubmit={handleSubmit}>
          <Typography align="center" gutterBottom variant="h4" component="h2">
            <Title>{title}</Title>
          </Typography>
          <br/>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="identifier"
            label="Corporative email"
            name="identifier"
            autoComplete="identifier"
            autoFocus
            inputRef={identifierRef}
            error={errors.identifier}
            helperText={errors.identifier && "Incorrect entry."}
            onChange={() => {
              setErrors({...errors, identifier: false})
            }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
            error={errors.password}
            helperText={errors.password && "Incorrect entry."}
            onChange={() => {
              setErrors({...errors, password: false})
            }}
          />

          <Typography align="left">
            <FormControlLabel
              control={<>
                <Checkbox
                  value="remember"
                  color="primary"
                />
              </>}
              label="Remember me"
            />
          </Typography>

          {errorText && (
            <Typography align="center"> {errorText}</Typography>
          )}


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {!loading && "Sing In"}
            {loading && "Loading..."}
          </Button>

          <Grid container>
            <Grid item xs>
              <Typography align="center" component="a" className={classes.link}
                          onClick={ForgotPasswordOnClick}>
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {`Are you an user? `}
                <Typography align="center" component="a" className={classes.link}
                            onClick={singUpOnClick}>
                  Sing Up
                </Typography>
              </Typography>
            </Grid>
          </Grid>

        </form>

      </div>
    </Container>
  )
}

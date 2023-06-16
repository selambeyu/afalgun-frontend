import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Alert, Box, Button, FormHelperText, TextField } from '@mui/material';


import { useAuth } from '../../context/AuthContext';


export const JWTLogin = (props) => {
  const router = useRouter();
  // const {signIn}  = useAuth();
  const { logIn ,isAuthenticated} = useAuth();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log('isAthen',isAuthenticated)
        const userCredential = await logIn(values.email, values.password);
        console.log("user credential", userCredential._token);
        const user = userCredential.user;
        console.log("what is the respons here", user.uid);
        sessionStorage.setItem("userToken", user.accessToken);

        // Set user data in local storage
        localStorage.setItem("userData", JSON.stringify(user));
        router.push("/");

        console.log("isAuthenticated",isAuthenticated)
      } catch (err) {
        console.log("error", err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      {...props}>
      <TextField
        autoFocus
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        helperText={formik.touched.email && formik.errors.email}
        label="Email Address"
        margin="normal"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
      />
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        label="Password"
        margin="normal"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
      />
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Box>
      )}
      <Box sx={{ mt: 2 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Log In
        </Button>
      </Box>
  
    </form>
  );
};

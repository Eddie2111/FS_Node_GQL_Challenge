import {
  TextInput, PasswordInput, Text, Paper,
  Group, PaperProps, Button, Divider,
  Anchor, Stack
} from "@mantine/core";
import { useMutation } from "@apollo/client";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";

import { signIn, signUp } from "../graphql/mutations/users/index"
import { loginSchema, registerSchema } from "../utils/validation/user";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function AuthenticationForm(props: PaperProps) {
  const { login, userLogin } = useAuth();
  const navigate = useNavigate();
  const [type, toggle] = useToggle(["login", "register"]);
  const [
    SignIn,
    { loading: signin_loading, error: signin_error },
  ] = useMutation(signIn);
  const [
    SignUp,
    { loading: signup_loading, error: signup_error },
  ] = useMutation(signUp);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },

    validate: {
      name: (val) => (/^\S+@\S+$/.test(val) ? null : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const submit = async () => {
    try {
      const schema = type === "login" ? loginSchema : registerSchema;
      const data = await schema.parseAsync(form.values);

      if (type === "login") {
        const response = await SignIn({
          variables: { email: data?.email ?? "", password: data?.password ?? "" },
        });
        if (response?.data?.signIn?.email && response?.data?.signIn?.id) {
          userLogin(response?.data?.signIn ?? {id: "", email: "", name: ""});
          login();
          navigate("/home");
        } else {
          toast.warning("No user exists by that email, try signing in?");
        }
      } else {
        const response = await SignUp({
          variables: {
            email: data?.email ?? "",
            password: data?.password ?? "",
            name: data?.name ?? "",
          },
        });
        if(response?.data?.signUp?.email){
          toggle();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper
      radius="md"
      p="xl"
      style={{ width: "28rem", margin: "0 auto" }}
      withBorder
      {...props}
    >
      <Text size="lg" fw={500}>
        Welcome to TeeBay, {type} with
      </Text>

      <Group grow mb="md" mt="md"></Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(submit)}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button
            type="submit"
            radius="xl"
            loading={signin_loading || signup_loading}
          >
            {upperFirst(type)}
          </Button>
        </Group>

        {signin_error && <Text color="red">{signin_error.message}</Text>}
        {signup_error && <Text color="red">{signup_error.message}</Text>}
      </form>
    </Paper>
  );
}

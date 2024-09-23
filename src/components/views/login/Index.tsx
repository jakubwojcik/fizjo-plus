import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui-library/button.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui-library/form.tsx";
import { Input } from "@/components/ui-library/input.tsx";
import { loginFormSchema } from "@/constants/schemas.ts";
import { supabase } from "@/lib/supabase.ts";

export const Index = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const { email, password } = values;

    try {
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // TODO: Change the route after successful login
      await navigate({ to: "/" });
    } catch (error) {
      console.error("Failed to log in:", error);
    }
  };

  return (
    <Form {...form}>
      <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your e-mail"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Log in
        </Button>
      </form>
    </Form>
  );
};

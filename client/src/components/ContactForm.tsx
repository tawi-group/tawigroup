import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { api } from '@/lib/api';

export default function ContactForm() {
  const { toast } = useToast();
  const [newsletter, setNewsletter] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      message: '',
      newsletter: 'false',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await api.contact.submit({
        ...data,
        newsletter: newsletter ? 'true' : 'false',
      });

      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: 'Message sent successfully!',
        description: data.message,
      });
      form.reset();
      setNewsletter(false);
    },
    onError: (error: any) => {
      toast({
        title: 'Error sending message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = async (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-gray-700'>
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    data-testid='input-name'
                    placeholder='Enter your full name'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tawi-accent focus:border-transparent transition-colors duration-200'
                  />
                </FormControl>
                <FormMessage data-testid='error-name' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-gray-700'>
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    data-testid='input-email'
                    type='email'
                    placeholder='Enter your email address'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tawi-accent focus:border-transparent transition-colors duration-200'
                  />
                </FormControl>
                <FormMessage data-testid='error-email' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='organization'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-gray-700'>
                  Organization
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    data-testid='input-organization'
                    placeholder='Your organization name'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tawi-accent focus:border-transparent transition-colors duration-200'
                  />
                </FormControl>
                <FormMessage data-testid='error-organization' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm font-semibold text-gray-700'>
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    data-testid='textarea-message'
                    rows={5}
                    placeholder='Tell us about your strategic challenges and objectives...'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tawi-accent focus:border-transparent transition-colors duration-200 resize-none'
                  />
                </FormControl>
                <FormMessage data-testid='error-message' />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            data-testid='button-submit'
            disabled={contactMutation.isPending}
            className='w-full bg-tawi-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-tawi-primary/90 transition-all duration-300 focus:ring-4 focus:ring-tawi-primary/20 shadow-lg'
          >
            {contactMutation.isPending ? (
              <div className='flex items-center justify-center'>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              <div className='flex items-center justify-center'>
                Send Message
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
              </div>
            )}
          </Button>

          <div className='pt-6 border-t border-gray-200'>
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='newsletter'
                data-testid='checkbox-newsletter'
                checked={newsletter}
                onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                className='rounded border-gray-300 text-tawi-accent focus:ring-tawi-accent'
              />
              <Label
                htmlFor='newsletter'
                className='text-sm text-gray-600 cursor-pointer'
              >
                Subscribe to our newsletter for strategic insights and industry
                updates
              </Label>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

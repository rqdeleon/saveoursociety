'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { format, formatDate } from "date-fns"
import { 
  CalendarIcon,
  Facebook,
  MapPin
 } from 'lucide-react'

import { cn } from "@/lib/utils"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { useToast } from "@/components/ui/use-toast"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { siteInfo } from '@/siteinfo'


const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email({message: "Check in date is required"}),
    cin: z.date({message: "Check in date is required"}),
    cout: z.date({message: "checout date is required"}),
    message: z.string().optional(),
})

type FooterFormSchema = z.infer<typeof formSchema>

export default function Footer(){

  const form = useForm<FooterFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name:'',
      email:'',
      cin: new Date(),
      cout: new Date(),
      message:'',
    }
  })

  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data:FooterFormSchema) =>{

    try {
      setLoading(true)
        await fetch('api/contact/',{
          method: 'POST',
          body: JSON.stringify(data)
        })
      toast({
        variant: "default",
        title: "☑️ Message Submitted",
        description: `Thank you for messaging us ${data.name}, We are going to respond shortly `
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: " Something went wrong",
        description: `Please try again shortly error: ${error}`
      })
    } finally{
      setLoading(false)
    }
  }
  return(
    <div id="footer" className="">
      <footer className="bg-gray-100 pt-12 relative bg-cover bg-center z-0 " style={{backgroundImage:"url(https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/pw6z3geogsyjbaaoebho)"}}>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10">
            <div className="lg:w-1/2 mb-8 lg:mb-0 z-10">
                <h2 className="text-4xl font-bold text-white mb-4">Get Involved with Save Our Society - SOS | Volunteer and Donate</h2>
                <p className="text-white/80" >Discover how you can get involved with Save Our Society SOS. Learn about volunteer opportunities and how your donations can make a significant impact.</p>
            </div>
            <div className="-mb-16 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with us</h3>
                <p className="text-gray-700 mb-6">Have a question or want to get involved? Fill out the form below and we’ll get back to you as soon as possible.</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
                    
                    <FormField 
                      control={form.control}
                      name='name'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                            <Input 
                              type='text'
                              alt='name'
                              placeholder='name'
                              className='w-full p-2'
                              disabled={loading}
                            {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>

                      )}
                    />

                    <FormField 
                      control={form.control}
                      name='email'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                            <Input 
                              type='email'
                              alt='name'
                              placeholder='email'
                              className='w-full p-2'
                              disabled={loading}
                            {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>

                      )}
                    />
                    
                    <FormField 
                      control={form.control}
                      name='message'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder='Anything you want to ask?' disabled={loading} {...field}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  <Button 
                    type="submit" 
                    className="w-full text-white px-4 py-2 rounded-lg "
                    disabled={loading}
                  >
                    Connect with us
                  </Button>

                  </form>
                </Form>
            </div>
        </div>
        <section className="bg-white z-50 py-8 pt-24">
            <div className="container mx-auto px-4 bg-white z-10">
                <div className="flex flex-col justify-between items-start mt-8 z-10">
                    <div className="text-slate-800">
                      <h2 className='text-3xl my-3 uppercase leading-10'>{siteInfo.sitename}</h2>
                      <p className='text-md'>{siteInfo.description}</p>
                    </div>
                    <div className="flex space-x-4 mt-4 items-start just">
                      <h4>follow us:</h4>
                      <a href={siteInfo.sm.fb} target='_blank' className="text-gray-600 hover:text-gray-900"><Facebook /></a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center z-10 mt-7 text-xs">
                    <div className="flex gap-x-7 items-center z-10 ml-0">
                        <p className="text-gray-600">© {siteInfo.sitename}. All Rights Reserved { formatDate(Date(),'yyyy' )}</p>
                        <p className="text-gray-600">Web develop by <a href='#'>Ralf Quezar De Leon</a></p>
                    </div>
                    <div className="flex space-x-4 z-10">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Rooms</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a>
                    </div>
                </div>
            </div>
        </section>
        <div className="absolute inset-0 bg-slate-800/70 -z-10"></div>
      </footer>
    </div>
  );
}
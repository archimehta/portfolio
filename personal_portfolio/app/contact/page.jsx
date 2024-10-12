'use client'

import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [statusMessage, setStatusMessage] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                setStatusMessage(`Error: ${result.error}`);
            }
        } catch (error) {
            setStatusMessage('Failed to send the message. Please try again later.');
        }
    };

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl xl:w-[100%]" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Contact me</h3>
                            <p className="text-white/60">Reach out to me!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstName" type="text" placeholder="First name" value={formData.firstName} onChange={handleInputChange} />
                                <Input name="lastName" type="text" placeholder="Last name" value={formData.lastName} onChange={handleInputChange} />
                                <Input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} />
                                <Input name="phone" type="text" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <Textarea name="message" className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleInputChange} />
                            <Button size="md" className="max-w-40" type="submit">
                                Send message
                            </Button>
                        </form>
                        {statusMessage && <p className="mt-4 text-white">{statusMessage}</p>}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

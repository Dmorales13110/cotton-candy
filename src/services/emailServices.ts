import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_igyjpnh';
const TEMPLATE_ID = 'template_ak3kakq';
const PUBLIC_KEY = 'qHehRJQ1tw8WNhGRo';

export interface EmailResponse {
    success: boolean;
    status?: number;
    text?: string;
    error?: string;
}

export const sendBookingEmail = async (formData: any): Promise<EmailResponse> => {
    const templateParams = {
        // Personal Info
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferred_contact: formData.preferredContactMethod,
        best_time: formData.bestTimeToContact,

        // Event Details
        event_type: formData.eventType,
        guest_count: formData.guestCount,
        duration: formData.duration,
        location: formData.location,
        flavors: formData.flavors.join(', '),

        // Additional Info
        special_requests: formData.specialRequests || 'None',

        // Metadata
        submitted_at: new Date().toLocaleString(),
    };

    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return {
            success: true,
            status: response.status,
            text: response.text,
        };
    } catch (error: any) {
        console.error('EmailJS Error:', error);
        return {
            success: false,
            error: error?.text || 'Failed to send email',
        };
    }
};
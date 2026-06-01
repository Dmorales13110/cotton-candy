import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_igyjpnh';
const COMPANY_TEMPLATE_ID = 'template_ak3kakq';
const CLIENT_TEMPLATE_ID = 'template_lfix653';
const PUBLIC_KEY = 'qHehRJQ1tw8WNhGRo';

const YOUR_EMAIL = 'cottoncandyut@gmail.com';

export interface EmailResponse {
    success: boolean;
    status?: number;
    text?: string;
    error?: string;
}

export const sendBookingEmail = async (formData: any): Promise<EmailResponse> => {
    let formattedDate = 'Not specified';
    let rawDate = '';

    if (formData.eventDate) {
        const dateObj = typeof formData.eventDate === 'string'
            ? new Date(formData.eventDate)
            : formData.eventDate;

        if (!isNaN(dateObj.getTime())) {
            const year = dateObj.getUTCFullYear();
            const month = dateObj.getUTCMonth();
            const day = dateObj.getUTCDate();

            const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            const weekday = weekdays[dateObj.getUTCDay()];
            formattedDate = `${weekday}, ${months[month]} ${day}, ${year}`;
            rawDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
    }

    const templateParams = {
        // Personal Info
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferred_contact: formData.preferredContactMethod,
        best_time: formData.bestTimeToContact,

        // Event Details
        event_type: formData.eventType,
        event_date: formattedDate,
        event_date_raw: rawDate,
        event_time: formData.eventTime || 'Not specified',
        guest_count: formData.guestCount,
        duration: formData.duration,
        location: formData.location,
        flavors: formData.flavors.join(', '),

        // Additional Info
        special_requests: formData.specialRequests || 'None',

        // Metadata
        submitted_at: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        }),
    };

    try {
        const yourEmailParams = {
            ...templateParams,
            to_email: YOUR_EMAIL,
        };

        const businessResponse = await emailjs.send(SERVICE_ID, COMPANY_TEMPLATE_ID, yourEmailParams, PUBLIC_KEY);

        const clientParams = {
            ...templateParams,
            to_email: templateParams.email,
        };

        await emailjs.send(SERVICE_ID, CLIENT_TEMPLATE_ID, clientParams, PUBLIC_KEY);

        return {
            success: true,
            status: businessResponse.status,
            text: businessResponse.text,
        };
    } catch (error: any) {
        console.error('❌ EmailJS Error:', error);
        return {
            success: false,
            error: error?.text || 'Failed to send email',
        };
    }
};
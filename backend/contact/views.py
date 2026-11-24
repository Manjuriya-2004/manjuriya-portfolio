from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics

from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        contact = serializer.save()

        subject = f"New Portfolio Enquiry: {contact.subject}"

        message = f"""
You have received a new enquiry from your portfolio.

Name: {contact.name}
Email: {contact.email}
Subject: {contact.subject}

Message:
{contact.message}
"""

        try:
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=["manju28044@gmail.com"],
                fail_silently=False,
            )
            print("Email notification sent successfully!")

        except Exception as error:
            print("Email notification failed:", error)